import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import { NavbarLogged } from './NavbarLogged';

export default function Kijelentkezes() {
  const navigate = useNavigate();
  return (
    <>
    <NavbarLogged/>
    <form
    onSubmit={(d)=>{
      d.preventDefault();
      navigate("/");
      window.location.reload(true);
    }}
    >


    <div>
      <button type='submit' className='btn btn-secondary'>Kijelentkezés</button>
    </div>
    </form>
    </>
    
  )
}
