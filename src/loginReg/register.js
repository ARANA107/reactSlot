import React, {Component} from 'react';
import { Button,Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './regLog.css';

class Register extends Component{

    handleChange(event){
    console.log(event);
    }
    render(){
        return(
                <div className="inputContainer">
                <h2>Login Account</h2>
                    <Form className="registerForm" onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="registerUsername" className="text-center text-md-right" sm={2}>Username</Label>
                            <Col sm={4}>
                                <Input type="text" onChange={this.handleChange} name="registerUsername" placeholder="ash rana" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="firstName" className="text-center text-md-right" sm={2}>First Name</Label>
                            <Col sm={4}>
                                <Input type="text" onChange={this.handleChange} name="firstName" placeholder="ash" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="lastName" className="text-center text-md-right" sm={2}>Last Name</Label>
                            <Col sm={4}>
                                <Input type="text" onChange={this.handleChange} name="lastName" placeholder="rana" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="email" className="text-center text-md-right" sm={2}>Email</Label>
                            <Col sm={4}>
                                <Input type="email" onChange={this.handleChange} name="email" placeholder="ash@gmail.com" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="email2" className="text-center text-md-right" sm={2}>Confirm Email</Label>
                            <Col sm={4}>
                                <Input type="email" onChange={this.handleChange} name="email2" placeholder="ash@gmail.com" required/>
                            </Col>
                        </FormGroup>


                        <FormGroup row>
                            <Label for="registerPassword" className="text-center text-md-right" sm={2}>Password</Label>
                            <Col sm={4}>
                                <Input type="password" onChange={this.handleChange} name="registerPassword" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="registerPassword2" className="text-center text-md-right" sm={2}>Confirm Password</Label>
                            <Col sm={4}>
                                <Input type="password" onChange={this.handleChange} name="registerPassword2" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>SIGN UP</Button>
                            </Col>
                        </FormGroup>
                    </Form>
            </div>
        )
    }

}

export default Register;