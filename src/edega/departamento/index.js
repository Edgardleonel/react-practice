import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { FaSearch  } from 'react-icons/fa';


import './styles.scss';

function Departamento() {
    const [color, setColor] = useState(false)

  return (
      <>
        <div className="pg_Departament">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="text-left primary-color">Todos os produtos</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="product_Filter">
                            <h3 class="subtitle" >filtro</h3> 
                            <div className="input_Search">             
                                <TextField label="Busca" onFocus={() => setColor(true)} onBlur={() => setColor(false)} />
                                <FaSearch  style={{color: color ? '#d3a059' : '#ccc'}} size={22} />
                            </div>     
                        </div>
                    </Col>
                    <Col lg={9}>

                    </Col>

                </Row>

            </Container>
        </div>
      </>
  );
}

export default Departamento;