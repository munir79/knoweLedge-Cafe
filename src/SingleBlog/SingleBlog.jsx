
import PropTypes from 'prop-types';
// import { FaRegBookmark,IoBookmarksSharp } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
const SingleBlog = ({cov,handleBookMarks}) => {
 console.log(cov);
   const {title,cover,author_img,author,reading_time,posted_date,hashtags}=cov;
    return (
        <div className='mb-20'>
       
         <img className='w-full mb-4' src={cover} alt="" />  
         <div className='flex justify-between mb-4'>

            <div className='flex'>
              <img className='w-14' src={author_img} alt="" />
              <div className='ml-6'>
                <h3 className='text-2xl'>{author} </h3>
                <p>{posted_date} </p>

              </div>
            </div>
            <div>
              <span> {reading_time} min read </span>
              <button onClick={()=>handleBookMarks(cov)} className='ml-2 text-2xl text-rose-600'><IoBookmarksSharp></IoBookmarksSharp> </button>
            </div>
         </div>
         <h2 className='text-4xl'>{title} </h2>
         <a href="">{hashtags} </a>
        </div>
    );
};
SingleBlog.propTypes={
    cov:PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func
}
export default SingleBlog;