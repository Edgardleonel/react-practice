import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';


function DropLarge() {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ openMenu2, setOpenMenu2 ] = useState(false);
    const [ openMenu3, setOpenMenu3 ] = useState(false);
    const [ link ] = useState(
        [
            {
                "descricao": "Orgânicos, Biodinâmicos e Naturais",
                "isActive": false
            },
            {
                "descricao": "Países",
                "isActive": false
            },
            {
                "descricao": "Regiões",
                "isActive": false
            },
            {
                "descricao": "Tipo de Vinhos",
                "isActive": true
            },
            {
                "descricao": "Uvas",
                "isActive": false
            },
            {
                "descricao": "Safra",
                "isActive": false
            },
            {
                "descricao": "Produtores",
                "isActive": false
            },
            {
                "descricao": "Acessórios",
                "isActive": false
            },
            {
                "descricao": "Seleções",
                "isActive": false
            },
            {
                "descricao": "Planos de Clube",
                "isActive": false
            }
        ]
    )


  return (
    <>
    <Row>
        <Col sm={3} onMouseEnter={() => setOpenMenu2() || setOpenMenu3()} >
            <div className="submenu-label">
                Todos os Vinhos
            </div>
                <ul>
                    {link.map(l => (
                    <li key={l.descricao} onMouseEnter={() => setOpenMenu(l.isActive)}>
                        <Link >{l.descricao}</Link>									
                    </li>
                    ))}
                </ul>
        </Col>
        <Col sm={3}  onMouseEnter={() => setOpenMenu2() || setOpenMenu3()}>
            <div className="sub-content" style={{display: `${openMenu ? "block" : "none"}`}}>
                <div className="submenu-label">
                    Tipos de vinhos
                </div>
                <ul>
                    <li onMouseEnter={() => setOpenMenu2()}>
                        <Link>Tinto</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu2()}>
                        <Link>Branco</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu2(true)}>
                        <Link>Rosé</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu2()}>
                        <Link>Champagne</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu2()}>
                        <Link>Doce/Fortificado</Link>
                    </li>
                </ul>
            </div> 
        </Col>
        <Col sm={3}>
            <div className="sub-content" style={{display: `${openMenu2 ? "block" : "none"}`}}>
                <div className="submenu-label">
                    Tipos de vinhos
                </div>
                <ul>
                    <li onMouseEnter={() => setOpenMenu3()}>
                        <Link>Tinto</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu3()}>
                        <Link>Branco</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu3(true)}>
                        <Link>Rosé</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu3()}>
                        <Link>Champagne</Link>
                    </li>
                    <li onMouseEnter={() => setOpenMenu3()}>
                        <Link>Doce/Fortificado</Link>
                    </li>
                </ul>
            </div>
        </Col>
        <Col sm={3}>
            <div className="sub-content" style={{display: `${openMenu3 ? "block" : "none"}`}}>
                <div className="submenu-label">
                    Tipos de vinhos
                </div>
                <ul>
                    <li>
                        <Link>Tinto</Link>
                    </li>
                    <li >
                        <Link>Branco</Link>
                    </li>
                    <li>
                        <Link>Rosé</Link>
                    </li>
                    <li>
                        <Link>Champagne</Link>
                    </li>
                    <li>
                        <Link>Doce/Fortificado</Link>
                    </li>
                </ul>
            </div> 
        </Col>
    </Row>
    </>
  );
}

export default DropLarge;