import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import  { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const Update = () => {
  
    let [state, setState] = useState({
        title : "",
        description: "",
        category : "",
        
    })
     
    let {title,description,category} = state; 
  let handleinput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  let navigate = useNavigate()
  
  //   *****To fetch data and reflect it in particular input based on ID****
  let {id} = useParams()
  console.log(id)
  
  let fetchApi = async()=>{
    let {data}=await axios.get("http://localhost:5000/widgets/"+id)
    console.log(data)
    setState(data)
  }
  
  useEffect(()=>{
    try{
        fetchApi()
    }catch(e){
        console.log(e)
    }
  },[])
  
  let handlesubmit = (e) => {
    e.preventDefault();
    try {
      
        let payload = state;
        axios.put("http://localhost:5000/widgets/"+id, payload);
        navigate('/displaywidget')
        toast.success('Successfully updated!')
      }
     catch (e) {
      console.log(e);
    } 
  
  };
  return (
    <>

    <Navbar></Navbar>
    <main className="mainFormBlock">
        <form  onSubmit={handlesubmit} >
            <div className="form-content">
                <label >Title:</label>
                <input type="text"  
                name='title' 
                placeholder='Enter Title' value={title}
                onChange={handleinput}/>
            </div>

            <div className="form-content">
                <label >Description:</label>
               <textarea name="description" cols="20" rows="5" value={description} onChange={handleinput} placeholder='Write Description...'></textarea>
            </div>
            <div className="form-content">
            <label >Category</label>
                <input type="text"  
                name='category'  
                placeholder='Enter Category' value={category} onChange={handleinput}
                />
            </div>
            <div className="form-content">
                <button>UPDATE</button>
            </div>
            </form>
            </main>
    </>
  )
}

export default Update