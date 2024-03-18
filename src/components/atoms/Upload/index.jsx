import React from 'react'

const Upload = ({img, ...rest}) => {
  return (
    <div className='mx-4 '>
        <div className="">
            {img && <img src={img} alt="preview" className='w-[200px] rounded-lg'  />}
        </div>
        <input type="file" {...rest} className='rounded-lg my-4' />
    </div>
  )
}

export default Upload