import React,{Component} from 'react';
import { Button} from 'reactstrap';
import './user.css';


class User extends Component{
  constructor(props){
    super(props);
    
     
  }


  componentDidMount(){
    // this.props.setDisplayOff();
}

logout(event){
    event.preventDefault();
    const { history } = this.props;
    history.push('/')
}
  
 render(){
  return (

    <div className="searchContainer">

   <Button onClick={this.logout.bind(this)}>LOGOUT!</Button>

    </div>

  );
 }
}

export default User;
