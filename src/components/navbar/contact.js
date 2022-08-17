import React, { useEffect, useState } from "react";
import { ContactCard, LoaderDiv } from "../styledComponent";
import '../contact.css'

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
                    <h3>Acs Arpad</h3>
                    <div>
                        <a href="https://www.facebook.com/arpad.acs.7/" className="fs-2 ">
                            <FontAwesomeIcon className="icon"  icon={faFacebook} />
                        </a>
                        <a href="https://github.com/Arpi30" className="mx-3 fs-2 text-dark">
                            <FontAwesomeIcon className="icon" icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/arpad.acs.7/" className="fs-2 text-dark">
                            <FontAwesomeIcon className="icon" icon={faInstagram} />
                        </a>

                    </div>

                </ContactCard>
            )}


        </div>
    )
}