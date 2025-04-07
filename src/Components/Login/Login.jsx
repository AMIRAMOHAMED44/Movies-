import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styleEleLogin from "./Login.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
    });

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleValidation = (ev) => {
        const { name, value } = ev.target;

        setUser({ ...user, [name]: value });

        if (name === "email") {
            setUser({ ...user, email:value });
            setError({
                ...error,
                emailError: value.length === 0 ? "Email is required" :
                    !emailPattern.test(value) ? "Invalid email format" : ""
            });
        }


        if (name === "password") {
            setUser({ ...user, password:value });
            setError({
                ...error,
                passwordError: value.length === 0 ? "Password is required" :
                    !passwordPattern.test(value) ? "Password must be at least 8 characters long, contain one uppercase, one lowercase, one digit, and one special character" : ""
            });
        }

    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!user.email|| !user.password) {
            setError({
                emailError: user.email ? "" : "Email is required",
                passwordError: user.password ? "" : "Password is required",
            });}

        if (!error.emailError && !error.passwordError) {
            console.log("User Registered Successfully:", user);
            setUser({
                email: "",
                password: "",
            });
            
        }
        
    ;}

    return (
        <>
            <h1 className={styleEleLogin.headLogin}>Login</h1>
            <Form onSubmit={(ev)=>{handleSubmit(ev)}} className={styleEleLogin.formlogin}>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(ev) => {handleValidation(ev)}} value={user.email}/>
                    <span className="text-danger">{error.emailError}</span>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(ev) => {handleValidation(ev)}} value={user.password}/>
                    <span className="text-danger">{error.passwordError}</span>
                </Form.Group>
                <Button variant="danger" type="submit">Login</Button>
                <br/>
                <Link to="/register" style={{color:"black"}}>Register</Link> <span style={{color:"red"}}>don not have account!</span>
            </Form>
        </>
    );
}

export default Login;









