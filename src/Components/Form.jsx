import {  useState } from "react";

export default function Form({onTask}){
    const [formData, setFormdata] = useState({
        name: "",
        phoneNumber: "",
        transiction: "",
        
    })
    const handleChange = (e) => {
        const {name, value}= e.target;
        setFormdata({...formData, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        alert("You are Successfully Booking your Item")
        onTask(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <lable>Nmae: </lable>
             <input onChange={handleChange} value={formData.name} type="text" placeholder="Enter your Name" name="name"/>
             <lable>Mobile: </lable>
             <input onChange={handleChange} value={formData.phoneNumber} type="number" placeholder="Enter your Mobile Number" name="mobile"/><br/>
             <lable>Transiction Time: </lable>
             <input onChange={handleChange} value={formData.transiction} type="time" placeholder="Enter your time"/>
             <input type="submit" value="Submit"/>
        </form>

    )
    
}