import React from "react";
//import '../App.css'

const CardComponent =(props)=>{
    const { Restaraunt } = props;
    console.log(Restaraunt)
    return(
        <div className="w-60 m-1 bg-gray-300 shadow-md">
         <img className="image" alt="logo" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + Restaraunt.data.cloudinaryImageId}/>
         <h3 className="font-bold text-xl">{Restaraunt.data.name}</h3>
         <h4>{Restaraunt.data.cuisines.join(', ')}</h4>
         <h4>{Restaraunt.data.avgRating} stars</h4>
         <h4>{Restaraunt.data.deliveryTime} minutes</h4>
         <h4>{'₹'+Restaraunt.data.costForTwo/100 +' FOR TWO'}</h4>
        </div>
    )
}

export default CardComponent