import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #4682B4;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px)/2);
    z-index: 1;
`;

export const NavLogo = styled(Link)`
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    margin-left : 1rem;
    margin-top : 1rem;
`;

export const NavLink = styled(Link)`
    color : white;
    font-size : 2rem;
    display : flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
    color : #ADD8E6;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    
    /*margin-right: 24px;*/
    
    /*width: 100vw*/
    /*white-space: nowrap;*/
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;