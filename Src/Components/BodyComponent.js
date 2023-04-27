import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { API_URL, ResData, filterData } from "../Constants/ResData";
import '../App.css';
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";


const BodyComponent =()=>{
  
 const [ListofRestaraunts, setListofRestaraunts] = useState([]);
 const [NewRestaraunt, setNewRestaraunt] = useState([]);
 const [search,setSearch] = useState("");

 useEffect(()=>{
  getAllRestaraunts();
  console.log("UseeFFECT");
 },[search])

 async function getAllRestaraunts(){
    const data = await fetch(API_URL);
    const JSON = await data.json();
    setListofRestaraunts(JSON?.data?.cards[2]?.data?.data?.cards);
    setNewRestaraunt(JSON?.data?.cards[2]?.data?.data?.cards);
   // console.log(JSON);
 }
//write logic to return component early (not render componnent) if there is no list of resturaunts or undefine 
//One way is like u can do optinal chaing for not render component if there is no listofResturants.

    return (ListofRestaraunts?.length === 0)? (<Shimmer />) :(
      <div className="Body-Conatiner">
        <div className="button-ctn">
          <button className="button" 
          onClick={()=>{
           const FilterRestaraunts = NewRestaraunt.filter(
              (Res) => Res.data.avgRating > 4
            )
            setNewRestaraunt(FilterRestaraunts);
            console.log(FilterRestaraunts)
          }}>
            Top Restaraunts
          </button>
        </div>
        <div className="src-ctn">
        <input className="imput-bar"
        placeholder={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }} />
        <button className="Search" onClick={()=>{
           const data = filterData(search,NewRestaraunt);
           setNewRestaraunt(data);
        }}>Search</button>
        </div>
      <div className="Card-Container">{
        (!NewRestaraunt?.length) ? (<h3>No restaurants found</h3>) :
            (NewRestaraunt.map((ResList)=> {
              return(
                <Link to={"/restaraunt/"+ ResList.data.id} key={ResList.data.id}>
          <CardComponent Restaraunt={ResList} />
          </Link>
          );})
          )}
          </div>
          
      </div>
    )
}

export default BodyComponent;