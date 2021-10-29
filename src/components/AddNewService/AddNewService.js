import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://polar-lowlands-00951.herokuapp.com/services' , data)
    .then(res=> {
        console.log(res);
        if(res.data.insertedId){
            alert('Added successfully');
            reset()
        }
    })
    

  };
    return (
        <div className="add-service">
            <h1>Added Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description" />

      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;