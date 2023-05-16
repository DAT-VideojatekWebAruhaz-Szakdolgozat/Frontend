import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from 'react-router-dom';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import images from '../komponensek/DAT.webshop.jpg';
import '../styles.css';
import {FaGamepad} from "react-icons/fa";
import {ShoppingCart} from 'phosphor-react'
import { useState } from 'react';

export const NavbarLogged = () => {
    const [open, setOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    
    function linkClicked (){
      setClicked(!clicked);
    }
  
    const handleOpen = () => {
      setOpen(!open);
      const handleMenuOne = () => {
        // do something
        setOpen(false);
      };
    
      const handleMenuTwo = () => {
        // do something
        setOpen(false);
      };
    };
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
      setShowNav(!showNav)
    }
    const [isNavExpanded, setIsNavExpanded] = useState(true)




  return (
    <div>
      <div className='navigaton-menu'>
    <div className='nagyDiv'>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
          
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          

        <ul className="navbar-nav">
          <img className='logo' src={images} alt='imgf' ></img>
          <li className="nav-item">
            <NavLink to={`/loggedHome`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
              <span className="nav-link">Kezdőlap</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/jateklistalogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
              <span className="nav-link"> Összes játék</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <div className="dropdown">
              <button onClick={handleOpen} className="nav-link btn btn-secondary" id='dropdownButton'>Kategóriák</button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                  <NavLink  to={`/akciokalandlogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>Akció-Kaland</button></NavLink>
                    
                  </li>
                  <li className="menu-item">
                  <NavLink  to={`/rpglogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>RPG</button></NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink  to={`/racinglogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>Racing</button></NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink  to={`/sportlogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>Sport</button></NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink  to={`/shooterlogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>Shooter</button></NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink  to={`/akcio-szerepjateklogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> <button>Akció-Szerepjáték</button></NavLink>
                  </li>
                </ul>
              ) : null}
            </div>
            </NavLink>
          </li>       

          <li className="nav-item">
           <NavLink to={`/`} className={({ isActive }) => "nav-link" + (isActive ? "active" : "")}>
            <button className="nav-link btn btn-primary">Kijelentkezés</button>
           </NavLink> 
          </li>
          
          <li className="nav-item">
            <NavLink to={`/rolunklogged`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              <span className="nav-link">Információk rólunk</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/kosar`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            <ShoppingCart size={32}/>
            </NavLink>
          </li>

        </ul>
      
      </div>
      </div>
    </nav>
    </div>
    </div>
    </div>
  )
}

