import React, {useState, useContext} from "react";
import { Container,Row,Col,Form,FormGroup,Button } from "reactstrap";
import{Link,useNavigate} from "react-router-dom";
import "../styles/register.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user-register.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";


const Register = () =>{
    const [credentials,setCredentials]=useState({
        userName:undefined,
        email:undefined,
        password:undefined
    });

    const {dispatch}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleChange =  e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
    };

    const handleClick= async e=>{
      e.preventDefault();
 
      try{
       const res= await fetch(`${BASE_URL}/auth/register`,{
        method:"post",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(credentials),
       })

       const result =await res.json();

       if(!res.ok) alert(result.message);

       dispatch({type:"REGISTER_SUCCESS"});
       navigate("/login");
       
      }
      catch(err){
      alert(err.message);
      }
    };

    return (
        <section>
            <Container>
            <Row>
                <Col lg="8" className="m-auto">
                <div className="register__container d-flex justify-content-between">
                    <div className="register__img">
                        <img src={registerImg} alt=""/>
                    </div>
                    <div className="register__form">
                        <div className="user">
                            <img src={userIcon} alt=""/>
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick} className="ff">
                        <FormGroup>
                                <input type="text" placeholder="Username" required id="username"
                                onChange={handleChange}/>
                                
                            </FormGroup>
                            <FormGroup>
                                <input type="text" placeholder="Email" required id="email"
                                onChange={handleChange}/>
                                
                            </FormGroup>
                            <FormGroup>
                            <input type="password" placeholder="Password" required id="password"
                                onChange={handleChange}/>
                            </FormGroup>
                            <Button className="btn primary_btn auth_btn" type="submit">Register</Button>
                        </Form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>

                </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;