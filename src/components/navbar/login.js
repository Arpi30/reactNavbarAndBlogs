import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { LoginForm, LoaderDiv } from "../styledComponent";

export const Login = () => {

    const [loginData, setLoginData] = useState({
        name: '',
        pwd: '',
    })
    const [load, setLoad] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    let navigate = useNavigate();
    const loginStorageProcess = JSON.parse(localStorage.getItem('loginMethodValue'))
    
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])

    function changeHandler(e) {
        e.preventDefault()
        const {name, value} = e.target;
        setLoginData(prev => {
            return {...prev, [name]: value}
        })
        setLoggedIn(true)
    }
    
    function login(e) {
        //e.preventDefault()
        console.log(loginData);
        if(loggedIn == true){
            localStorage.setItem('loginMethodValue', loggedIn)
            navigate('/home')
        }else {
            return
        }
    }
    function logoutHandler() {
        setLoggedIn(false)
        localStorage.setItem('loginMethodValue', loggedIn)
    }

    return(
        <div className="row m-auto d-flex-fle-row justify-content-evenly">
            {load ? (
                <LoaderDiv className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </LoaderDiv>
            )
            :
            (
                <LoginForm onSubmit={(e) => login(e) || logoutHandler(e)} className="animate__animated animate__bounce animate__faster">
                    {loginStorageProcess ?
                    (
                        <button type="submit"  className="btn btn-danger rounded-0">Logout</button>
                    )
                    :
                    (
                        <div>
                            <h3>Login</h3>
                            <div className="mb-3">
                                <input minLength={3} name="name" value={loginData.name} onChange={(e) => changeHandler(e)} placeholder="email address" className="form-control rounded-0"></input>
                            </div>
                            <div className="mb-3">
                                <input minLength={3} name="pwd" value={loginData.pwd} onChange={changeHandler} placeholder="password" className="form-control rounded-0"></input>
                            </div>
                            <button type="submit" className="btn btn-light rounded-0">Login</button>
                        </div>
                    )}
                </LoginForm>
            )}

        </div>
    )
}