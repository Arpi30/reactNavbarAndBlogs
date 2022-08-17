import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, Title, Body, Img, LoaderDiv, LandingPageTitle } from "../styledComponent";



export const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [load, setLoad] = useState(false)

    


    useEffect(() => {
        setLoad(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .finally(setTimeout(() => {
            setLoad(false)
        }, 1000))
    },[])

    const srollTo = () => window.scrollTo(0, 950)




    return (
        <div className="row mt-2 m-auto d-flex-fle-row justify-content-evenly">

            {load ? '' : (
                <LandingPageTitle onClick={srollTo}>CLICK ME</LandingPageTitle>
            )}
            
            {load ? (
                <LoaderDiv className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </LoaderDiv>
            )
            :
            (
                blogs.map((blog) => {
                    return(
                        <Card className="card p-0" key={blog.id}>
                            <Title>{blog.title}</Title>
                            <Img src="https://source.unsplash.com/random/800x400?sig=1"></Img>
                            <Body>{blog.body}</Body>
                            <Link className="text-end mx-2 text-decoration-none text-dark" to='*'>More...</Link>
                        </Card>                 
                    )
                })

            )
        }



        </div>
    )
}