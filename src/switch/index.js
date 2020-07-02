import React from 'react';

import Tabela from '../table';

function switchTeste() {

function validarTable() {
    const table = 'Vinho';
    switch (table) {
    case 'Vinho':
      console.log('vinho');
      break
    case 'Países': 
    return (<Tabela />)
    case 'Produtores': 
        return (<Tabela />)
      default:
    }
}
  return (
    <>
    {validarTable()}
    </>
  );
}

export default switchTeste;