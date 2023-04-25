import React, { useState, useEffect } from "react";
import "./dataTable.css";
import TableRow from "./TableRow";

function DataTables({ data, type }) {
  console.log(type);
  // return (
  //   <div>
  //     {data.length ? (
  //       <>
  //         {type !== 5 ? (
  //         <table>
  //           <thead>
  //             <tr>
  //               <th>Id</th>
  //               <th>First Name</th>
  //               <th>Last Name</th>
  //               <th>Email</th>
  //               <th>Gender</th>
  //               <th>Income</th>
  //               <th>City</th>
  //               <th>Car</th>
  //               <th>Quote</th>
  //               <th>Phone Price</th>
  //             </tr>
  //           </thead>
            // {data.map((v) => {
            //   return <TableRow data={v} type={type} />;
            // })}
  //         </table>
  //       ) : (
  //         <table>
  //           <thead>
  //             <tr>
  //               <th>City</th>
  //               <th>Average Income</th>
  //             </tr>
  //           </thead>
  //           {data.map((v) => {
  //             return <TableRow data={v} type={type} />;
  //           })}
  //         </table>
  //       )
  //       }
  //       </>
  //     ) : (
  //       <div>
  //         <h1>There is no Data.</h1>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <>
      {data.length ? 
      (
        <>
          {type !== "5" ? 
            (
              <>
                <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Gender </th>
                        <th> Income </th>
                        <th> City </th>
                        <th> Car </th>
                        <th> Quote </th>
                        <th> Phone Price </th>
                    </tr>
                </thead>
                {data.map((v) => {
                    return <TableRow data={v} type={type} />;
                  })}
              </table>
            </section>
              </>
            )
            :
            (
              <>
              <section class="table__body">
          <table>
              <thead>
                  <tr>
                        <th> City </th>
                        <th> Average Income </th>
                  </tr>
              </thead>
              {data.map((v) => {
                  return <TableRow data={v} type={type} />;
                })}
            </table>
          </section>
              </>
            )
          }
        </>
      )
      :
      (
        <>
            <section class="table__header">
              <h1>There is no Data.</h1>
            </section>
        </>
      )
    }      
    </>    
  )
}

export default DataTables;
