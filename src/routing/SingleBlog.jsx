import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function SingleBlog() {
  const[showData,setShowData] = useState({});
  useEffect(( )=>{
     async function fetchApi(){
    const output= await axios.get("https://jsonplaceholder.typicode.com/posts/5")
    setShowData(output.data)
    console.log(output);
  }
  fetchApi();
},

 [] );
  return (
    <div>This is single blog
        <p><h5>Title{showData.id}</h5>{showData.title}</p>
        <p><h5>Description{showData.id}</h5>{showData.body}</p>
    </div>
  )
}

export default SingleBlog