import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

const Addtask = () => {
  let navigate=useNavigate();
  
    let [state, setState] = useState({
        title : "",
        description: "",
        category : "",
        
    })
     
    let {title,description,category} = state; 
    let handleinput=(e)=>
    {
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }

    
    let handleSubmit=(e)=>
      {
        e.preventDefault()
        let payload={title, description, category}
        axios.post("http://localhost:5000/widgets",payload);
        toast.success("SUCESSFULLY POSTED!")
        navigate("/displaywidget")

  
      }
  
  return (
    <>
       <Navbar></Navbar>
       {/* <Widget></Widget> */}
       <main className="mainFormBlock">
        <form  onSubmit={handleSubmit} >
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
                <button>ADD-WIDGET</button>
            </div>
        </form>
    </main>
       </>
  )
}

export default Addtask