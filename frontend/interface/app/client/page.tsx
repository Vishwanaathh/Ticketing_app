"use client";
import { useState, useEffect } from "react";
import Footer from '../footer';
export default function Client() {
    const [admin, setAdmin] = useState("");
    const [complaint, setComplaint] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);
    const [display,setDisplay]=useState(false);


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
        window.location.reload();
        
    }
    const togglee=()=>{
        setDisplay(!display);
    }

    return (
        <div>
            <div className=' flex h-28 bg-slate-100 font-light'>
                <h1 className='text-3xl'>Ticket Portal</h1>
              <ul className='flex ml-96'><li><a href='http://localhost:3001/client'>Client</a></li><li className='ml-10'><a href='http://localhost:3001/admin'>Admin</a></li></ul>
            </div>
            <div className='flex flex-row ml-40 mt-10'>
            <div>
                <h4 className='text-2xl'>Enter your complaints here</h4>
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
                <button onClick={togglee} className='bg-yellow-400 font-mono w-40 rounded-sm border border-black'>List of complaints</button>
                <ul>
                    {display&&data.map((item, index) => (
                        <li key={index} className='border border-gray mt-5 shadow-lg rounded-md'>
                            <p><strong>Admin:</strong> {item.Admin}</p>
                            <p><strong>Complaint:</strong> {item.Complaint}</p>
                            <p><strong>Date:</strong> {item.Date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer/></div>
    );
}
