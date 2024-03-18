import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='bg-primary'>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center ">
          <Link to="/">
            <p className='font-bold text-white text-lg py-3'>Mern Blog</p>
          </Link>
          <Link to="/login">
            <p className='font-semibold text-slate-500 underline py-3'>logout</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header