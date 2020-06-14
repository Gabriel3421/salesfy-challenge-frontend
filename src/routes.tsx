import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Translate from './pages/Translate'
import GlobalStyles from './style/GlobalStyles'
import { Provider } from 'react-redux';
import store from './store'
 

const Routes = () => {
 return (
      <Provider store={store}>
        <BrowserRouter>
          <Route  component={Translate} path="/" exact />
          <GlobalStyles/>
          <ToastContainer/>
        </BrowserRouter>
      </Provider>
 );
}

export default Routes;