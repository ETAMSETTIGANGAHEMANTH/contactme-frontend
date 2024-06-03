import React from 'react'
import './Admin.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import image from '../images/login_image.jpg'
import { useAuth } from '../context/AuthContext';
function Admin() {

  let {register,handleSubmit,formState :{errors},reset} = useForm();
  let[err,setErr] = useState("");
  let [responce,setResponce] =  useState("");
  let [eandp,setEandp] = useState("");
  let [datas,setData] = useState();
  
  let navigate = useNavigate();  
  const { login } = useAuth(); 
  
  useEffect(() => {
  if (responce === "success") {
    login();
  navigate('/list')
  
  }
});


  let printcredientials = (details) =>{
    console.log(details);
    setEandp(details);
    axios.post("https://contactme-backend-1c0d26bf8354.herokuapp.com/checkadmin",details)
    .then(Response => {
      console.log(Response);
      setResponce(Response.data);
    })
    .catch(err => {
      if(err.response){
        setErr(err.message);
      }
      else if(err.request){
        setErr(err.message);
      }
      else{
        setErr(err.message);
      }
    })
    console.log(err);
    reset();
  }
  return (
    <div className='lcontainer'>
    <div className='badcredientials'>
    {responce && responce !== "success" && <h2 className='text-danger'>WRONG CREDIENTIALS</h2> }
    </div>
      <div className='lmain_div'>
      <div className='lfirst_div '>
        <img src={image} alt='loginimage' height={'400px'}></img>
      </div>
      <div className='lsecond_div col-4'>
        <div className='col-12'>
      <form onSubmit={handleSubmit(printcredientials)}>
  <div className="mb-3">
    <label className="form-label">Username<span className='text-danger'> *</span></label>
    <input type="text" className="form-control" {...register("username",{required:true})}/>
    {errors.username?.type ==='required' && <p className='text-danger'>*this is Required.</p>}
  </div>
  <div className="mb-3">
    <label className="form-label">Password<span className='text-danger'> *</span></label>
    <input type="password" className="form-control" {...register("password",{required:true})}/>
    {errors.password?.type === "required" && <p className='text-danger'>*this is Required.</p>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </div>
    </div>
  )
}

export default Admin