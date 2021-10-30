import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Booking.css';
import axios from 'axios';

const Booking = () => {
    const {id} =useParams();
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('https://mysterious-hamlet-49510.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
        .catch(err => {
            console.log(err)
        })
    } , [id])
    const BookedService = services.find(service => service._id === id);
    const { _id,name, img}= BookedService || '';

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    // console.log(user.displayName)
    const onSubmit = data => {
        data.status= 'pending';
        data.id = _id;
        data.item = name;
        data.img = img;
        console.log(data)
        axios.post('https://mysterious-hamlet-49510.herokuapp.com/myBookings', data)
        .then(res=>{
            console.log(res)
            if(res.insertedId){
                alert('Order placed successfully');
                reset();
            }
        })
        alert('Order placed successfully');
                reset();

    };
    return ( 
        <div>
            <div className="booking-info">
                <h1 className="review-text ps-5">Review Package</h1>
                <h2 className="ps-5">{name} <span className="fs-6">6 Nights / 7 Days</span></h2>
            </div>
             <div className="d-flex justify-content-center">
             <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                  <h4>Traveller Information</h4>
                 {/* register your input into the hook by invoking the "register" function */}
                 <input  defaultValue={user.displayName} {...register("name")} />

                 {/* include validation with required or other standard HTML validation rules */}
                 <input defaultValue={user.email} {...register("email", { required: true })} />
                 {/* errors will return when field validation fails  */}
                 {errors.email && <span className="error">This field is required</span>}
                 <input placeholder="Phone" {...register("phone", { required: true })} />
                 {errors.phone && <span className="error">This field is required</span>}
                 <input placeholder="Addres"  {...register("address")} />
                 <input placeholder="City" {...register("city")} />
                

                 <input type="submit" />
             </form>
             </div>
        </div>
    );
};

export default Booking;