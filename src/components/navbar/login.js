import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { LoginForm, LoaderDiv } from "../styledComponent";

export const Login = () => {

    const [loginData, setLoginData] = useState({
        name: '',
        pwd: ''
    })
    const [load, setLoad] = useState(false)
    let navigate = useNavigate();

    
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
    }

    function login(e) {
        e.preventDefault()
        navigate('/')

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
                <LoginForm onSubmit={(e) => login(e)} className="animate__animated animate__bounce animate__faster">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <input name="name" value={loginData.name} onChange={(e) => changeHandler(e)} placeholder="email address" className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <input name="pwd" value={loginData.pwd} onChange={changeHandler} placeholder="password" className="form-control rounded-0"></input>
                    </div>
                    <button type="submit" className="btn btn-light rounded-0">Login</button>
                </LoginForm>
            )}

        </div>
    )
}