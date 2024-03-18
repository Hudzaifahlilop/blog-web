import React, {useEffect, useState}from 'react'
import { BlogItem, Button } from '../../components'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  
  const [counter, setCounter] = useState(1);

  // const {dataBlog} = useSelector(state => state.homereducer);
  // console.log(dataBlog)

  // const dispatch = useDispatch();

  // memanggil seleuruh data
  const fetchData = (pageNumber, perPage) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${pageNumber}&perPage=${perPage}`)
      .then(result => {
        console.log(result.data);
        const responseApi = result.data;
  
        setDataBlog(responseApi.data);
        setCurrentPage(responseApi.current_page);
        setTotalPage(Math.ceil(responseApi.total_data / responseApi.per_page));
        // dispatch({type: "UPDATE_DATA_BLOGS", payload: responseApi.data})
      })
      .catch(err => {
        console.log(err);
      });
  }
  

  const previous = () => {
      setCounter(counter <=1 ? 1 : counter - 1);
  }

  const next = () => {
    setCounter(counter === totalPage ? totalPage : counter + 1);
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah anda yakin?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log("succes", res.data);
              fetchData(counter, 4);
            })
            .catch(err => {
              console.log(err)
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => console.log("tidak setuju")
        }
      ]
    });
  }


  useEffect(() => {
      console.log("renderuseefeect")
      fetchData(counter, 4);
      
  }, [counter])

  return (
    <section>
      <div className="container max-w-4xl">
        <div className="w-full mx-auto">
          <div className='w-[200px] my-4 pt-4 ms-auto me-0'>
            <Link to="/create-blog">
              <Button tittle="Create Blog" />            
            </Link>
          </div>
          <div className="w-full">
            <div className="px-2 grid gap-1 grid-cols-1 sm:grid-cols-2">
              {dataBlog.map(blog => {
                return <BlogItem key={(blog._id)} image={`http://localhost:4000/${blog.image}`} tittle={blog.tittle} author={blog.author.name} body={blog.body} date={blog.updatedAt} _id={blog._id} onDelete={confirmDelete} className="w-full lg:w-1/2"/>
              })}
            </div>
          </div>
          <div className="max-w-[500px] flex my-10 mx-auto">
            <Button tittle="Previous" onClick={previous} />
            <p className='font-bold text-center text-base text-slate-500 w-1/2 my-auto'>{currentPage} / {totalPage}</p>
            <Button tittle="Next" onClick={next}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home