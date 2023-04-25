import React, { useState, useEffect } from 'react'
import DataTables from './DataTables';
import axios from "axios"
import "./dataTable.css";
const URL = "https://mbs-backend.onrender.com/";

function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      await axios.get(`${URL}getall/data?type=1`)
      .then((res)=>{
        if(res.status === 201){
          setData(res.data.data);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    getData();
  }, []);

  return (
    <main class="table">
            <h1 style={{color:"#c8d5e3"}}> Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”. </h1>
      <DataTables data={data} />
    </main>
  )
}

export default Home
