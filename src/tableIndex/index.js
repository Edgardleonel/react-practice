/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {TableStyle} from './../table/styles';


const paises = [
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
        'Bourdeaux',
        'Champagne',
        'Bourgogne', 
        'França',
        'França',
]



function table() {


    function renderTableData() {
    const col1 = paises.filter((col, i) => i <= 6);
    const col2 = paises.filter((col, i) => i >= 7 && i <= 12);
    const col3 = paises.filter((col, i) => i >= 13 && i <= 18);
    const col4 = paises.filter((col, i) => i >= 19 && i <= 24);
    const col5 = paises.filter((col, i) => i >= 25 && i <= 30);
        return (
            <>
                <td>
                    {col1.map((col, index) => ( 
                        <div key={index}>             
                            {col}
                        </div>
                    ))}
                </td>
                <td>
                    {col2.map((col, index) => ( 
                        <div key={index}>             
                            {col}
                        </div>
                    ))}
                </td>              
                <td>
                    {col3.map((col, index) => ( 
                        <div key={index}>             
                            {col}
                        </div>
                    ))}
                </td>
                <td>
                    {col4.map((col, index) => ( 
                        <div key={index}>             
                            {col}
                        </div>
                    ))}
                </td>                     
                <td>
                    {col5.map((col, index) => ( 
                        <div key={index}>             
                            {col}
                        </div>
                    ))}
                </td>
            </>
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