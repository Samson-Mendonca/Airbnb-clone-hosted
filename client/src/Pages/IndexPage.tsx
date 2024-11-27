import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function IndexPage() {
  const [places, setplaces] = useState([]);
  useEffect(() => {
    
      axios.get('/all-places').then(
        response=>{
          setplaces(response.data);
          
        }
      );
    
  }, []);
  return (<>
    
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 ">
{places.length>0 && places.map(place=>(
  <Link to={'/place/'+place._id}>
    <div className="bg-gray-500 mb-2 rounded-2xl flex">
    {place.photos?.[0] &&(
      <img className="rounded-2xl object-cover aspect-square" src={ 'https://airbnb-clone-hosted-backend.onrender.com/uploads/' +place.photos?.[0]} alt="" />
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
