import React, { useEffect, useState } from "react";
import "./dataTable.css";

function TableRow({ data, type }) {

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
