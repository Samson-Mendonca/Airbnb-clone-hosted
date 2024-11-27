import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlacesFormPage from "./PlacesFormPage";
export default function PlacesPage() {
  const [places, setplaces] = useState([]);
  const {action} =useParams();
  useEffect(() => {
    axios.get('/places').then(({data}) => {
      setplaces(data);
      
    })
  }, []);


  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
        
         
        <h2 className=" text-2xl font-medium"> Add/Edit Your Accomodations.</h2>
        <Link className= " inline-flex gap-1 bg-rose-500 rounded-full py-2 px-4 text-white mt-2" to={'/account/places/new'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
     </svg>
     
        Add new place
        </Link>
        <div className="mt-4">
          {places.length > 0 && places.map(place => (
            <Link to={'/account/places/' + place._id } className=" mb-2 flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl">
              <div className=" flex h-32  rounded-2xl ">
                {place.photos.length > 0 && (
                  <img className="   object-cover rounded-md" src={ 'https://airbnb-clone-hosted-backend.onrender.com/uploads/' + place.photos[0]} alt="" />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-2xl  ">{place.title}</h2>
              <p className="text-sm mt-2">{place.description}</p>
              </div>
              </Link>
              
          ))}
        </div>
         </div>
      )}
    {action === 'new' && (     
      
      // form for entering new place information
     <PlacesFormPage/>
     )}
   </div>
  )
}
