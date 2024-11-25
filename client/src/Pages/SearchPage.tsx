import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function SearchPage() {
  var {search} =useParams();
  var search2 = search?.charAt(0).toUpperCase() + search.slice(1);

  const [places, setplaces] = useState([]);
  useEffect(async() => {
    if(!search){
      return;
    }
   const {data}  = await axios.get('/searchplaces/'+search2);
   console.log(data);
   setplaces(data);

  }, [search]);

    return (<>
      
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 ">
  {places.length>0 && places.map(place=>(
    <Link to={'/place/'+place._id}>
      <div className="bg-gray-500 mb-2 rounded-2xl flex">
      {place.photos?.[0] &&(
        <img className="rounded-2xl object-cover aspect-square" src={ 'http://localhost:4000/uploads/' +place.photos?.[0]} alt="" />
      )}</div>
      <h2 className=" font-semibold">{place.address}</h2>
      <h3 className=" font-normal text-gray-500">{place.title}</h3>
      
      <div className="mt-1">
      <span className="font-normal">₹{place.price} <span></span>night</span>
      </div>
      </Link>
  ))}    

  </div>
      </>
  )
}
