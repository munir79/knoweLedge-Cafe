
import PropTypes from 'prop-types';
const SingleBlog = ({cov}) => {
 console.log(cov);
   const {title,cover,author_img,author,reading_time}=cov;
    return (
        <div>
         <h3>{title} </h3> 
         <img src={cover} alt="" />  
         <div className='flex justify-between'>
            <div className='flex'>
              <img src={author_img} alt="" />
              <p>{author}</p>
            </div>
            <div>
              <p>{reading_time} </p>
            </div>
         </div>

        </div>
    );
};
SingleBlog.propTypes={
    cov:PropTypes.object.isRequired
}
export default SingleBlog;