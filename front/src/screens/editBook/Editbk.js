import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editBook } from '../../js/bookSlice/bookSlice';
import "./editBook.css"

const Editbk = ({book,ping,setping}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const dispatch = useDispatch()
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
      
    });
    const handleEdit =()=>{
    dispatch(editBook({editedBook:edited,id:book._id}))
    setping(!ping)
    }
    return (
        <div>
             <Button style={{width:"100%"}}  variant="primary" onClick={handleShow}>
               update book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="inputEdit">
            <h1>{book?.rate}</h1>
            <label htmlFor="">language</label>
            <input type="text" placeholder="Enter the language" onChange={(e)=>setedited({...edited,language:e.target.value})}/>
             <label htmlFor="">rate</label>
            <input type="text" onChange={(e)=>setedited({...edited,rate:e.target.value})}/>
            <label htmlFor="">title</label>
            <input type="text" onChange={(e)=>setedited({...edited,title:e.target.value})}/>
            <label htmlFor="">date</label>
            <input type="text" onChange={(e)=>setedited({...edited,date:e.target.value})}/>
            <label htmlFor="">author</label>
            <input type="text" onChange={(e)=>setedited({...edited,author:e.target.value})}/>
            <label htmlFor="">description</label>
            <input type="text" onChange={(e)=>setedited({...edited,description:e.target.value})}/>
            <label htmlFor="">image</label>
            <input type="text" onChange={(e)=>setedited({...edited,image:e.target.value})}/>
            <button onClick={handleEdit}>Edit</button>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleEdit();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Editbk
