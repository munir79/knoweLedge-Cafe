
import PropTypes from 'prop-types';
const SingleBookmarks = ({book}) => {
    console.log(book);
    const {title}=book;
    return (
        <div>
            <h3 className='text-3xl'>{title} </h3>
        </div>
    );
};

SingleBookmarks.propTypes={
    book:PropTypes.object
}
export default SingleBookmarks;