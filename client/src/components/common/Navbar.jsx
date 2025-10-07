import { Link, NavLink } from "react-router-dom"
import { CircleEllipsis, ShoppingCart, Undo2 } from 'lucide-react'
import { assets } from "../../assets/assets"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <Link to={'/'} className="flex">
       <span className="text-2xl text-blue-500">VENDORA</span>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to={'/products'} className='flex flex-col items-center gap-1'>
          <p>PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div className="relative">
          <img src={assets.userIcon} alt="userImage" className="w-5 cursor-pointer"/>
        </div>

        <Link to={'/cart'}>
          <ShoppingCart className="w-6"/>
        </Link>

        <CircleEllipsis className="w-6 sm:hidden cursor-pointer" onClick={() => setVisible(true)}/>

        { visible && (
          <div className="fixed inset-0 z-40 sm:hidden" onClick={() => {setVisible(false)}}/>
        )}
        <div className={`fixed top-0 right-0 h-full z-50 bg-white transition-transform ease-in-out duration-300 sm:hidden w-60 ${visible ? 'translate-x-0': 'translate-x-full'}`}>
            <div className="flex flex-col text-gray-600 h-full">
              <div onClick={() => setVisible(false)} className="flex items-center gap-5 p-3 cursor-pointer">
                <Undo2 className="w-6"/>
                <p>Back</p>
              </div>
              <NavLink to={'/'} onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>
                HOME
              </NavLink>
              <NavLink to={'/products'} onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>
                PRODUCTS
              </NavLink>
              <NavLink to={'/about'} onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>
                ABOUT
              </NavLink>
              <NavLink to={'/contact'} onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>
                CONTACT
              </NavLink>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
