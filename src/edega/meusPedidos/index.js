import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {Container, Row, Col} from 'react-bootstrap'

import './styles.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
      <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 

export default function SimpleTabs() {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <div id="pg_orders" className="padding-header">
        <Container>
        <h3 className="subtitle primary-color">MINHA CONTA</h3>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" 
            TabIndicatorProps={{style: {background:'#d3a059'}}} >
                <Tab label="Pedidos" {...a11yProps(0)} />
                <Tab label="Assinatura" {...a11yProps(1)} />
                <Tab label="Meus Dados" {...a11yProps(2)} />
                <Tab label="Endereços" {...a11yProps(3)} />
                <Tab label="Cartões" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Data</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            

            </TabPanel>
            <TabPanel value={value} index={1}>

                <div>
                    <h2> MINHA ASSINATURA </h2>
                    <br />
                    <p className="text-center">Você ainda não possui nenhuma assinatura</p>
                    <br />
                    <a className="btn btn_associe" href="br/associe-se">ASSOCIE-SE AGORA!</a>
                </div>

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Row>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                </Row>
                <Row>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                </Row>
                <Row>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                    <Col sm={4}>Item</Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Three
            </TabPanel>
        </Container>
    </div>

    </div>
  );
}