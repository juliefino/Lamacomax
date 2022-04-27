const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./bdd");

//MIDDLEWARE
app.use(cors());
app.use(express.json()); // GET JSON DATA

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

app.listen(5000, () => {
    console.log("server sur port 5000")
})

// SERVER WATCHING FILE COMMAND : nodemon index