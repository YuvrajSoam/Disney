import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </Router>

      </div>
    </Provider>
  );
}

export default App;


