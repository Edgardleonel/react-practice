/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';

import './styles.scss';


function table() {
const [cols] = useState([
    { col1: 'Bourdeaux', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
    { col1: 'Champagne', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
    { col1: 'Bourgogne', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
    { col1: 'França', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
    { col1: 'França', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
    { col1: 'França', col2: 'Itália', col3: 'Espanha', col4: 'Chile', col5: 'Argentina', col6: 'Portugal'},
])
const [rows] = useState([
    { row1: 'França', row2: 'Itália', row3: 'Espanha', row4: 'Chile', row5: 'Argentina', row6: 'Portugal'},
])

    function renderTableData() {
        return cols.map((col, index) => {
            const { col1, col2, col3, col4, col5, col6 } = col;
            return (
                <tr key={index}>
                    <td>{col1}</td>
                    <td>{col2}</td>
                    <td>{col3}</td>
                    <td>{col4}</td>
                    <td>{col5}</td>
                    <td>{col6}</td>
                </tr>
            )
        })
    }
    function renderTableHeader() {
        return rows.map((row, index) => {
            const { row1, row2, row3, row4, row5, row6 } = row;
            return (
                <tr key={index}>
                    <th>{row1}</th>
                    <th>{row2}</th>
                    <th>{row3}</th>
                    <th>{row4}</th>
                    <th>{row5}</th>
                    <th>{row6}</th>
                </tr>
            )
        })
    }


  
  return (
    <>
    <table>
        <tbody>
            {renderTableHeader()}
            {renderTableData()}
        </tbody>
    </table>
    </>
  );
}

export default table;