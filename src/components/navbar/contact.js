import React, { useEffect, useState } from "react";
import styled from 'styled-components'

export const Contact = () => {

    const [load, setLoad] = useState(false)


    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])

    const LoaderDiv = styled.div`
        position: absolute;
        top: 50%;
        color: white;
        width: 50px;
        height: 50px;
    `
    const Contact = styled.div`
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        padding: 15px;
        width: 24rem;
        max-width: 95vw;

        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );

    `



    return (
        <div className="row m-auto d-flex-fle-row justify-content-evenly">
            {load ? (
                <LoaderDiv className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </LoaderDiv>
            )
            :
            (
                <Contact>Acs Arpad</Contact>
            )}


        </div>
    )
}