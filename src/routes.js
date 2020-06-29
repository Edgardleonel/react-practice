import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './edega/menu';

// import { Container } from './styles';

function Routes() {
  return ( 
      <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Menu}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;