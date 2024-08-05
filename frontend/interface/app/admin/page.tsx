"use client";
import {useState,useEffect} from "react";
export default function Admin(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            const response = await fetch('http://localhost:3002/Allcomplaints');
            const result = await response.json();
            setData(result);
        };
        fetchdata();
    },[]);

  const deletee=async()=>{
    const response=await fetch('http://localhost:3002/deleteComplaints',{
        method:"DELETE"
        
    })
  }
    return(<div>
         <div className='h-28 bg-slate-100 font-light'>
                <h1 className='text-3xl'>Ticket Portal</h1>
                <h5>Admin</h5>
            </div>
            <ul>
                    {data.map((item, index) => (
                        <li key={index} className='border border-black mt-1'>
                            <p><strong>Admin:</strong> {item.Admin}</p>
                            <p><strong>Complaint:</strong> {item.Complaint}</p>
                            <p><strong>Date:</strong> {item.Date}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={deletee} className='bg-slate-200 border border-black'>Delete all complaints</button>

    </div>)
}