import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({books,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-purple-600 '>
            <h2 className='p-2 text-center text-2xl text-white'>Reading Time: {readingTime}</h2>
            <h2 className='p-2 text-center text-2xl text-white'>Bookmark Blog: {books.length}</h2>
            {
                books.map(book => <Bookmark
                book={book} key={book.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;