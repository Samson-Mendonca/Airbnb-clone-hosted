import { useContext, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import axios from 'axios';

export default function UserMenu() {
   const{ user} = useContext<any>(UserContext);
    const [isOpen, setisOpen] = useState(false);
    const toggleOpen = () => {
        setisOpen(!isOpen);
    }
  return (
    
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            
<div
onClick={toggleOpen} className="p-4 md:p-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
    <AiOutlineMenu />{!!user&&(
        <div className='text-sm font-semibold'>{user.name}</div>
    )}
    <div className="hidden md:block">
    
    <Avatar />
    </div>
    
</div>
            </div>


            {isOpen &&(
                <div
                className="
               
                absolute
                
                rounded-xl
                shadow-md
                bg-white
                text-sm
                font-semibold
                w-[20vw]
               
                overflow-hidden
                right-0
                top-12
                text-gray-400
                ">
                    <div className="flex flex-col cursor-pointer">
<>

<Link to={user?'/':'/login'}>{user?(
   <div onClick={async() => { 
    await axios.post('/logout');
    window.location.reload();
 }}
        className={user?"px-5  py-5 hover:bg-neutral-100 transition font-semibold":"hidden"}
        >Logout</div>
):(
    <div 
    className="px-5  py-5 hover:bg-neutral-100 transition 
    font-semibold">Login</div>
)}</Link>
<Link to={"/signup"}><div 
        className="px-5  py-5 hover:bg-neutral-100 transition 
        font-semibold">Signup</div></Link>
        
 <Link to={user?'/account':'/login'}><div 
        className="px-5  py-5 hover:bg-neutral-100 transition 
        font-semibold">Account</div></Link>





     
    

</>
                    </div>
                </div>
            )}
        </div>
    
     
  )
}
