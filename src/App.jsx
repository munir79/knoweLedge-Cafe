
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmark from './Bookmarks/Bookmark'
import Header from './Componenet/Header/Header'

function App() {

  const [bookmarks,setBookMarks]=useState([]);
  const [markTime,setMarkTime]=useState(0);

  const handleBookMarks=book=>{
    // console.log("bookMArks Adding Soon");
    const newBookMArks=[...bookmarks,book];
    setBookMarks(newBookMArks);

  }

  const handleMArkRead=time=>{
    console.log('time added');
    const newTime=markTime+time;
    console.log(newTime);
    setMarkTime(newTime);
  }

  return (
    <>
      
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
    <Blogs handleMArkRead={handleMArkRead} handleBookMarks={handleBookMarks}></Blogs>
    <Bookmark markTime={markTime} bookmarks={bookmarks} ></Bookmark>
    </div>
     
      
     
    </>
  )
}

export default App
