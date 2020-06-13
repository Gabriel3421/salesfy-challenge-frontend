import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Translate from './pages/Translate'
import GlobalStyles from './style/GlobalStyles'


const Routes = () => {
 return (
      <BrowserRouter>
        <Route  component={Translate} path="/" exact />
        <GlobalStyles/>
      </BrowserRouter>
 );
}

export default Routes;