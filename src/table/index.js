/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

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
            'Itália', 
            'Itália',
            'Itália',
         ]
      },
]


function table() {

function renderTableData() {
    return (
        <tr>
            {paises.map((col, index) => (
            <td key={index}>
                <strong>{col.descricao}</strong> 
                {col.lista.map((lista, index) => (<p key={index}>{lista}</p>))} 
            </td>
            ))}
        </tr>
    )
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