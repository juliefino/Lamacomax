import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from "./navbar";

const Navbar = () => {
    return (
        <>
        <Nav> 
            <NavLink to='/'>
                <h1>LOGO</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to='/accueil' activeStyle>
                    Accueil
                </NavLink>
                <NavLink to='/equipe' activeStyle>
                    Equipe
                </NavLink>
                <NavLink to='/rdv' activeStyle>
                    Rendez-vous
                </NavLink>
                <NavLink to='/contact' activeStyle>
                    Contact
                </NavLink>
                <NavLink to='/espacedoc' activeStyle>
                    Espace Doc
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;