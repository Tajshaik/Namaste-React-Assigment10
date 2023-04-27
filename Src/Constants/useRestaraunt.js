import {useState, useEffect} from "react";
import { Restaraunt_URL } from "./ResData";

const useRestaraunt =(id)=>{
const [Restaraunt, setRestaraunt] = useState(null)
     
    useEffect(()=>{
        getRestarauntdetails();
       },[]);
    
       async function getRestarauntdetails(){
        const data = await fetch(Restaraunt_URL+ id);
        const json = await data.json();
        const ResData = json.data?.cards[0]?.card?.card?.info;
        //console.log(ResData);
        setRestaraunt(ResData);
        //console.log(json.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
       }

  return  Restaraunt;
}

export default useRestaraunt