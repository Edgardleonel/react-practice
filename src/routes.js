import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import departamento from './edega/departamento';



function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={departamento}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;