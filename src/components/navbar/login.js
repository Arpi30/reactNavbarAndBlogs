import React from "react";
import styled from 'styled-components'

export const Login = () => {

    const LoginForm = styled.form`
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        background: white;
        padding: 15px;
        box-shadow: 0 0 25px black;
    `


    return(
        <LoginForm>
            <div>Login</div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input typeof="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input typeof="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" className="btn btn-light">Submit</button>
        </LoginForm>
    )
}