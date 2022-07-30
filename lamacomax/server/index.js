const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./bdd");
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
    console.log("server sur port 5000")
})

// SERVER WATCHING FILE COMMAND : nodemon index