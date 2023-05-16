import axios from "axios";
import { useState } from "react";

    export default function CartFid () {
      const [kosarFid, setKosarFid] = useState([]);
      const FelhasznaloId = axios.get(process.env.REACT_APP_BACKEND_URL+"/kosar")
      setKosarFid(FelhasznaloId.data);
      console.log(FelhasznaloId);
      window.setUserid = kosarFid.vasarloId;
    }