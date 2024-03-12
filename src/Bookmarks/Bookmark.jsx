
import PropTypes from 'prop-types';
import SingleBookmarks from '../SingleBookMark/SingleBookmarks';





const Bookmark = ({bookmarks,markTime}) => {
  // console.log(boomarks);
  // console.log(boomarks);
    return (
      
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-2 pt-4">
         <div className='m-4'>
         <h3 className='text-2xl text-center ' > Total Time:{markTime} </h3>
         </div>
          <h3 className="text-2xl text-center"> BookMarks Blogs:{bookmarks.length}</h3>
        {
          bookmarks.map(book=><SingleBookmarks markTime={markTime} bookmarks={bookmarks} key={book.id} book={book}></SingleBookmarks>)
        }
        </div>
    );
};
Bookmark.propTypes={
  bookmarks:PropTypes.array,
  markTime:PropTypes
}
export default Bookmark;