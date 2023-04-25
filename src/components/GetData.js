import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataTables from './DataTables';
import axios from 'axios';
import "./dataTable.css";
const URL = 'https://mbs-backend.onrender.com/';


function GetData() {
    const [data, setData] = useState([]);
    const params = useParams();
    const type = params.id;
    console.log(type);
    useEffect(()=>{
        const fetchData = async()=>{
          await axios.get(`${URL}getall/data?type=${type}`)
          .then((res)=>{
            if(res.status === 201){
              setData(res.data.data);
            }
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        fetchData();
      }, [type]);
    
    const arr = ["Male users have phone greater than 10,000", "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.", "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.", "Show the data of top 10 cities which have the highest number of users and their average income."];
  return(
    <main class="table">
            <h1 style={{color:"#c8d5e3"}}>{arr[type-2]}</h1>
      <DataTables data={data} type={type}/>
    </main>
  )
}

export default GetData
