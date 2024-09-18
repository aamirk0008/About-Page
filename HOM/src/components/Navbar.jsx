import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed text-white top-0 left-0 right-0 flex justify-between px-16 py-10 hover:bg-white hover:text-black transition duration-300 ease-in-out'>
      <div className='hover:invert'>
        <a href=""><img className='w-40 ' src="https://growify.in/cdn/shop/files/Growify_white_logo.png?v=1711787329&width=280" alt="" /></a>
      </div>

      <div>
        <ul className='flex '>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">ABOUT</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">CASE STUDY</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">SERVICES</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">TECH</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">REFERRAL PROGRAM</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">CAREER</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">THE SCOOP</a></li>
            <li><a className='no-underline px-2 hover:text-violet-800' href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
