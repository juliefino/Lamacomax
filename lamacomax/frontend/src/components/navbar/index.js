import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavLogo} from "./navbar";

// ROUTES LIEES AU TEXTE DE LA NAVBAR

const Navbar = () => {
    return (
        <>
        <Nav> 
            <NavLogo to='/accueil'>
                LOGO
            </NavLogo>
            <Bars />
            
            <NavMenu>
                <NavLink to='/accueil' activestyle={{color:'black'}}>
                    Accueil
                </NavLink>
                
                <NavLink to='/equipe' activestyle={{color:'black'}}>
                    Equipe
                </NavLink>
                
                <NavLink to='/rdv' activestyle={{color:'black'}}>
                    Rendez-vous
                </NavLink>
                
                <NavLink to='/contact' activestyle={{color:'black'}}>
                    Contact
                </NavLink>
                
                <NavLink to='/espacedoc' activestyle={{color:'black'}}>
                    Espace Doc
                </NavLink>
                
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;