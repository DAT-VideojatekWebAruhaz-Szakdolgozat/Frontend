import React from 'react'
import "../informaciok.css"
import { NavbarLogged } from './NavbarLogged'
import "../card.css";
import { useNavigate } from 'react-router-dom';

export default function InformaciokLogged() {
  const navigate = useNavigate();
  
  if(window.logged){
  return (
    <>
    <NavbarLogged/>
    <div className="about-section">
  <h1>Rólunk</h1>
  <p>A Kandó Kálmán felnőttképző szoftverfejlesztő és tesztelő szakján tanulunk</p>
</div>

<h2 className='h2ourteam'>Csapatunk tagjai:</h2><hr></hr>
<div className="row">
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Vanczák Tamás</h2>
        <p className="title">Frontend fejlesztés</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>vanczakt@kkszki.hu</p>
        <p><button className="button">Elérhetőség</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Liktor Adrián</h2>
        <p className="title">Backend fejlesztés</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>liktora@kkszki.hu</p>
        <p><button className="button">Elérhetőség</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Pásztor Dávid</h2>
        <p className="title">Asztali alkalmazás fejlesztés</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>pasztord@kkszki.hu</p>
        <p><button className="button">Elérhetőség</button></p>
      </div>
    </div>
  </div>
</div>
    </>
    
  )}
  else{
    navigate("/")
  }
}
