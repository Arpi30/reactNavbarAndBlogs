import React, { useEffect, useState } from "react";
import styled from 'styled-components'

export const Login = () => {

    const [load, setLoad] = useState(false)

    const LoginForm = styled.form`
        position: fixed;
        top: 30%;
        left: 40%;

        color: black;
        padding: 15px;
        width: 24rem;
        max-width: 95vw;
    
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        animation: myAnim 1s ease 0s 1 normal forwards;

        @keyframes myAnim {
            0% {
                opacity: 0;
                transform: translateX(-250px);
            }
        
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `
    const LoaderDiv = styled.div`
        position: absolute;
        top: 50%;
        color: white;
        width: 50px;
        height: 50px;
    `

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])


    return(
        <div className="row m-auto d-flex-fle-row justify-content-evenly">
            {load ? (
                <LoaderDiv className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </LoaderDiv>
            )
            :
            (
                <LoginForm className="animate__animated animate__bounce animate__faster">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <input placeholder="email address" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <input placeholder="password" className="form-control rounded-0" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-light rounded-0">Login</button>
                </LoginForm>
            )}

        </div>
    )
}