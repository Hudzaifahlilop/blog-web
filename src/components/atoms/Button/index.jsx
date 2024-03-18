import React from 'react'

const Button = ({tittle,...rest}) => {
  return (
    <div className='w-full px-4'>
        <button {...rest} className='bg-primary font-semibold rounded-lg w-full text-base text-white py-3 px-8 hover:opacity-80'>{tittle}</button>
    </div>
  )
}

export default Button