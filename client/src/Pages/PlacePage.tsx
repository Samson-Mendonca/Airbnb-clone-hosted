import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaceGallery from '../components/PlaceGallery';
import BookingWidget from '../components/BookingWidget';
import PerksWidget from '../components/PerksWidget';

export default function PlacePage() {
  
  


  const [place, setplace] = useState(null);
    const {id} = useParams();
    useEffect(async () => {
      if(!id){
        return;
      }
     const {data}  = await axios.get('/places/'+id);
     
     setplace(data);

    }, [id]);
    if (!place) {
      return(
        <h1>Unfortunately!,No data available at the moment!</h1>
      );
    }
    return (
      <div className="mt-4 mx-auto pt-8 ">
        <h1 className="text-4xl  mb-4 font-semibold ">{place.title}</h1>
        <a className=' mb-4  text-sm block font-semibold  hover:underline text-black ' target='blank' href={'https://maps.google.com/?q='+place.address}>{place.address}</a>
        
        <PlaceGallery place={place} />
        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="ml-2">
              <h2 className="font-semibold text-2xl mb-2">About This Space</h2>
              {place.description}
            </div>
           <span className='font-semibold '>Check-in: </span>{place.checkIn} <br />
           <span className='font-semibold '>Check-out: </span>{place.checkOut} <br />
           <span className='font-semibold '>Max number of guests: </span> {place.maxGuests}
           
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white -mx-8 px-8 py-8">
          <div>
            <h2 className="font-semibold text-2xl">What this place offers</h2>
          </div>
          <PerksWidget perks={place.perks}/>
        </div>
        
        <div className="bg-white -mx-8 px-8 py-8">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
          <div className="mb-4 mt-2 text-md leading-5">{place.extraInfo}</div>
        </div>
      </div>
    );
 
}
