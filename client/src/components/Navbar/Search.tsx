import axios from "axios";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Search() {
  const [search, setsearch] = useState('');
  return(
    <div className="border-[2px]
        py-2 px-3
        w-[40vw]
        rounded-full
         shadow-sm
          hover:shadow-md
          transition
         cursor-pointer ">
<label className=" flex items-center gap-2">
  
  <input type="text" className="
  pl-2 w-[40vw]
        py-2 
        rounded-full
         shadow-sm
          hover:shadow-md
          transition
         cursor-pointer " value={search}
         onChange={(e)=>{setsearch(e.target.value)}}
         placeholder="Search eg,Dubai" />
  <Link to={'/searchplace/'+search}
 
  className=" p-2 bg-rose-500 rounded-full text-white"><BiSearch size={18}/></Link>
</label></div>
  )
//   return (<>
//     <div
//       className="
//        border-[1px]
//        py-2 
//        rounded-full
//         shadow-sm
//          hover:shadow-md
//          transition
//         cursor-pointer "
//         onClick={()=>document?.getElementById('my_modal_3').showModal()}>
//         <div className="flex flex-row items-center justify-between">
//         <div className="text-sm font-semibold px-6 ">Anywhere</div>
//         <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">Any Week</div>
//         <div className="text-sm pl-6 pr-2  flex flex-row items-center gap-3">
//             <div className="text-sm font-semibold hidden sm:block">Add Guests</div>
//             <div className=" p-2 bg-rose-500 rounded-full text-white"><BiSearch size={18}/></div>
//         </div>
//         </div>
//     </div>
//     <dialog id="my_modal_3" className=" rounded-xl">
//   <div className="modal-box w-[80vw] h-[80vh]">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn text-2xl  absolute right-5 top-3">✕</button>
//       <SearchResult/>
//     </form>
    
   
//   </div>
// </dialog>
// </>
  // )
}
