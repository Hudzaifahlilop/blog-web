import React from 'react'

const TextArea = ({...rest}) => {
  return (
    <div>
        <textarea {...rest} className='w-full rounded-lg px-4 py-2 mx-4 bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'></textarea>
    </div>
  )
}

export default TextArea