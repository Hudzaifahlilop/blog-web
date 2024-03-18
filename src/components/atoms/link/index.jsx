import React from 'react'

const Link = ({tittle, onClick}) => {
  return (
    <p className='text-center py-2 underline text-slate-500 hover:cursor-pointer' onClick={onClick}>{tittle}</p>
  )
}

export default Link