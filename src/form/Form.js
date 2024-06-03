import React from 'react'
import './Form.css'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import contactus from '../images/contact-us-image.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Form() {
  let {register,handleSubmit,formState :{errors},reset} = useForm(); 
  let [err,setErr] = useState("");
  let navigate = useNavigate();
  const [characterCount, setCharacterCount] = useState(0);
  const handleCharacterCount = (event) => {
    setCharacterCount(event.target.value.length);
  };
  let printdata = (data) =>{
    console.log(data);

    axios.post("https://contactme-backend-1c0d26bf8354.herokuapp.com/savecontactme",data)
    .then(Response => {
      console.log(Response);
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
    navigate('/home');
    reset();
  }
  return (
    <div className='container'>
      <div className='main_div'>
      <div className='first_div'>
        <img src={contactus} alt="contact us" width={'400px'}></img>
      </div>
      <div className='second_div col-6 '>
        <div>
          <h3 className='mb-3'>Contact me</h3>
        </div>
        <div>
      <form onSubmit={handleSubmit(printdata)}className="row g-3">
        {/**full name */}
  <div className="col-md-6">
    <label className="form-label">Full Name<span className='text-danger'> *</span></label>
    <input type="text" className="form-control"{...register("fullname",{required:true,minLength:'2'})}/>
    {errors.fullname?.type === 'required' && <p className='text-danger'>*this is required.</p>}
    {errors.fullname?.type === 'minLength' && <p className='text-danger'>*the minimum length is 2.</p>}
  </div>
  {/**this is email */}
  <div className="col-md-6">
    <label className="form-label">Email<span className='text-danger'> *</span></label>
    <input type="text" className="form-control" {...register("email",{required:true,pattern:"/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}$/i"})}/>
    {errors.email?.type === 'required' && <p className='text-danger'>*this is required.</p>}
    {errors.email?.type === 'pattern' && <p className='text-danger'>*not a valid email.</p>}
  </div>
  {/** this is phone number */}
  <div className="col-md-6">
    <label className="form-label">Phone Number<span className='text-danger'> *</span></label>
    <input type="text" className="form-control" {...register("phonenumber",{required:true,minLength:"10",maxLength:"12"})}/>
    {errors.phonenumber?.type === 'required' && <p className='text-danger'>*this is required.</p>}
    {errors.phonenumber?.type === 'minlength' && <p className='text-danger'>*minimum length is 10.</p>}
    {errors.phonenumber?.type === 'maxLength' && <p className='text-danger'>*maximum length is 12.</p>}
  </div>
  {/**preferred contact method*/}
  <div className="col-md-6">
    <div className='mb-2'>
    <label className="form-label">Preferred Contact Method<span className='text-danger'> *</span></label>
    </div>
    <div>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Email" {...register("contactmethod",{required:true})}/>
  <label className="form-check-label">Email</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Phone Number" {...register("contactmethod",{required:true})}/>
  <label className="form-check-label">Phone Number</label>
</div>
{errors.ContactMethod?.type === "required" && <p className='text-danger'>*this is required.</p>}
</div>
  </div>
  {/**subject */}
  <div className="col-md-6">
    <label className="form-label">Subject<span className='text-danger'> *</span></label>
    <input type="text" className="form-control"{...register("subject",{required:true,minLength:'2'})}/>
    {errors.subject?.type === 'required' && <p className='text-danger'>*this is required.</p>}
    {errors.subject?.type === 'minLength' && <p className='text-danger'>*the minimum length is 2.</p>}
  </div>
  {/**message */}
  <div>
      <div className='mb-2'>
        <label className="form-label">Message<span className='text-danger'> *</span></label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          {...register("message", { required: true, minLength: 10, maxLength: 254 })}
          onChange={handleCharacterCount} // Update count on change
        />
        <label htmlFor="floatingTextarea2">Message</label>
        <div className="character-count">
          {characterCount} characters (out of 254)
        </div>
      </div>
      {errors.message?.type === 'required' && <p className='text-danger'>*this is required.</p>}
      {errors.message?.type === 'minLength' && <p className='text-danger'>*the minimum length is 10.</p>}
      {errors.message?.type === 'maxLength' && <p className='text-danger'>*the maximum length is 254.</p>}
    </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
</div>
    </div>
  )
}

export default Form