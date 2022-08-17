import React, { useEffect, useState } from "react";
import { ContactCard, LoaderDiv } from "../styledComponent";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'




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
                <ContactCard>
                    <p>Acs Arpad</p>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faGithub} className='mx-2'/>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>

                </ContactCard>
            )}


        </div>
    )
}