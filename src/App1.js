import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch, withRouter, Redirect} from 'react-router-dom';
import Login from './loginReg/login';
 import Register from './loginReg/register';
import { Provider } from 'react-redux';
 import { ConfigureStore } from './redux/configureStore';
import App from './App';
 const store = ConfigureStore();

class App1 extends Component {

render(){


  return (                  
    <Provider store={store}>
      <Router>
     <Switch>
     <Route exact path="/" render={() => (
      <Redirect to="/login"/>)}/>
     <Route  path="/login" component={withRouter(Login)} exact/>
     <Route  path="/register" component={withRouter(Register)}/> 
     <Route  path="/main" component={withRouter(App)}/> 


    </Switch>
    </Router>
    </Provider>
  
  );
}
  
}

export default App1;
