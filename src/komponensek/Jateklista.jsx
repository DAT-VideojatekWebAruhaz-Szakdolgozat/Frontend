import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Navbar } from '../navbar';


export default function Jateklista() {
    const [game, setGame] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
 
    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try {
                const games = await axios.get(process.env.REACT_APP_BACKEND_URL+"/api/jatek");
                setGame(games.data);
                console.log(games);
                //let base64String = btoa(String.fromCharCode(...new Uint8Array(games.data)));
                //setBackenddata(base64String); //mysql blob elementet konvertálja képpé
            } catch (err) {
                console.log(err);
            } finally {
                setFetchPending(false);
            }
        })();
      }, []);
    

    return (
      <>
        <Navbar/>
        <div className="p-5  m-auto text-center content bg-ivory">
          {isFetchPending ? (
            <div className="spinner-border"></div>
          ) : (
            <div>
              <h2 className='jateknevszin'>Játékaink:</h2>
              {game.map((game) => (
                <NavLink key={game.id} to={`/jatek/${game.id}/${game.egyediId}`}>
                  <figure>
                    <div className='jateknev'>
    <figcaption><h3 id='jateknev' className="text-muted">{game.nev}</h3></figcaption>
    <figcaption><h4 id='jateknev' className="text-dark">{game.kategoria}</h4></figcaption>
    <figcaption><h6 id='jateknev' className="text-dark">{game.leiras}</h6></figcaption>
                    </div>
    <figure>
      

    <figcaption><h4 className="text-dark">{game.ar}Ft</h4></figcaption>
    
                    <img height={"300px"} width={"325px"} src={`data:image/jpg;base64,${game.kep}`}></img>

                  </figure>
                  
</figure>

                  </NavLink>
              ))}
            </div>
          )}
        </div>
      </>
      );
}
