import React from 'react';
import {ThemeStyles} from './styles'
import {ThemeProvider} from 'styled-components'

const theme = {
  "primary": "#eee",
  "secondary": "#000"
}


  const componentes = [
  'Header',
  'About',
  'Promocao',
  'Selecao',
  'Footer',

  ]

  const Header = () => (
    <h1>Header</h1>
  )

  const About = () => (
    <h1>Sobre</h1>
  )

  const Selecao = () => (
    <h1>Seleção</h1>
  )
  const Promocao = () => (
    <h1>Promoção</h1>
  )
  const Footer = () => (
    <h1>Footer</h1>
  )


function Templates() {

  function validarRoute(response) {
    switch (response) {
    case 'Header':
    return (<Header />)
    case 'About': 
    return (<About />)
    case 'Selecao': 
    return (<Selecao />)
    case 'Promocao': 
    return (<Promocao />)
    case 'Footer': 
    return (<Footer />)
      default:
    }
  }

  return (
  <div>
    {componentes.map((response, i)=> (
       <ThemeProvider theme={{...theme}}>
        <ThemeStyles key={i}>{validarRoute(response)}</ThemeStyles>
      </ThemeProvider>
    ))}
  </div>
  );
}

export default Templates;