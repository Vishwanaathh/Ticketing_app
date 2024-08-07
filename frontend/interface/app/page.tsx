"use client";
import Image from "next/image";

import {useState,useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const [data,setData]=useState([]);
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  

const handleSubmit=async()=>{
  const res = await fetch('http://localhost:3005/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: user, password: password }),
  });

  const data = await res.json();

  if (res.status === 200) {

    localStorage.setItem('token', data.token);
      window.location.href = '/client';
  } else {
      window.alert("No such User/Password");
  }
};




  return (
    <main>
          <div className='text-center'><h1 className="text-5xl text-center bg-slate-200 h-40 ">Ticket Portal</h1>
         <h3 className="text-2xl">Sign in</h3></div>
      <div className='flex ml-80'><div className="text-center border border-black w-64 h-64 mt-2">
          <h3 className="text-2xl">Client</h3>
          <input type="text" placeholder="enter username" value={user} onChange={(e)=>setUser(e.target.value)} className="border border-black"/><br></br>
          <input type="text" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}className="border border-black"/><br></br>
          <button type="submit" className="bg-slate-400 w-52 text-white border border-black" onClick={handleSubmit}>SignIn</button></div>
          <div  className="text-center border border-black w-64 h-64 ml-24 mt-2">
          <h3 className="text-2xl">Administrator</h3>
          
          <input type="text" placeholder="enter username" className="border border-black"/><br></br>
          <input type="text" placeholder="enter password" className="border border-black"/><br></br>
          <button type="submit" className="bg-slate-400 w-52 text-white border border-black">SignIn</button></div>
      </div>
          
    </main>
  );
}
