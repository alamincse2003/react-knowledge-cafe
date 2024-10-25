import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

   const [books, setBooks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

    const handleAddToBook = blog => {
        const newBooks = [...books, blog]
        setBooks(newBooks);
    }
  
  const handleReadingTime = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove bookmarks
    const remainingBookmarks = books.filter(book => book.id !== id)
    setBooks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBook={handleAddToBook} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks books={books} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
