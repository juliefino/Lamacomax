import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            
            <NavLink className='navbar-brand navbar-logo' to='/' exact>
                Toto
            </NavLink>
            
            <button
                className='navbar-toggler' 
                type='button' 
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <i className='fas fa-bars text-white'></i>
            </button>
            
            <div 
                className='collapse navbar-collapse'
                id='navbarSupportContent'>
                <ul className='navbar-nav ml-auto'>
                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>
                    
                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/' exact>
                            <i className='fas fa-tachometer-alt'></i>
                            ACCUEIL
                        </NavLink>
                    </li>
                    
                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/equipe' exact>
                            <i className='fas fa-tachometer-alt'></i>
                            EQUIPE
                        </NavLink>
                    </li>
                    
                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/rdv' exact>
                            <i className='fas fa-tachometer-alt'></i>
                            RENDEZ-VOUS
                        </NavLink>
                    </li>
                    
                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/contact' exact>
                            <i className='fas fa-tachometer-alt'></i>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
            
    )
}

export default Navbar;