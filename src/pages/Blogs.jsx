import React from "react";
import {Helmet} from "react-helmet";
import {StyledBlogs} from "../Styles/StyledBlog";
import {Link} from "react-router-dom";
import arrowIcon from "../../public/Images/Icon/rightArrow.svg";
import AppLayout from "../Components/AppLayout/AppLayout";

export const Blogs = () => {
    return (
        <>
            <StyledBlogs>
                <Helmet>
                    <title>Minimog | Blogs</title>
                </Helmet>
                <div className="container">
                    <div className="collection_header">
                        <h1 className="collection_header_title">Blog</h1>
                        <div className="collection_header_links">
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <img
                                className="collection_header_links_icon"
                                src={arrowIcon}
                                alt=""
                            />
                            <span className="collection_header_links_text">Blog</span>
                        </div>
                    </div>
                </div>
            </StyledBlogs>
        </>
    );
};
