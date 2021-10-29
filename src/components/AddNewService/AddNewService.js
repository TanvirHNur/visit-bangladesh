import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/services' , data)
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
            <h1>Add a new Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("des")} placeholder="description" />

      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;