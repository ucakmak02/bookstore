
/* yarn add antd */

/* Import Pages */
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
import DetailPAge from './pages/DetailPage'
import EditPage from './pages/EditPage'
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
          <Route path='/detail/:id' component={DetailPAge} />  
          <Route path='/edit/:id' component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
