import React from 'react'
import { Link as LinkReact } from 'react-router-dom'
import { Button, Link } from '../../atoms'

const BlogItem = (props) => {
  const { image, tittle, author, date, body, _id, onDelete } = props;
  return (
    <section id="blogitem">
      <div className="container mt-5 w-full shadow-xl rounded-xl h-full">
        <div className="shadow-lg ">
          <img src={image} alt="" className="w-full rounded-xl " />
        </div>
        <div className="py-2 px-2 border">
          <div className="flex flex-wrap justify-between border">
            <h3 className='font-semibold mb-1 text-xl text-dark max-w-[calc(50%-2rem)] truncate'>{tittle}</h3>
            <div className="px-5 flex flex-wrap items-center">
              <LinkReact to={`/create-blog/${_id}`}>
                <p className='text-primary me-4 hover:opacity-80'>Edit</p>
              </LinkReact>
              <LinkReact onClick={() => onDelete(_id)}>
                <p className='text-red-700 hover:opacity-80'>delete</p>
              </LinkReact>
            </div>
          </div>
          <h4 className='text-base text-slate-400 mb-3'>{author} - {date}</h4>
          <p className='text-dark mb-4'>{body}</p>
        </div>
        <div className="mb-2">
          <LinkReact to={`/detail-blog/${props._id}`}>
            <Link tittle="Lihat Selengkapnya >>" />
          </LinkReact>
        </div>
      </div>
    </section>
  )
}

export default BlogItem