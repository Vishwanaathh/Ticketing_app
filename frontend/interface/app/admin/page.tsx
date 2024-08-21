"use client";
import {useState,useEffect} from "react";

import Footer from '../footer';
export default function Admin(){
    const [data,setData]=useState([]);
    const [display,setDisplay]=useState(false);
    const [admin,setAdmin]=useState("");


  const deletee=async()=>{
    const response=await fetch(`http://localhost:3002/deleteComplaints/${admin}`,{
        method:"DELETE"
        
        
    })
    window.location.reload();
  }
  const submitted=async()=>{
    
        
    const response = await fetch(`http://localhost:3002/complaints/${admin}`);
    const result = await response.json();
    setData(result);
        

    setDisplay(!display);

  }
    return(<div>
            <div className=' flex h-28 bg-slate-100 font-light'>
                <h1 className='text-3xl'>Ticket Portal</h1>
              <ul className='flex ml-96'><li><a href='http://localhost:3001/client'>Client</a></li><li className='ml-10'><a href='http://localhost:3001/admin'>Admin</a></li></ul>
            </div>
            <input type="text" placeholder="Enter name of Domain" className='border border-black' value={admin} onChange={(e)=>setAdmin(e.target.value)}/><br></br>
            <button className='bg-yellow-400 border border-black w-52' onClick={submitted}>Display Complaints</button>
           {display&&<div>
            <ul>
                    {data.map((item, index) => (
                        <li key={index} className='border border-gray-300 rounded-sm shadow-lg  mt-5 w-full ml-96'>
                            <p><strong>Admin:</strong> {item.Admin}</p>
                            <p><strong>Complaint:</strong> {item.Complaint}</p>
                            <p><strong>Date:</strong> {item.Date}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={deletee} className=' border border-black rounded-sm font-mono bg-yellow-400 w-52'>Delete all complaints</button>
                </div>}
    <Footer/></div>)
}