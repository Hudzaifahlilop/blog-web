import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
  const[data, setData] = useState({});

  const  {id}  = useParams();
  useEffect(() => {

    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      console.log("data", res);
      setData(res.data.data);
      console.log("success", data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [id]);
  if(data.author){
  return (
    <section id="detail-blog">
      <div className="container">
        <div className="w-full px-4 py-2 max-w-2xl mx-auto">
            <img src="https://source.unsplash.com/720x300?building" alt="thumb" className='w-full h-[300px] rounded-xl' />
            <p className='font-bold text-primary text-lg mt-1'>{data.tittle}</p>
            <p className='font-semibold text-slate-400 mb-4'>{data.author.name} - {data.createdAt}</p>
            <p>{data.body}</p>
        </div>
      </div>
    </section>
  )
  }
  return <p>Loading data...</p>
}

export default DetailBlog;
