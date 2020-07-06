import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FaExpand, FaHeart, FaTimes, FaFacebookF, FaWhatsapp, FaPinterestP, FaPlus  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './styles.scss';

function Produto() {
    const [full, setfull] = useState('fullscreen-disable');
    const [cardBottom, setCardBottom] = useState(false);

    const product = {
        "image": "https://media.edega.com.br/blandine-blanc-2016-64107.png",
        "descricao": "BLANDINE LE BLANC 2016",
        "preco": 90
    }

    function handleScroll() {
        setTimeout(() => {
            const ref = document.getElementsByClassName('alt-bg')[0].style.height;
            if(window.scrollY > ref + 50) {
                setCardBottom(true)
            } else {
                setCardBottom(false)
            }
        }, 500)
    }

    useEffect(() => {
        window.onscroll = () => handleScroll();
    }, [])



  return (
    <>
      <div id="pg_product" className="padding_Header">
        <div className={`${full}`}>
            <div style={{ backgroundImage: "url(" + product.image +")" }} className="product-thumb"></div>
                <div className="close-button" onClick={() => setfull('fullscreen-disable')}>
                    <FaTimes size={16}  color={'#18203e'} />
                </div>
            </div>
        </div>
        <Container >
                <Row>
                    <Col sm={6}>
                        <div className="product-thumb">
                            <div className="buttons-icon">
                                <div className="zoom" role="button" onClick={() => setfull('fullscreen-active')}><FaExpand size={16} /></div>
                                <div className="like" role="button"><FaHeart size={16} /></div>
                            </div>
                            <figure>
                                <img src={product.image} alt="" />
                            </figure>
                        </div> 
                    </Col>
                    <Col sm={6}>
                        <div className="product-contents template_product ">
                            <h2 className="text-left template_product ">{product.descricao}</h2>	
                            <div className="product-info">
                                <div  className="product-price default text-left">
                                    <span className="label">Preço catálogo</span>
                                    <span className="spacer"></span>
                                    <span className="currency">R$</span>
                                    <span className="value">{product.preco}</span>
                                </div>
                                <div className="product-price associate text-left">
                                    <span className="label">Sócio Edega</span>
                                    <span className="spacer"></span>
                                    <span className="value exclusive">Exclusivo<br />Associado</span>
                                </div>
                            </div>
                            <div className="buy-box">
                                <div className="amount">
                                    <span className="decrement">-</span>
                                    <span className="quantity">1</span>
                                    <span className="increment">+</span>
                                </div>
                                <button className="btn secondary"><FiShoppingBag size={16} /> <span>Comprar</span></button>
                            </div>
                            <div className="socio">
                                <button className="btn primary">ASSOCIE-SE JÁ E ECONOMIZE</button>
                            </div>
                            <div className="social">
                                <h4>Compartilhe:</h4>
                                <FaWhatsapp size={26} color="#18203e" />
                                <FaFacebookF size={26} color="#18203e" />
                                <FaPinterestP size={26} color="#18203e" />
                                <MdEmail size={26} color="#18203e" />
                                <FaPlus size={26} color="#18203e" />
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
        <div className="alt-bg">
            <Container>
                <Row>
                    <Col sm={12}>
                    <div className="content-text">
						<h4>Descrição</h4>
						<div className="product_description">
                                Os irmãos Verhaeghe desejavam há muito tempo, produzir um vinho branco, 
                            que fosse ideal para as longas noites quentes de verão do sudoeste da França. Assim, eles criaram 
                            o Blandine Le Blanc, um branco de bela cor ouro com reflexos verdes. Muito aromático, esse vinho lembra 
                            as flores do campo e frutas brancas, com leves toques de especiarias. Na boca, ele surprende pela presença 
                            e densidade, com um belo final de frutas cítricas.
                        </div>
						<br />
						<h4>Harmonização</h4>
						<div className="details">Acompanha frutos de mar, peixes grelhados e queijo de cabra.</div>
						<br />
						<h4 className="planos">Planos</h4>
						<div className="tags" >
							<span className="tag">Blason</span>
							<span className="tag">Château</span>
							<span className="tag">Impérial</span>
						</div>
						<br />
						<br />

						<Row>
							<Col sm={4}>
								<Row>
									<Col xs={2} className="text-right">
                                        <img src="https://www.edega.com.br/assets/images/icon-product-1.svg" alt="" />
                                    </Col>
									<Col xs={10}>
										<p><b>Temperatura de Serviço</b></p>
										<div className="content">entre 7°C e 10°C</div>
									</Col>
								</Row>
							</Col>
							<Col sm={4}>
								<Row>
									<Col xs={2} className="text-right">
                                        <img src="https://www.edega.com.br/assets/images/icon-product-2.svg" alt="" />
                                    </Col>
									<Col xs={10}>
										<p><b>Tempo de Decantação</b></p>
										<div className="content">não precisa decantar</div>
									</Col>
								</Row>
							</Col>
							<Col sm={4}>
								<Row>
									<Col xs={2} className="text-right">
                                        <img src="https://www.edega.com.br/assets/images/icon-product-3.svg" alt="" />
                                    </Col>
									<Col xs={10}>
										<p><b>Tempo de Guarda</b></p>
										<div className="content">pronto para beber</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="ficha-bg">
            <Container>
                <Row>
                    <div className="content">
                        <h3 className="primary-color"><b>Ficha Técnica</b></h3>
                        <div className="content-text">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-4.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Vinícola</h4>
                                            <p><Link>Château du Cèdre</Link></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-5.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Região</h4>
                                            <p>IGP Côtes de Gascogne</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-6.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Uvas</h4>
                                            <p>60% Colombard, 40% Ugni Blanc</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-7.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Vinhedo</h4>
                                            <p>localizado na região do Gers no Sudoeste da França, temos dois tipos de solos: argilo-calcário e " argilo-siliceux", trata-se de um solo que contém uma mistura de areia com argila. O clima é semi-continental.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-8.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Vinificação</h4>
                                            <p>fermentação feita em barricas de 500 litros, 50% são novas e 50% são barricas de segundo uso. A temperatura de fermentação está entre 18 e 20º.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-9.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Teor Alcoólico</h4>
                                            <p>11,5% vol.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-10.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Conteúdo</h4>
                                            <p>750 ml</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-11.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Safra</h4>
                                            <p>2016</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.edega.com.br/assets/images/icon-product-12.svg" alt="" /></td>
                                        <td className="content-text">
                                            <h4>Amadurecimento</h4>
                                            <p>o vinho é envelhecido sobre borras finas durante 09 meses, passando por uma ligeira filtração, antes do engarrafamento.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        <div className={`ProductSummary ${cardBottom === true ? 'active' : '' }`}>
            <Container>
                <Row>
                    <Col sm={6}>
                    <header class="PageHeader">
                        <h4>{product.descricao}</h4>
                    </header>
                    </Col>
                    <Col sm={6}>
                        <div className="buy-box">
                            <div  className="product-price">
                                <span className="currency">R$</span>
                                <span className="value">{product.preco}</span>
                            </div>
                            <div className="amount">
                                <span className="decrement">-</span>
                                <span className="quantity">1</span>
                                <span className="increment">+</span>
                            </div>
                            <button className="btn secondary"><FiShoppingBag size={16} /> <span>Comprar</span></button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
        
    </>
  );
}

export default Produto;