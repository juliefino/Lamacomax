import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

import Rdv from './pages/rdv/rdv'
import Accueil from "./pages/accueil/accueil";
import Contact from "./pages/contact/contact";
import Equipe from "./pages/equipe/equipe";
import Navbar from "./components/navbar";
import Espacedoc from "./pages/espacedoc/espacedoc";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Accueil/>}/>
                <Route path='/accueil' exact element={<Accueil/>}/>
                <Route path='/rdv' exact element={<Rdv/>}/>
                <Route path='/contact' exact element={<Contact/>}/>
                <Route path='/equipe' exact element={<Equipe/>}/>
                <Route path='/espacedoc' exact element={<Espacedoc/>}/>
            </Routes>
            
        </Router>
    
    );
}

export default App;
