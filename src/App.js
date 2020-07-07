import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './global.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

 function App(){
  return  (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )

}

export default App;