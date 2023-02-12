import React from "react";
import { Helmet } from "react-helmet";
import { StyledBlogs } from "../Styles/StyledBlog";

export const Blogs = () => {
  return (
    <StyledBlogs>
      <Helmet>
        <title>Minimog | Blogs</title>
      </Helmet>
      <div className="container">
        <div className="blog-card-container">Blog</div>
      </div>
    </StyledBlogs>
  );
};
