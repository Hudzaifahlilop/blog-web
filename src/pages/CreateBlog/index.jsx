import React, { useEffect, useState } from 'react'
import { Button, Input, Link, TextArea, Upload } from '../../components'
import { Link as LinkReact } from 'react-router-dom'
import Axios from 'axios';
import { useParams } from 'react-router-dom';



const CreateBlog = () => {
  const [tittle, setTittle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
          const data = res.data.data;
          console.log("data", data);
          setTittle(data.tittle);
          setBody(data.body);
          setImagePreview(`http://localhost:4000/${data.image}`);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id])

  const newBlog = () => {
    const data = new FormData();
    data.append('tittle', tittle);
    data.append('body', body);
    data.append('image', image);

    Axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log("post success", res);
        alert("Upload Success")
      })
      .catch(err => {
        console.log("err", err)
      })
  }

  const updateBlog = () => {
    const data = new FormData();
    data.append('tittle', tittle);
    data.append('body', body);
    data.append('image', image);

    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log("Update success", res)
        alert("Update Success")
      })
      .catch(err => {
        console.log("err", err)
      })
  }

  const onSubmit = () => {
    if (isUpdate) {
      updateBlog();
    } else {
      newBlog();
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  return (
    <section id="crate-blog">
      <div className="container">
        <div className="w-full px-4 py-2 max-w-2xl mx-auto">
          <div className="w-full">
            <div className="max-w-[200px] mx-auto">
              <LinkReact to="/">
                <Link tittle="Kembali" />
              </LinkReact>
            </div>
          </div>
          <p className='mx-2 font-bold text-center'>{isUpdate ? "Update" : "Create New"} Blog Post</p>
          <Input label="Post Title" value={tittle} onChange={(e) => setTittle(e.target.value)} />
          <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
          <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
          <div className="max-w-[200px] mt-2">
            <Button tittle={isUpdate ? "Update" : "Create"} onClick={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateBlog