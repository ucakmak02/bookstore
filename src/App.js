
/* yarn add antd */

/* Import Pages */
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
import DetailPAge from './pages/DetailPage'
import EditPage from './pages/EditPage'
import AddProductPage from './pages/AddProductPage'
/* Import Layout */
import Header from './components/Layout/Header'


import {BrowserRouter, Route,Switch} from 'react-router-dom';
import React from "react";
import {AuthContext} from "./context";

function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
      <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
    <BrowserRouter>
      <Header  name='Book Store' />
      <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/addNewProduct' component={AddProductPage} />
          <Route path='/view/:key' component={ViewPage} />
          <Route path='/detail/:id' component={DetailPAge} />
          <Route path='/edit/:id' component={EditPage} />
      </Switch>
    </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
