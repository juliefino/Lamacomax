import React from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import './App.css';

import Rdv from './pages/rdv/rdv'
import Accueil from "./pages/accueil/accueil";
import Contact from "./pages/contact/contact";
import Equipe from "./pages/equipe/equipe";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact compnent={Accueil}/>
                <Route path='/rdv' exact compnent={Rdv}/>
                <Route path='/contact' exact compnent={Contact}/>
                <Route path='/equipe' exact compnent={Equipe}/>
            </Routes>
            
        </Router>
    
    );
}

export default App;
