
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
      <Header/>
      <Switch>
          <Route path='/view' component={ViewPage} />
          <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
