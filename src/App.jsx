
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmark from './Bookmarks/Bookmark'
import Header from './Componenet/Header/Header'

function App() {


  return (
    <>
      
      <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
     
      
     
    </>
  )
}

export default App
