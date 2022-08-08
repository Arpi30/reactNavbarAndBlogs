import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav>
                <ul className="d-flex flex-row list-unstyled ">
                    <li className="mx-3">
                        <Link className="text-decoration-none text-secondary" to='/' >Home</Link>
                    </li>
                    <li className="mx-3">
                        <Link className="text-decoration-none text-secondary" to='contact' >Contanct</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}