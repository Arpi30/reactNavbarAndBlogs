import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components'

export const Layout = () => {

    const Ul = styled.ul`
        display:flex;
        flex-direction: row;
        list-style: none;
        justify-content: start;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        flex-wrap: wrap
    `
    const BGIMG = styled.img`
        width: 100%;
        height: 100vh;
    `
    const Navbar = styled.nav`
        position: absolute;
        max-width: 100%;
        height: 10vh;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    `
    const Li = styled.li`
        margin-left: 5px;
        margin-right: 5px;
        transition: .3s;
        &:hover {
            transform: scale(1.1);
        }
    `





    return (
        <div>
            <Navbar className="position-absolute w-100">
                <Ul>
                    <Li className="mx-3">
                        <Link  className="text-decoration-none text-dark fw-bold fs-4" to='/' >Home</Link>
                    </Li>
                    <Li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-4" to='contact' >Contanct</Link>
                    </Li>
                    <Li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-4" to='login' >Login</Link>
                    </Li>
                </Ul>
            </Navbar>
            <div>
                <BGIMG src="https://source.unsplash.com/random/1920x1080?sig=1"></BGIMG>
            </div>
            <Outlet />
        </div>
    )
}