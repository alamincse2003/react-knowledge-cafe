import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBook,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
   
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                blog={blog} key={blog.id} handleAddToBook={handleAddToBook} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;