import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import Shimmer from './ShimmerUI';
import useRestaraunt from "../Constants/useRestaraunt";

const RestarauntMenu =()=>{
    const {id} = useParams();
    //const [restarunt, setrestarunt] = useState(null)
    const restarunt = useRestaraunt(id);
 
   if(restarunt === null){
    return <Shimmer />
   }
    
   const {cloudinaryImageId,name , cuisines,  avgRating , locality} = restarunt

    return(
        <div>
            <div>
       <h1>Restaraunt Id : {id}</h1> 
        <img alt="logo" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />  
        <h2>{name}</h2> 
       <h2>{cuisines.join(', ')}</h2>
       <h2>{locality}</h2>
       <h2>{avgRating} stars</h2> 
       </div>
        </div>
    ) 
}

export default RestarauntMenu