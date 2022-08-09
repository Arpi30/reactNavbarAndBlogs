import React, { useState, useEffect } from "react";
import styled from 'styled-components'



export const Home = () => {

    const [blogs, setBlogs] = useState([])

    const Card = styled.div`
        max-width: 400px;
        height: 200px;
        border-radius: 0;
    `

    const Body = styled.div`
        overflow: auto;
        text-align: left;
    `
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])



    return (
        <div className="row mt-2 m-auto d-flex-fle-row justify-content-evenly">
                {blogs.map((blog, index) => {
                    return(
                        <Card className="card p-0" key={blog.id}>
                            <div className="bg-light w-100 text-uppercase fw-bold">{blog.title}</div>
                            <Body>{blog.body}</Body>
                        </Card>                 
                    )
                })}
        </div>
    )
}