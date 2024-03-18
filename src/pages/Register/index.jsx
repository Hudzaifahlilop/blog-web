import React from 'react'
import { Button, Input, Link } from '../../components'
import { Link as LinkReact } from 'react-router-dom'


const Register = () => {
  return (
    <section id="register" className="pt-35 mt-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 py-6 lg:w-2/3">
            <img src="https://source.unsplash.com/720x360?form" className='rounded-lg' alt="" />
          </div>

          <div className="w-full justify-center px-4 mt-6 lg:w-1/4">
            <h3 className='px-4 font-bold text-lg'>Form Register</h3>
            <Input label="Full Name" placeholder="Full Name" />
            <Input label="Email" placeholder="Email" />
            <Input label="Password" placeholder="Password" />
            <br />
            <LinkReact to="/">
              <Button tittle="Register" />
            </LinkReact>
            <LinkReact to="/login">
              <Link tittle="Kembali ke login" />
            </LinkReact>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register