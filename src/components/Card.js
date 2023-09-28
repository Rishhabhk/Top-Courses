import './Card.css';
import { useState } from 'react';
import { AiTwotoneHeart } from "react-icons/ai";


function Card({course,like,likedCourses}){
    const [readmore, setReadmore] = useState(false); 
    const desc = readmore ? course.description : course.description.substring(0,100);
    function readHandler(){
        setReadmore(!readmore);
    }
 
    return(
        <div className="card">
            <div className='img_div'>
                <img src={course.image.url} alt={course.image.alt} width="300" height="150"></img>
            </div>
            <button className={likedCourses.includes(course.id) ? "liked" : "unliked"} onClick={()=>{like(course.id);}}><AiTwotoneHeart className='icon'/></button>
            <div className='title_div'>
                <h4>{course.title}</h4>
            </div>
            <div className='desc_div'>
                <p>{`${desc}... `}<b><span className='readmore' onClick={readHandler}>{readmore ? "show less":"read more"}</span></b></p>
            </div>
            
        </div>
    )
}

export default Card;