import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SlideGrow from '../slideGrow';
import Slide from '../slide';


import {HeaderStyles} from './styles';

function header() {
     

  return (
      <>

        <HeaderStyles>
        <header className="Header-new ">
            <Container fluid>
                <div className="Header__content">
                    <div className="content">
                        <div className="Media_content">
                            <div className="Menu_content">
                                <ul>
                                    <li>
                                        <Link className="MainNavigation__item" >Loja Virtual</Link>
                                    </li>
                                    <li>
                                        <Link className="MainNavigation__item" >Clube Edega</Link>
                                    </li>
                                    <li>
                                        <Link className="MainNavigation__item" >Televendas 11 9.9919-0404</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Header_user">        
                        <div>Login</div>
                        <div>Login</div>
                        <div>Login</div>         
                    </div>
                </div>
            </Container>
        </header>


            <div className="Media_body">
                <Container fluid>
                <div className="content_Body">
                <img style={{height: '45px', filter: 'grayscale(1) brightness(2)'}} src="https://www.edega.com.br/assets/images/logo.png?v3" />
                    <div className="Menu_body">
                        <ul>
                            <li>
                                <Link className="MainNavigation" >Vinhos</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Países</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Produtores</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Orgânicos e Biodinâmicos</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Mais Vendidos</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Ofertas</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Pontuados</Link>
                            </li>
                            <li>
                                <Link className="MainNavigation" >Acessórios</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </Container>
            </div>
            </HeaderStyles>


        <SlideGrow />
        <Slide />
        <SlideGrow />
    </>
  );
}

export default header;