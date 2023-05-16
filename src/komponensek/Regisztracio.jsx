import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../navbar';
import '../App.css'

export default function Regisztracio(props) {
   
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [uname, setUname] = useState('');
  var sha256 = require('js-sha256');

  function generateSalt(lengt) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < lengt; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  const handleSubmit = (e) => {
    let userSalt=generateSalt(64);
      e.preventDefault();
          (async () => {
            try {
             axios.post("https://localhost:5001/Registry", {
                  Id: e.target.elements.Id?.value,
                  FelhasznaloNev: e.target.elements.FelhasznaloNev?.value,
                  TeljesNev: e.target.elements.TeljesNev?.value,
                  SALT: userSalt,
                  HASH: sha256(sha256(e.target.elements.Password?.value + userSalt).toString()).toString(),
                  Email: e.target.elements.Email?.value,
                  Key: "",
              }, );
                alert(`Sikeres regisztráció: ${e.target.elements.FelhasznaloNev?.value}`);
              
            } catch (err) {
              console.log(err);
            }
          })();
      e.preventDefault();
      console.log(email);
  } 

  return(
    <>
      <Navbar/>
      <div></div>
      <div className="registercontainer">
          <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Teljes név:</label>
              <input value={name} required onChange={(e) => setName(e.target.value)} type="text" placeholder="példa" id="fullname" name="TeljesNev"/><br></br><hr></hr>
              <label htmlFor="email">Felhasználónév: </label>
              <input value={uname} required onChange={(e) => setUname(e.target.value)} type="text" placeholder="példa" id="name" name="FelhasznaloNev"/><br></br><hr></hr>
              <label htmlFor="email">Email: </label>
              <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="példa@asd.com" id="email" name="Email"/><br></br><hr></hr>
              <label htmlFor="password">Jelszó: </label>
              <input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="Password"/><br></br><hr></hr>
              <button className='registrybutton' type="submit">Regisztráció: </button>
          </form>
          <a className="link-btn" href="/bejelentkezes">Már van fiókod? Jelentkezz be itt!</a>
      </div>
    </>
  
  )
}
