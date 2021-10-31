import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';

const AllBooking = () => {
    const [bookings,setBookings] = useState([]);
    useEffect( () => {
        fetch('https://mysterious-hamlet-49510.herokuapp.com/myBookings')
        .then(res=> res.json())
        .then(data=> setBookings(data))
        .catch(err => {
            console.log(err)
        })
    } , []);
    
    const handleDelete =(id) =>{
        const procced = window.confirm('Are you sure, you want to delete?')
        if(procced){
            
        const url = `https://mysterious-hamlet-49510.herokuapp.com/myBookings/${id}`;
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
        
        const url=`https://mysterious-hamlet-49510.herokuapp.com/myBookings/${id}`;
        const updatedItem =bookings.find(booking => booking._id ==id);
        console.log(updatedItem)
        updatedItem.status='Approved'
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res=> res.json())
        .then(data => {
            const all= [...bookings]
                setBookings(all)
            if(data.modifiedCount >0){
                alert('Updated successfully');
                const all= [...bookings]
                setBookings(all)
            }
        })
    }
    return (
        <div className="container">

           

           {
               !bookings.length? <div>
                   <div className="d-flex justify-content-center mt-5">
            <Spinner className="m-5" animation="border" variant="danger" />
        </div>
               </div> :
                <Row xs={1} md={2} className="gy-5 my-4">
                {
                    bookings.map(booking => {
                        return (
                            <div className="d-flex MyBookingDetail" key={booking._id}>
            <img className="booked-img" src={booking.img} alt="" />
            <div className="ms-3">
            <h3>{booking.item} </h3>
            {
                booking.status === "pending" ?
                 <button className="btn approve-btn btn-info mb-2" onClick={ () =>  handleUpdate(booking._id) }>Approve</button>
                 : 
                 <h6>Approved</h6>
            }
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