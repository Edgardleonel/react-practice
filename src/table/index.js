/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';

import {TableStyle} from './styles';


const paises = [
    {
      "descricao": "França",
      "lista": [
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
     ]
    },
    {
        "descricao": "Itália",
        "lista": [
            'Itália',
            'Itália',
            'Itália', 
            'Itália',
            'Itália',
         ]
      },
      {
        "descricao": "Itália",
        "lista": [
            'Itália',
            'Itália',
            'Itália', 
            'Itália',
            'Itália',
         ]
      },
]



function table() {


    function renderTableData() {
        return paises.map((col, index) => { 
            return (
                <td>
                <th>{col.descricao}</th>
                {col.lista.map(lista => (
                   <div key={index}>             
                        {lista}
                    </div>
                 ))}
                 </td>
            )
        })
    }



  
  return (
    <>
    <TableStyle>
    <table>
        <tbody>    
            {renderTableData()}
        </tbody>
    </table>
    </TableStyle>
    </>
  );
}

export default table;