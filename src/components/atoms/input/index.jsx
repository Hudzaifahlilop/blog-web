import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div className='w-full px-4 my-4' >
        <p className='font-bold text-primary'>{label}</p>
        <input type="text" {...rest} className='w-full rounded-lg px-4 py-2 bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'/>
    </div>
  )
}

export default Input