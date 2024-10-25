import React from 'react';

const Bookmark = ({ book }) => {
    const {title} = book;
    return (
        <div className='bg-slate-600 p-4 m-4 rounded text-white'>
            <h2>{ title}</h2>
        </div>
    );
};

export default Bookmark;