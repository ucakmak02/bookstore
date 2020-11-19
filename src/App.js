
/* yarn add antd */

/* Import Pages */
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
/* Import Layout */
import Header from './components/Layout/Header'


import {BrowserRouter, Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header  name='Book Store' />
      <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/view/:key' component={ViewPage} />  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
