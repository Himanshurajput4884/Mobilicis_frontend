import React, { useEffect, useState } from "react";
import "./dataTable.css";
const URL = "http://localhost:8009/";

function TableRow({ data, type }) {
  console.log(type);
  // return (
  //   <>
  //     {type !== 5 ? (
  //       <tbody>
  //         <tr>
  //           <th>{data.Id}</th>
  //           <th>{data.first_name}</th>
  //           <th>{data.last_name}</th>
  //           <th>{data.email}</th>
  //           <th>{data.gender}</th>
  //           <th> $ {data.income}</th>
  //           <th>{data.city}</th>
  //           <th>{data.car}</th>
  //           <th>{data.quote}</th>
  //           <th> $ {data.phone_price}</th>
  //         </tr>
  //       </tbody>
  //     ) : (
  //       <tbody>
  //         <tr>
  //           <th>{data.city}</th>
  //           <th> $ {data.income}</th>
  //         </tr>
  //       </tbody>
  //     )}
  //   </>
  // );

  return (
    <>
      {type !== "5" ? (
        <>
          <tbody>
            <tr>
              <td>{data.Id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td> $ {data.income}</td>
              <td>{data.city}</td>
              <td>{data.car}</td>
              <td>{data.quote}</td>
              <td> $ {data.phone_price}</td>
            </tr>
          </tbody>
        </>
      ) : (
        <>
          <tbody>
            <tr>
              <td>{data.city}</td>
              <td> $ {data.average}</td>
            </tr>
          </tbody>
        </>
      )}
    </>
  );
}

export default TableRow;
