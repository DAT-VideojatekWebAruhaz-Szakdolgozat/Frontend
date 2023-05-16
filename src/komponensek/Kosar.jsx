import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../src/App.css';
import '../egyjatek.scss';
import { NavbarLogged } from "./NavbarLogged";
import { Bejelentkezes } from "./Bejelentkezes";
import CartFid from "../KosarFelhId";

export default function Kosar() {
  const [isPending, setPending] = useState(false);
    const [kosarVasarlo, setCart] = useState([]);
    const navigate = useNavigate();
    
    if(window.$logged=false){
      navigate("Home")
    }

   

    useEffect(() => {
      
      console.log(kosarVasarlo);
      setPending(true);
        (async () => {
          try{
              const cart = await axios.get(`https://localhost:5001/kosar`)
              setCart(cart.data);
              console.log(cart);
          }catch(error){
            console.log(error);
          }finally{
            setPending(false);
          }
        })();
  }, []);


  if(window.logged){
    return (
      <>
      
        <NavbarLogged/>
        <div className="p-5  m-auto text-center content bg-ivory">
          {isPending ? (
            <div className="spinner-border"></div>
          ) : (
            <div>
              <h2 className='jateknevszin'>Kosarad tartalma:</h2>
              {kosarVasarlo.map((kosarVasarlo) => (
                
                <>
                <table className="table table-striped table-dark">
                  <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Vásárló azonosító</th>
                    <th>Játék azonosító</th>
                    <th>Darabszám</th>
                  </tr>
                  
                  <tr>
                    <td>{kosarVasarlo.id}</td>
                    <td>{kosarVasarlo.vasarloId}</td>
                    <td>{kosarVasarlo.jatekId}</td>
                    <td>{kosarVasarlo.darab}</td>
                  </tr>
                  </tbody>
                 
                </table>
                
                </>
              ))}
            </div>
          )}
        </div>
      </>
      );
  }
  else{
    navigate("/")
  }
  
}
  

