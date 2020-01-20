import React,{Component} from 'react';
import { Button} from 'reactstrap';
import './user.css';
import {Link} from 'react-router-dom';


class User extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.setDisplayOff(false);
}
 render(){
  return (

    <div className="searchContainer">
        <Button>
<Link to={`/`}>Log Out</Link>
</Button>
    </div>

  );
 }
}

export default User;
