import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from 'react-router-dom';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Jateklista from './komponensek/Jateklista';
import {Bejelentkezes} from './komponensek/Bejelentkezes';
import Informaciok from './komponensek/Informaciok';
import images from './komponensek/DAT.webshop.jpg';
import './styles.css';
import Kezdolap from './komponensek/Kezdolap';
import { Egyjatek } from './komponensek/Egyjatek';
import { useNavigate } from 'react-router-dom';
import Kosar from './komponensek/Kosar';
import {FaGamepad} from "react-icons/fa";
import {ShoppingCart} from 'phosphor-react'
import Akciokaland from './kategoriak/Akciokaland';
import Rpg from './kategoriak/Rpg';
import Racing from './kategoriak/Racing';
import Sport from './kategoriak/Sport';
import Shooter from './kategoriak/Shooter';
import Akcioszerepjatek from './kategoriak/Akcioszerepjatek';
import Regisztracio from './komponensek/Regisztracio';
import Kijelentkezes from './komponensek/Kijelentkezes';

import KezdolapLogged from './komponensek/KezdolapLogged';
import AkciokalandLogged from './kategoriak/AkciokalandLogged';
import AkcioszerepjatekLogged from './kategoriak/AkcioszerepjatekLogged';
import RacingLogged from './kategoriak/RacingLogged'
import RpgLogged from './kategoriak/RpgLogged'
import ShooterLogged from './kategoriak/ShooterLogged'
import SportLogged from './kategoriak/SportLogged'
import JateklistaLogged from './komponensek/jateklistaLogged';
import InformaciokLogged from './komponensek/informaciokLogged';
import { EgyjatekLogged } from './komponensek/EgyjatekLogged';

function App() {


    <Kezdolap/>
    window.logged = false;


  

  return (
    
    <BrowserRouter>
    
    <Routes>
      
        <Route path="/" element={<Kezdolap/>}/>
        <Route path="/osszesjatek" element={<Jateklista/>}/>
        <Route path="/jatek/:id/:egyediId" element={<Egyjatek/>} />
        <Route path="/bejelentkezes/*" element={<Bejelentkezes/>}/>
        <Route path="/rolunk" element={<Informaciok/>}/>
        <Route path="/akciokaland" element={<Akciokaland/>}/>
        <Route path="/rpg" element={<Rpg/>}/>
        <Route path="/racing" element={<Racing/>}/>
        <Route path="/sport" element={<Sport/>}/>
        <Route path="/shooter" element={<Shooter/>}/>
        <Route path="/akcio-szerepjatek" element={<Akcioszerepjatek/>}/>
        <Route path="/regisztracio" element={<Regisztracio/>}/>
        <Route path="/kijelentkezes" element={<Kijelentkezes/>}/>
        <Route path='/kosar' element={<Kosar/>}/>

        <Route path='/loggedHome' element={<KezdolapLogged/>}/>
        <Route path='/akciokalandlogged' element={<AkciokalandLogged/>}/>
        <Route path='/akcio-szerepjateklogged' element={<AkcioszerepjatekLogged/>}/>
        <Route path='/racinglogged' element={<RacingLogged/>}/>
        <Route path='/rpglogged' element={<RpgLogged/>}/>
        <Route path='/shooterlogged' element={<ShooterLogged/>}/>
        <Route path='/sportlogged' element={<SportLogged/>}/>
        <Route path='/jateklistalogged' element={<JateklistaLogged/>}/>
        <Route path='/rolunklogged' element={<InformaciokLogged/>}/>
        <Route path='/jateklogged/:id/:egyediId' element={<EgyjatekLogged/>}/>
    </Routes>

   </BrowserRouter>
  )

}


export default App;
