import React from 'react'
import { Button, Input, Link } from '../../components'
import { Link as LinkReact } from 'react-router-dom'



const Login = () => {
  return (
    <section id="register" className="pt-35 mt-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 py-6 lg:w-2/3">
                <img src="https://source.unsplash.com/720x360?login" className='rounded-lg' alt="" />
            </div>

            <div className="w-full justify-center px-4 mt-6 lg:w-1/4">
              <h3 className='px-4 font-bold text-lg'>Login</h3>
              <Input label="Email" placeholder="Email" />
              <Input label="Password" placeholder="Password" />
              <br />
              <LinkReact to="/">
                <Button tittle="Login"/>              
              </LinkReact>
              <LinkReact to="/register">
                <Link tittle="Belum punya akun, silahkan daftar" />              
              </LinkReact>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Login