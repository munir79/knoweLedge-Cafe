
import PropTypes from 'prop-types';
const SingleBookmarks = ({book}) => {
    console.log(book);
    const {title}=book;
    return (
        <div>
           
            <h3 className='bg-slate-200 text-2xl p-4 m-4 rounded-xl'>{title} </h3>
        </div>
    );
};

SingleBookmarks.propTypes={
    book:PropTypes.object,
    bookmarks:PropTypes.object,
    markTime:PropTypes
}
export default SingleBookmarks;