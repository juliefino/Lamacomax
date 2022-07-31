const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./bdd");
const nodemailer = require("nodemailer");
/** const bcrypt = require("bcrypt");
const session = require('express-session');
require('dotenv').config();
const formulaireLogin = require( ????); **/

//MIDDLEWARE
app.use(cors());
app.use(express.json()); // GET JSON DATA
/** app.use(session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: 'sid',
    resave: false,
    saveUnitialized: false,
    cookie: {
        secure: process.env.ENVIRONMENT === 'production' ? 'true' : 'auto', 
        httpOnly : true, 
        sameSite: process.env.ENVIRONMENT === 'production' ? 'none' : 'lax',
    }
}))
 **/

// ROUTES API

// GET PRATICIENS
app.get('/praticiens', async(req, res) => {
    try {
        const praticiens = await pool.query('SELECT nom, prenom, type, description FROM praticiens');
        res.json(praticiens.rows);
    } catch(err) {
        console.error(err.message);
    }
})

// GET HORAIRES CENTRE
app.get('/contact', async(req, res) => {
    try {
        const horairescentre = await pool.query('SELECT lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche FROM horairescentre');
        res.json(horairescentre.rows);
    } catch(err) {
        console.error(err.message);
    }
})

// FORMULAIRE DE CONTACT -> ENVOIE DE MAILS

const contactEmail = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const nom = req.body.nom;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
      sender: email, 
      to: process.env.MAIL_ADDRESS, 
      subject: "Notification Lamacomax", 
      html: `<p>Bonjour, un nouveau message est arrivé depuis votre site Lamacomax :</p>
             <p>Nom: ${nom}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

/**
// POST CONNECTION ESPACE DOC
app.post('/espacedoc',async(req, res) => {
    formulaireLogin(req, res);
    console.log(req.session);
    
    const tentativeLogin = await pool.query('SELECT id, login, motdepasse FROM praticiens WHERE praticiens.login=$1', [req.body.login]);
    
    if (tentativeLogin.rowCount > 0 ) {
        const verifMdp = await bcrypt.compare(
            req.body.motdepasseIn,
            tentativeLogin.rows[0].motdepasse
        );
        if (verifMdp) {
            //login
            req.session.user = {
                login: req.body.loginIn,
                id: tentativeLogin.row[0].id
            };
            res.json({loggedIn: true, login: req.body.loginIn});
        } else {
            res.json({ loggedIn: false, status: 'Mauvais Login ou mot de passe'});
            console.log('error login from user');
        }
    } else {
        res.json({ loggedIn: false, status: 'Mauvais Login ou mot de passe'});
        console.log('error login from user');
    }
});
**/

app.listen(5000, () => {
    console.log("server running sur port 5000")
})

// SERVER WATCHING FILE COMMAND : nodemon index