import React, { useEffect, useState } from 'react';
import './MyBookingDetail.css'

const MyBookingDetail = ({booking}) => {
    const {name, img, _id} = booking || '';
    const [bookings,setbookings]=useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/myBookings')
        .then(res=> res.json())
        .then(data => setbookings(data))
    },[])

    const handleDelete =(id) =>{
        console.log('hell');
        const url = `http://localhost:5000/myBookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            if(data.deletedCount > 0){
                const remainingServices = bookings.filter(service => service._id !== id);
            setbookings(remainingServices)
                alert('Deleted')
            }
        })
    }
    return (
        <div className="d-flex MyBookingDetail">
            <img className="booked-img" src={img} alt="" />
            <div className="ms-3">
            <h3>{name} </h3>
            <button className="btn cencel-btn" onClick={ () =>  handleDelete(_id) }>Cencel</button>
            </div>
        </div>
    ); 
};

export default MyBookingDetail;