import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components'

export const Layout = () => {

    const Ul = styled.ul`
        display:flex;
        flex-direction: row;
        list-style: none;
        background: #cdcdcd;
        justify-content: start;
        padding: 0;
        margin: 0;
    `
    const BGIMG = styled.img`
        width: 100%;
        height: 100vh;



        
    `

    return (
        <div>
            <nav className="position-absolute w-100">
                <Ul>
                    <li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-3" to='/' >Home</Link>
                    </li>
                    <li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-3" to='contact' >Contanct</Link>
                    </li>
                    <li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-3" to='login' >Login</Link>
                    </li>
                </Ul>
            </nav>
            <div>
                <BGIMG src="https://source.unsplash.com/random/1920x1080?sig=1"></BGIMG>
            </div>
            <Outlet />
        </div>
    )
}