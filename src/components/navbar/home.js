import React, { useState, useEffect } from "react";
import styled from 'styled-components'


export const Home = () => {

    const [blogs, setBlogs] = useState([])

    const Card = styled.div`
        max-width: 400px;
        height: 200px
    `
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])



    return (
        <div className="row m-auto">
                {blogs.map((blog, index) => {
                    return(
                        <Card className="card m-2 p-0" key={blog.id}>
                            <div className="bg-light w-100">{blog.title}</div>
                            <img src="https://source.unsplash.com/random/200x200?sig=1"></img>
                            <div>{blog.body}</div>
                        </Card>                 
                    )
                })}
        </div>
    )
}