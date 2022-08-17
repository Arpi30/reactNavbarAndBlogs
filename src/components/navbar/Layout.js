import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Ul, BGIMG, Navbar, Li } from "../styledComponent";

export const Layout = () => {

    





    return (
        <div>
            <Navbar className="position-absolute w-100">
                <Ul>
                    <Li className="mx-3">
                        <Link  className="text-decoration-none text-dark fw-bold fs-4 me-1" to='/' >Home</Link>
                    </Li>
                    <Li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-4 me-1" to='contact' >Contanct</Link>
                    </Li>
                    <Li className="mx-3">
                        <Link className="text-decoration-none text-dark fw-bold fs-4 me-1" to='login' >Login</Link>
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