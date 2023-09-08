import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const Response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(Response);
      setPost(Response.data);
    }
    fetchApi();
  }, []);
  return (
    <>
      This is the blog page
      <p>
        {post.map((p) => (
          <p key={p.id}>
           <p> <h5>Heading{p.id}</h5> <span>{p.title}</span> </p>
            <p><h6>Description{p.id}</h6><span>{p.body}</span></p></p>
        ))}
      </p>
    </>
  );
}

export default Blog;
