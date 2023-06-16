import React, { useState } from "react";

function FoodOrderForm() {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [order, setOrder] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert("Order Successful!\n Your Order was "+order+".\nPlease shwo your confirmation number for pickup."); 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} id='name'onChange={(e)=>setName(e.target.value)}>
                   
                </input> 
                <label htmlFor="phone">Phone</label>

                <input value={phone} id='phone' onChange={(e)=>setPhone(e.target.value)}>
                </input>

                 <label htmlFor="address">Address</label>
                <input value={address} id='address' onChange={(e)=>setAddress(e.target.value)}>
                   
                </input>

                 <label htmlFor="order">Order</label>
                <input value={order} id='order' onChange={(e)=>setOrder(e.target.value)}>
                </input>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    )
}

export default FoodOrderForm;