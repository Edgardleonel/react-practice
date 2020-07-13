import React, {useEffect, useState} from 'react';
import Routes from './routes';
import Routes2 from './routes2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './global.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import api from './services/api';
import {ThemeProvider} from 'styled-components';


 function App(){
   const [theme, setTheme] = useState([]);
   const [template, setTemplate] = useState('');
  
useEffect(() => {
  async function load() {
  const response = await api.get('/theme');
  const result = response.data;
  setTheme(result);
  } 
  load();
}, [])


useEffect(() => {
  async function load() {
  const response = await api.get('/template');
  const result = response.data;
  const active = result.filter(r => r.isActive === true).map(item => item.nome);
  console.log('active', ...active)
  setTemplate(...active);
  } 
  load();
}, [])


function validarRoute() {
  const route = template;
  switch (route) {
  case 'Piqueri':
    return (<Routes />)
  case 'Edega': 
  return (<Routes2 />)
    default:
  }
}

  return  (
    <> 
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={{...theme}}>
            {validarRoute()}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>

    </>
  )

}

export default App;