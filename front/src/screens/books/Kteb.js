import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editbk from '../editBook/Editbk'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { deleteBook } from '../../js/bookSlice/bookSlice';
import {Button} from 'react-bootstrap';
import "./kteb.css"

const Kteb = ({book,ping,setping}) => {
  AOS.init();
const dispatch=useDispatch()
  const handleDelete=()=> {
    dispatch(deleteBook({id:book._id}));
    setping(!ping)
}

  const user = useSelector(state => state.user.user)
    return (
        <div className="allkteb" data-aos="fade-down">
            <div class="card" style={{width: "18rem"}}>
  <img src={book.image} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p class="card-text txt">{book.title}</p>

    <p class="card-text">{book.description}</p>
    {user?.isAdmin?<div><Editbk  book={book} ping={ping} setping={setping}/>            <Button style={{width:"100%"}} variant="danger" onClick={handleDelete}>delete</Button>
</div>:null}
  </div>
</div>
        </div>
    )
}

export default Kteb
