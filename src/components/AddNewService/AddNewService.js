import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    

    axios.post('https://mysterious-hamlet-49510.herokuapp.com/services' , data)
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
            <h1 className="text-center">Add a new Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("des")} placeholder="description" required />

      <input type="number" {...register("price")} placeholder="price" required />
      <input {...register("img")} placeholder="Image url" required />
      <input className="btn-info" type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;