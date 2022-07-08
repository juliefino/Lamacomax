import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from "./navbar";


const Navbar = () => {
    return (
        <>
        <Nav> 
            <NavLink to='/accueil'>
                'BLABLA'
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/accueil' activeStyle={{color:'black'}}>
                    Accueil
                </NavLink>
                <NavLink to='/equipe' activeStyle={{color:'black'}}>
                    Equipe
                </NavLink>
                <NavLink to='/rdv' activeStyle={{color:'black'}}>
                    Rendez-vous
                </NavLink>
                <NavLink to='/contact' activeStyle={{color:'black'}}>
                    Contact
                </NavLink>
                <NavLink to='/espacedoc' activeStyle={{color:'black'}}>
                    Espace Doc
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;