import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import  './styles.scss';

function header() {
  return (
      <>
      <header className="Header-new ">
        <Container>
            <div className="Header__content">
                <div class="content">
                    <div className="Media">
                        <div className="figure">
                            <img src="https://www.edega.com.br/assets/images/logo.png?v3" alt="Logo Edega" />                  
                        </div>
                    </div>
                    <div className="Media_content">
                        <div class="Menu_content">
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
            <Container>
                <div class="Menu_body">
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
            </Container>
        </div>

    </>
  );
}

export default header;