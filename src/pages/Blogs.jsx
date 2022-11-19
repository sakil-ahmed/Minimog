import React, { useState, useEffect } from "react";
import { StyledBlogs } from "../Styles/StyledBlog";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(6);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());

      setBlogs(response);
    };
    fetchingData();
  }, []);

  return (
    <StyledBlogs>
      <div className="container">
        <div className="blog-card-container">
          {blogs.slice(0, blog).map((blog) => {
            const { id, title, body } = blog;
            return (
              <div key={id} className="blog-card">
                <h1 className="">{title}</h1>
                <div className="">{body}</div>
              </div>
            );
          })}

          <button className="btn" onClick={() => setBlog((prev) => prev + 3)}>
            Load More
          </button>
        </div>
      </div>
    </StyledBlogs>
  );
};
