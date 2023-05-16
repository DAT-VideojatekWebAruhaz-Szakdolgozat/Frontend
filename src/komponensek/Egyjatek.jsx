import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {FaCartArrowDown} from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Kosar from "./Kosar";
import Card from 'react-bootstrap/Card';
import '../../src/App.css';
import { Navbar } from "../navbar";
import '../egyjatek.scss';

export function Egyjatek(props) {

  const [readMore,setReadMore]=useState(true);
    const param = useParams();
    const id = param.id;
    const [jatek, setGame] = useState([{}]);
    const [isPending, setPending] = useState(false);
    const [cart, setCart] = useState(false);
    const egyediId = param.egyediId;
   
    console.log(param);
    const navigate = useNavigate();


    const linkName=readMore?'Olvass kevesebbet << ':'Olvass többet >> ';

    useEffect(() => {
        setPending(true);
          (async () => {
            try {
              const games = await axios.get(process.env.REACT_APP_BACKEND_URL+`/api/jatek/${id}/${egyediId}`);
              setGame(games.data);
              console.log(games.data[0].kep);
            } catch (err) {
              console.log(err);
            } finally {
              setPending(false);
            }
          })();
      }, []);

      const extraContent=<div>
      <div className="blog-card__info">
          <h5> Név: {jatek[0].nev}</h5>
          <p className="cta__text-column"> Információ a játékról: {jatek[0].leiras}</p>
          <p>Ára: {jatek[0].ar} ft</p>
        </div>
  </div>
      
    return (
      <>
      <Navbar/>
      <div className="container mt-5">
  <div className="row">
    <div className="col-12">
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div className="card__background--main" src={{backgroundImage: (`data:image/jpg;base64,${jatek[0].kep}`)}}>
            <img
                  className="img-fluid rounded"
                  src={`data:image/jpg;base64,${jatek[0].kep}`}
                />
              <div className="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            <span className="date__day">{jatek[0].megjelenes}</span>
          </span>
        </div>
        
        <div className="read-more-link btn btn--with-icon" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2><i className="btn-icon fa fa-long-arrow-right"></i>
         </div>
      {readMore && extraContent}
      </article>
    </div>
  </div>
</div>

<section className="detail-page">
  <div className="container mt-5">
    
  </div>
</section>

      </>
       
    )}