import Card from "./Card";
import './CardContainer.css';
import { useState } from "react";
import { toast } from 'react-toastify';

function CardContainer({courses,category}){
    const [likedCourses, setLikedCourses] = useState([]);
    
    function like(id){
        if(likedCourses.includes(id)){
            setLikedCourses((prev) => prev.filter((cid)=>cid !== id))
            toast.warning("liked removed");
        }
        else{
            setLikedCourses((prev)=>[...prev,id])
            toast.success("liked successfully");
        }
       
        console.log(likedCourses)
    }
    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach((item) => {
                item.forEach((course_data)=>{
                    allCourses.push(course_data);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
       
    }
    return(
        <div className="card_container">
            {
                getCourses().map((item)=>{
                    return <Card course={item} like={like} likedCourses={likedCourses}></Card>
                })
            }
        </div>
    )
}

export default CardContainer;