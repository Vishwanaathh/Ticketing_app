"use client";
import { useState, useEffect } from "react";

export default function Client() {
    const [admin, setAdmin] = useState("");
    const [complaint, setComplaint] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
    

        const fetchdata = async () => {
            const response = await fetch('http://localhost:3002/Allcomplaints');
            const result = await response.json();
            setData(result);
        };
        fetchdata();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newcomp={Admin:admin,Complaint:complaint,Date:date};
        const response=await fetch('http://localhost:3003/raiseTicket',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newcomp),
        })
        
    }

    return (
        <div>
            <div className='h-28 bg-slate-100 font-light'>
                <h1 className='text-3xl'>Ticket Portal</h1>
                <h5>client</h5>
            </div>
            <div className='flex flex-row ml-40 mt-10'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className='border border-black w-72 text-center'
                        type="text"
                        placeholder="Enter Admin Name"
                        onChange={(e) => setAdmin(e.target.value)}
                    /><br />
                    <textarea
                    className='border border-black w-72 text-center'
            
                        placeholder="Enter Complaint"
                        onChange={(e) => setComplaint(e.target.value)}
                    /><br />
                    <input
                        className='border border-black w-72 text-center'
                        type="text"
                        placeholder="Enter Date"
                        onChange={(e) => setDate(e.target.value)}
                    /><br />
                    <button type="submit" className='w-72 bg-slate-400 text-center border border-black text-slate-200'>Raise Ticket</button><br />
                </form>
            </div>
            <div className='ml-96'>
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className='border border-black mt-1'>
                            <p><strong>Admin:</strong> {item.Admin}</p>
                            <p><strong>Complaint:</strong> {item.Complaint}</p>
                            <p><strong>Date:</strong> {item.Date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div></div>
    );
}
