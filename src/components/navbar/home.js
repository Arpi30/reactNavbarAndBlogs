import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";



export const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [load, setLoad] = useState(false)

    const Card = styled.div`
        max-width: 400px;
        height: 200px;
        border-radius: 0;
        margin: 5px 0;
    `
    const Title = styled.div`
        width: 100%;
        background: #e9ecef;
        text-transform: uppercase;
        font-weight: 700;
        height: 100px;
        text-align: left;
        display:flex;
        align-items:center;
        padding-left: 10px
    `

    const Body = styled.div`
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        padding: 3px;
    `
    const Img = styled.img`
        width: 100%;
        height: 100px;
    `
    const LoaderDiv = styled.div`
        position: absolute;
        top: 50%;
        color: white;
        width: 50px;
        height: 50px;
    `
    const LandingPageTitle = styled.div`
        position: absolute;
        top: 35%;
        font-size: 3rem;
        color: white;
        cursor: pointer;
        animation: myAnim 1s ease 0s 1 normal forwards;

        @keyframes myAnim {
            0% {
                opacity: 0;
                transform: translateX(-250px);
            }
        
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `


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
                <LandingPageTitle onClick={srollTo}>Tovabb</LandingPageTitle>
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