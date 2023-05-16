import { BrowserRouter, json, NavLink, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Regisztracio from "./Regisztracio";
import { Routes } from "react-router-dom";
import { sha256 } from "js-sha256";
import { useParams } from "react-router-dom";
import React from "react";
import { Navbar } from "../navbar";
import '../../src/App.css';

export const Bejelentkezes = (props)=> {
  const [username, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [logged, setLogged] = useState(false);
    const[fullname, setFullName] = useState('');
    const[jogosultsag, setJogosultsag] = useState(0);
    const [userId, setUserid] = useState();
    const navigate = useNavigate();
    var sha256 = require('js-sha256');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        (async () => {
          axios
          .post("https://localhost:5001/Login/SaltRequest/"+username)
          .then((response) => {
            let lekertSalt = response.data;
            let tmpHash = sha256(pass + lekertSalt).toString();
            let url =
            "https://localhost:5001/Login?nev="+username+"&tmpHash="+tmpHash;
            axios
              .post(url)
              .then((response) => {
                if (response.status == 200) {
                  let tomb = response.data;
                  if (tomb[2] != -1) {
                    setLogged(true);
                    setUname(tomb[0]);
                    setFullName(tomb[1]);
                    setJogosultsag(tomb[2]);
                    setUserid(tomb[3]);
                    setUname(username);

                    console.log(response);
                    alert(
                      "Sikeres bejelentkezés: " + username + 
                      ", Vásárlói azonosítód: " + tomb[3]
                    );
                    window.logged = true;
                    console.log(logged);
                    navigate("/loggedHome")
                    

                  } else {
                    alert(tomb[0]);
                  }
                } else {
                  //document.getElementById("uzenet").textContent =
                  //  "Paprikás krumpleee";
                }
              })
              .catch((error) => {
                alert(error);
              });
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status == 400) {
              alert(error.response.data);
            } else {
              alert("Üres a felhasználónév!");
            }
          });
        })();
    }

    return(
      <>
      <Navbar/>
       <div className="registercontainer">
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUname(e.target.value)} type="username" placeholder="Felhasználónév" id="felhasznaloNev" name="felhasznaloNev"/>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Jelszó" id="Jelszo" name="Jelszo"/>
                <button type="submit">Bejelentkezés</button>
            </form>
            <a className="link-btn"  href="/regisztracio">Nincs fiókod? Regisztrálj itt!</a>
        </div>
      </>
       
    )
}  
    



 

