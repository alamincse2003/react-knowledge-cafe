import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog,handleAddToBook,handleReadingTime }) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8'  src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{ posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddToBook(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark/></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href='#'>#{ has}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(id,reading_time)}>Mark as Read</button>
        </div>
    );
};

export default Blog;