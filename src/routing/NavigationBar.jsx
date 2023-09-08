import React from 'react'
import { Link } from 'react-router-dom'


const NavigationBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-page">About</Link>
                </li>
                <li>
                    <Link to="/blog-page">Blog</Link>
                </li>
                <li>
                    <Link to="/single-blog-page">SingleBlog</Link>
                </li>
                <li>
                    <Link to="/Contact-page">Contact</Link>
                </li>
                <li>
                    <Link to="/page-not-found">NotFound</Link>
                </li>
                <li>
                    <Link to="*">NotAvaliable</Link>
                </li>
                <li>
                    <Link to="/single-blog-dyn">SingleBlogDyn</Link>
                </li>
                <li>
                    <Link to="/services-page">Services</Link>
                </li>
            </ul>
        </nav>
    )

}
export default NavigationBar;