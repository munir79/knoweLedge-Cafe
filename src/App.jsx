
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmark from './Bookmarks/Bookmark'
import Header from './Componenet/Header/Header'

function App() {

  const [bookmarks,setBookMarks]=useState([]);

  const handleBookMarks=book=>{
    // console.log("bookMArks Adding Soon");
    const newBookMArks=[...bookmarks,book];
    setBookMarks(newBookMArks);

  }

  return (
    <>
      
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
    <Blogs handleBookMarks={handleBookMarks}></Blogs>
    <Bookmark bookmarks={bookmarks} ></Bookmark>
    </div>
     
      
     
    </>
  )
}

export default App
