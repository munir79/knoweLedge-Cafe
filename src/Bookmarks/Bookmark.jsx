
import PropTypes from 'prop-types';
import SingleBookmarks from '../SingleBookMark/SingleBookmarks';





const Bookmark = ({bookmarks}) => {
  // console.log(boomarks);
  // console.log(boomarks);
    return (
        <div className="md:w-1/3">
          <h3 className="text-2xl"> BookMarks Blogs:{bookmarks.length}</h3>
        {
          bookmarks.map(book=><SingleBookmarks key={book.id} book={book}></SingleBookmarks>)
        }
        </div>
    );
};
Bookmark.propTypes={
  bookmarks:PropTypes.object
}
export default Bookmark;