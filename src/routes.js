import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import switchTeste from './switch';

// import { Container } from './styles';

function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={switchTeste}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;