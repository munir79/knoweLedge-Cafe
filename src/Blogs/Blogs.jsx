// import { useEffect } from "react";
// import { useState } from "react";
import PropTypes from 'prop-types';
import SingleBlog from "../SingleBlog/SingleBlog";
import cover1 from '../assets/1.jpg';
import cover2 from '../assets/2.png';
import cover3 from '../assets/3.png';
import cover4 from '../assets/4.jpg';
import author1 from '../assets/boy1.png';
import author2 from '../assets/boy2.png';
import author3 from '../assets/girl1.jpg';
import author4 from '../assets/girl2.jpg';


const Blogs = ({handleBookMarks,handleMArkRead}) => {
    // const [blogs,setBlogs]=useState([]);
    // useEffect( ()=>{
    //     fetch('blog.json')
    //     .then(res=>res.json())
    //     .then(data=>setBlogs(data));
    // },[])
    const img=[
        {
        "id":1,
       "cover":cover1,
       "title": "Travel Through Breathtaking Landscapes",
        "author": "John Doe",
        "author_img": author1,
        "posted_date": "2024-03-11",
        "reading_time": 10 ,
        "hashtags": "#travel #landscape #photography" 
       
    },
        {
        "id":2,
       "cover":cover2,
       "title": "Delicious Recipes for Every Occasion",
    "author": "Jane Smith",
    "author_img": author2,
    "posted_date": "2024-03-10",
    "reading_time": 15,
    "hashtags": "#food #recipes #cooking"  
    },
        {
        "id":3,
       "cover":cover3,  
       "title": "Exploring the Uncharted Territory of Space",
       "author": "Sarah Miller",
       "author_img": author3,
       "posted_date": "2024-03-08",
       "reading_time": 12,
       "hashtags": "#space #exploration #science"
    },
        {
        "id":4,
       "cover":cover4,
       
       "title": "The Wonders of Wildlife Photography",
       "author": "David Lee",
       "author_img": author4,
       "posted_date": "2024-03-09",
       "reading_time": 8,
       "hashtags": "#wildlife #photography #nature"  
    },
];
    return (
        <div className="md:w-2/3">
       
            <h3 className="text-3xl py-5 ms-7"> This is bolg section</h3>

         
            {
                img.map(cov=><SingleBlog handleMArkRead={handleMArkRead} handleBookMarks={handleBookMarks} key={cov.id} cov={cov} ></SingleBlog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookMarks:PropTypes.func,
    handleMArkRead:PropTypes.func
}
export default Blogs;