import React, {Component} from 'react';
import { Button,Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './regLog.css';


class Login extends Component{

    handleChange(event){
    console.log(event);
    }
    render(){
        return(
                <div className="inputContainer">
                <h2>Login Account</h2>
                    <Form className="loginForm" onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="loginUsername" className="text-center text-md-right" sm={2}>Username</Label>
                            <Col sm={4}>
                                <Input type="text" onChange={this.handleChange} name="loginUsername" placeholder="ash rana" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="loginPassword" className="text-center text-md-right" sm={2}>Password</Label>
                            <Col sm={4}>
                                <Input type="password" onChange={this.handleChange} name="loginPassword" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>LOGIN</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
        )
    }

}

export default Login;