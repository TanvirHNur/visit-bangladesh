import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {id} =useParams();
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
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
        // const savedCart =getStoredCart();
        // data.order=savedCart;
        data.status= 'pending';
        data.id = _id;
        data.item = name;
        data.img = img;
        console.log(data)
        fetch('http://localhost:5000/myBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
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
                <h1 className="review-text">Review Package</h1>
                <h2>{name} <span className="fs-5">6 Nights / 7 Days</span></h2>
            </div>
              <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                  <h4>Traveller Information</h4>
                 {/* register your input into the hook by invoking the "register" function */}
                 <input  defaultValue={user.displayName} {...register("name")} />

                 {/* include validation with required or other standard HTML validation rules */}
                 <input defaultValue={user.email} {...register("email", { required: true })} />
                 {/* errors will return when field validation fails  */}
                 {errors.email && <span className="error">This field is required</span>}

                 <input placeholder="Addres"  {...register("address")} />
                 <input placeholder="City" {...register("city")} />
                 <input placeholder="Phone" {...register("phone")} />

                 <input type="submit" />
             </form>
        </div>
    );
};

export default Booking;