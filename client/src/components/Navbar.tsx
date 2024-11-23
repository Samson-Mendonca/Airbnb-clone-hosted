import { Link } from 'react-router-dom'
import Search from './Navbar/Search'
import UserMenu from './Navbar/UserMenu'

export default function Navbar() {
  
  return (
 
    <header className=" relative w-full bg-white  shadow-sm">
        <div className="py-4 border-b-[1px]">
        <div
        className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
        >
     
    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
        <Link to={'/'} className="logo">
        <img src="/logo.svg" alt="logo"height={100} width={100} />
        </Link>
         <Search/>
         <UserMenu/>
         
         </div>
         </div>
         </div>
    </header>
   
  )
}
