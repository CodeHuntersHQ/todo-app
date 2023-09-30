import { useState } from "react";
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  let[open,setOpen]=useState(false)

  let Links = [{ name: 'Home', link: '/' },
  { name: 'Services', link: '/' },
  { name: 'About', link: '/' }]
  return (
    <div className="shadow-md w-full static top-0 left-0 ">
      <div className="md:flex justify-between items-center bg-white  md:px-10 px-7 md:py-0 py-4">

        <div className="cursor-pointer flex">
          <span>LOGO</span>
        </div>
        <div onClick={()=>setOpen(!open)} className="absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7">
          {
            open? <XMarkIcon/>:<Bars3Icon/>
          }
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 font-semibold md:static absolute md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top-12':'top-[-490px]'}`}>
          {Links.map((link) => (
            // eslint-disable-next-line react/jsx-key
            <li className="md:px-4 hover:bg-slate-300 py-4 duration-500">
              <a href={link.link}>{link.name}</a>
            </li>))}
          <button className="btn bg-green-600 hover:bg-green-500 md:ml-8 py-1 px-3 rounded text-white font-semibold duration-300 md:static">Register</button>

        </ul>

      </div>
    </div>
    
  )
}