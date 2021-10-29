import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

const AllBooking = () => {
    const [bookings,setBookings] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/myBookings')
        .then(res=> res.json())
        .then(data=> setBookings(data))
        .catch(err => {
            console.log(err)
        })
    } , []);
    
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
    };

    const handleUpdate =id => {
        
        const url=`http://localhost:5000/myBookings/${id}`;
        const updatedItem =bookings.find(booking => booking._id ==id);
        console.log(updatedItem)
        updatedItem.status='Approved'
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                alert('Updated successfully');
                setBookings(bookings)
            }
        })
    }
    return (
        <div className="container">

           

           {
               !bookings.length? <div>
                   <h1>Nothing Found</h1>
               </div> :
                <Row xs={1} md={2} className="g-5 my-4">
                {
                    bookings.map(booking => {
                        return (
                            <div className="d-flex MyBookingDetail" key={booking._id}>
            <img className="booked-img" src={booking.img} alt="" />
            <div className="ms-3">
            <h3>{booking.item} </h3>
            <button className="btn approve-btn" onClick={ () =>  handleUpdate(booking._id) }>Approve</button>
            <button className="btn cencel-btn" onClick={ () =>  handleDelete(booking._id) }>Cencel</button>
            <p>Ordered By</p>
            <h6>{booking.name} </h6>
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

export default AllBooking;