import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'


const Displaywidgets = () => {
  
  
  
    let [widget,setwidget]=useState([])
    let fetchApi=async()=>
    {
     let {data}=await axios.get("http://localhost:5000/widgets");
     console.log(data);
     setwidget(data);
     
    }
    useEffect(()=>
    {
        try{
            fetchApi();
            
        }
        catch(e){
            console.log(e);
            
    }
},[]) 

   
  //   ****Delete an employee****
  let deletewidget = (id) => {
    axios.delete("http://localhost:5000/widgets/" + id);
    window.location.assign("/displaywidget");
  };
    
  return (
  
    <main className="displaySection">
        <Navbar></Navbar>
      <section className="selectedNotes">
        <main className="displayBlock">
         <div className='displayContent'>
           {
             widget.map((value)=>
            {
              return ( <div key={value.id} className="output">
               <p className='title'>Title:{value.title}</p>
               <p>Description:{value.description}</p>
               <p>Category:{value.category}</p>

               <NavLink to={`/update/${value.id}`}>
        <button>
          Update
        </button>
        </NavLink>
        <button onClick={()=>deletewidget(value.id)}>Delete</button>
    
              </div>
              )
            })
           }
         </div>
         
        </main>
      </section>
    </main>
  )
}

export default Displaywidgets