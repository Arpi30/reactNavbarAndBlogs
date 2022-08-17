import React, { useEffect, useState } from "react";

import { ContactCard, LoaderDiv } from "../styledComponent";

export const Contact = () => {

    const [load, setLoad] = useState(false)


    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])

   



    return (
        <div className="row m-auto d-flex-fle-row justify-content-evenly">
            {load ? (
                <LoaderDiv className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </LoaderDiv>
            )
            :
            (
                <ContactCard>Acs Arpad</ContactCard>
            )}


        </div>
    )
}