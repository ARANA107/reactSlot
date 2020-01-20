import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch, withRouter} from 'react-router-dom';
import Login from './loginReg/login';
 import Register from './loginReg/register';
import { Provider } from 'react-redux';
 import { ConfigureStore } from './redux/configureStore';
import App from './App';
import User from './User/User'
 const store = ConfigureStore();

class App1 extends Component {

render(){


  return (                  
    <Provider store={store}>
      <Router>
     <Switch>
     <Route exact path="/" component={withRouter(Login)}/>

     <Route exact path="/user" component={withRouter(User)}></Route>
     <Route exact path="/register" component={withRouter(Register)}/> 
     <Route exact path="/main" component={withRouter(App)}/> 


    </Switch>
    </Router>
    </Provider>
  
  );
}
  
}

export default App1;
