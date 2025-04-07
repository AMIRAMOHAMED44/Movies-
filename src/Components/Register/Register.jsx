import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styleEle from "./Register.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({
        email: "",
        name: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({
        emailError: "",
        nameError: "",
        userNameError: "",
        passwordError: "",
        confirmPasswordError: "",
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

        if (name === "name") {
            setUser({ ...user, name:value });
            setError({
                ...error,
                nameError: value.length === 0 ? "Name is required" : ""
            });
        }

        if (name === "userName") {
            setUser({ ...user, userName:value });
            setError({
                ...error,
                userNameError: value.length === 0 ? "Username is required" :
                    value.includes(" ") ? "Username should not contain spaces" : ""
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

        if (name === "confirmPassword") {
            setUser({ ...user, confirmPassword:value });
            setError({
                ...error,
                confirmPasswordError: value.length === 0 ? "Confirm password is required" :
                    value !== user.password ? "Passwords do not match" : ""
            });
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!user.name || !user.email || !user.userName || !user.password || !user.confirmPassword) {
            setError({
                emailError: user.email ? "" : "Email is required",
                nameError: user.name ? "" : "Name is required",
                userNameError: user.userName ? "" : "Username is required",
                passwordError: user.password ? "" : "Password is required",
                confirmPasswordError: user.confirmPassword ? "" : "Confirm password is required",
            });}

        if (!error.emailError && !error.passwordError && !error.nameError && !error.userNameError && !error.confirmPasswordError) {
            console.log("User Registered Successfully:", user);
            setUser({
                email: "",
                name: "",
                userName: "",
                password: "",
                confirmPassword: "",
            });
            
        }
        
    ;}

    return (
        <>
            <h1 className={styleEle.headReg}>Register</h1>
            <Form onSubmit={(ev)=>{handleSubmit(ev)}} className={styleEle.formReg}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={(ev) => {handleValidation(ev)}}  value={user.name}/>
                    <span className="text-danger">{error.nameError}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(ev) => {handleValidation(ev)}} value={user.email}/>
                    <span className="text-danger">{error.emailError}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" name="userName" onChange={(ev) => {handleValidation(ev)}} value={user.userName}/>
                    <span className="text-danger">{error.userNameError}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(ev) => {handleValidation(ev)}} value={user.password}/>
                    <span className="text-danger">{error.passwordError}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(ev) => {handleValidation(ev)}} value={user.confirmPassword} />
                    <span className="text-danger">{error.confirmPasswordError}</span>
                </Form.Group>
                <Button variant="danger" type="submit">Register</Button>
                <br/>
                <Link to="/login" style={{color:"black"}}>Login</Link> <span style={{color:"red"}}>have account!</span>
            </Form>
        </>
    );
}

export default Register;









