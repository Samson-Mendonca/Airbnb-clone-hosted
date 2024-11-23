import { useEffect, useState } from 'react';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import Perks from "../components/Perks";
import { cn } from "../lib/utils";
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

export default function PlacesFormPage() {
  const{id} = useParams();
  
    const [title, settitle] = useState('');
const [address, setaddress] = useState('');
const [photos, setphotos] = useState([]);
const [photoLink, setphotoLink] = useState('');
const [description, setdescription] = useState('');
const [perks, setperks] = useState([]);
const [extraInfo, setextraInfo] = useState('');
const [checkIn, setcheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [maxGuests, setmaxGuests] = useState('');
const [redirect, setredirect] = useState();
const [price, setprice] = useState('');
useEffect(() => {
  if (!id){
    return;
  }
  axios.get('/places/' + id).then(response=>{
    const {data} = response;
    settitle(data.title);
    setaddress(data.address);
    setphotos(data.photos);
    setdescription(data.description);
    setperks(data.perks);
    setextraInfo(data.extraInfo);
    setcheckIn(data.checkIn);
    setCheckOut(data.checkOut);
    setmaxGuests(data.maxGuests);
    setprice(data.price);
  });
}, [id]);
async function savePlace(ev){
    ev.preventDefault();
    if(id){
      //update
      if(!title || !address || photos.length === 0 || !description || !perks || !extraInfo || !checkIn || !checkOut || !maxGuests || !price){
        alert('Please enter all the details to add a new place.');
      }
      
     await axios.put('/places', { id ,title, address, photos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price});
    setredirect(true);
    
  }else{
    if(!title || !address || photos.length === 0 || !description || !perks || !extraInfo || !checkIn || !checkOut || !maxGuests || !price){
      alert('Please enter all the details to add a new place.');
    }
    
   await axios.post('/places', {title, address, photos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price});
  setredirect(true);
    }
  }
  function selectAsMainPhoto(ev,filename) {
    ev.preventDefault();
    setphotos([filename,...photos.filter(photo => photo !== filename)]);
  }
  
  async function addPhotoByLink(ev){
    ev.preventDefault();
     const {data:filename} = await axios.post('/upload-by-link', {link:photoLink});
     setphotos(prev =>{
      return [...prev, filename];});
      setphotoLink('');
    }
    async function uploadPhoto(ev){
      // ev.preventDefault();
      const files = ev.target.files;
      const data = new FormData();
      for(let i = 0; i < files.length; i++){
        data.append('photos', files[i]);
      }
      
  
      const {data:filenames} = await  axios.post('/upload', data, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      setphotos(prev =>{
        return [...prev, ...filenames];
      });
    }

    function removePhoto(ev,filename){
      ev.preventDefault();
        setphotos([...photos.filter(photo=>photo!== filename)]);
    }

    if(redirect){
      return <Navigate to={'/account/places'} />
    }
  return (
    <div>
    <form onSubmit={savePlace} className="border-2 rounded-lg">
    <div className={cn("flex flex-col space-y-5 px-4 max-w-10-xl mx-auto pr-4 bg-white")}>
     
  
    <Label htmlFor="title" className="text-2xl mt-4 ">Title</Label>
    <Input id="title" value={title} onChange={ev=>settitle(ev.target.value)} className="bg-slate-100" placeholder="Title for your place" type="text" />
    
     <Label htmlFor="address"   className="text-2xl mt-4">Address</Label>
     <Input id="address" value={address} onChange={ev=>setaddress(ev.target.value)} className="bg-slate-100 pb-20 pt-5" placeholder="Goa,India(Location)" type="text" />
     <h2 className="text-2xl mt-4 font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
       Photos</h2>
       <div className="flex gap-2">
         <Input type="text" value={photoLink}
          onChange={ev=>setphotoLink(ev.target.value)} className="bg-slate-100" placeholder={'Add using a link ....jpg'} />
         <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl ">Add&nbsp;Photo</button>
       </div>
       <div className='flex text-xl font-semibold'><h2>Or</h2></div>
     
     <div className=" mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
       {photos.length > 0 && photos.map(link => (
         <div className="h-32 flex relative"><img className="rounded-2xl w-full object-cover" src={'http://localhost:4000/uploads/'+link} alt="" />
         <button onClick={ev => removePhoto(ev,link)} className=' cursor-pointer hover:bg-black absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-2'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

         </button>
         <button onClick={ev => selectAsMainPhoto(ev,link)} className=' cursor-pointer hover:bg-black absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-full p-2'>
          {link === photos[0]&&(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          
          )}
         {link !== photos[0] &&(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>)}


         </button>
         </div>
       ))}
        <label className=" h-32 cursor-pointer flex items-center justify-center gap-1 border-2 border-rose-500 rounded-2xl p-2 text-2xl text-rose-600">
        <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ">
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
Upload</label>
     </div>
     <Label htmlFor="description"className="text-2xl">Description</Label>
     <Input id="description"value={description} onChange={ev=>setdescription(ev.target.value)} className="bg-slate-100 pb-20 pt-5" placeholder="Description of the place" type="text"/>
     <Label htmlFor="perks" className="text-2xl">Perks</Label>
     <div className=" mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
       <Perks selected={perks} onChange={setperks}/>
     </div>
     <Label htmlFor="extra info"className="text-2xl">Extra info</Label>
     <Input id="extra info" value={extraInfo} onChange={ev=>setextraInfo(ev.target.value)} className="bg-slate-100 pb-20 pt-5" placeholder="house rules,etc" type="text" />
     <Label htmlFor="checkIn"className="text-2xl">Check in time</Label>
     <Input id="checkIn" value={checkIn} onChange={ev=>setcheckIn(ev.target.value)} className="bg-slate-100" placeholder="15:00" type="text" />
     <Label htmlFor="checkOut"className="text-2xl">Check out time</Label>
     <Input id="checkOut" value={checkOut} onChange={ev=>setCheckOut(ev.target.value)} className="bg-slate-100" placeholder="10:00" type="text" />
     <Label htmlFor="maxGuests"className="text-2xl">Max guests</Label>
     <Input id="maxGuests" value={maxGuests} onChange={ev=>setmaxGuests(ev.target.value)} className="bg-slate-100" placeholder="10" type="text" />
     <Label htmlFor="price"className="text-2xl">Price per night</Label>
     <Input id="price" value={price} onChange={ev=>setprice(ev.target.value)} className="bg-slate-100" placeholder="Rs.10000" type="number" />
     </div>
     <div>
       <button className="bg-rose-500 rounded-2xl py-2 px-4 text-white mt-2 w-full text-xl">Save</button>
     </div>
     </form> 
    </div>
  )
}
