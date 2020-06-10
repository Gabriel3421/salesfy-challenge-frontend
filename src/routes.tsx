import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Translate from './pages/Translate'


const Routes = () => {
 return (
    <BrowserRouter>
      <Route  component={Translate} path="/" exact />
    </BrowserRouter>
 );
}

export default Routes;