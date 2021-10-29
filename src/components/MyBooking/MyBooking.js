import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBookingDetail from '../MyBookingDetail/MyBookingDetail';

const MyBooking = () => {
    const {user} = useAuth()
    const [bookings,setBookings] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/myBookings')
        .then(res=> res.json())
        .then(data=> setBookings(data))
        .catch(err => {
            console.log(err)
        })
    } , []);
    const myBookings = bookings.filter(booking => booking.email == user.email);
    console.log(myBookings);
    
    // const {name, img, _id} = booking || '';
    const handleDelete =(id) =>{
        const procced = window.confirm('Are you sure, you want to delete?')
        if(procced){
            
        const url = `http://localhost:5000/myBookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            if(data.deletedCount > 0){
                const remainingServices = bookings.filter(service => service._id !== id);
            setBookings(remainingServices)
                alert('Deleted')
            }
        })
        }
    }
    return (
        <div className="container">

           

           {
               !myBookings.length? <div>
                   <h1>Nothing Found</h1>
               </div> :
                <Row xs={1} md={2} className="g-5 my-4">
                {
                    myBookings.map(booking => {
                        return (
                            <div className="d-flex MyBookingDetail" key={booking._id}>
            <img className="booked-img img-fluid" src={booking.img} alt="" />
            <div className="ms-3">
            <h3>{booking.item} </h3>
            <h6>{booking.status} </h6>
            <button className="btn cencel-btn" onClick={ () =>  handleDelete(booking._id) }>Cencel</button>
            </div>
        </div>
                        )
                    })
                }
                 </Row>
           }
           
        </div>
    );
};

export default MyBooking;