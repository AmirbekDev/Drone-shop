import React, { useState } from 'react'
import images from "../../helpers/images";
import "../../assets/style/main.css";
import {category} from "../../helpers/data" 
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState()
    const toggle = () => {
        setActive(!active)
        document.querySelector(".navbar__category").classList.toggle("active")
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__logo">
                        <Link to="/"><img src={images.navbarLogo} alt="navbarLogo"/></Link>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <a href="tel:+78612179118" className="navbar__phone">+7861 21791 18</a>
                    </div>
                    <div className="navbar__assets">
                        <div className="navbar__icons">
                            <Link to={{pathname: "https://vk.com/"}} target="_blank" className="fa fa-vk border-green" aria-hidden="true"></Link>
                            <Link to={{pathname: "https://instagram.com/amiryusupov.070"}} target="_blank" className="fa fa-instagram border-green" aria-hidden="true"></Link>
                            <Link to={{pathname: "https://t.me/amir_coder2009"}} target="_blank" className="fa fa-telegram border-green" aria-hidden="true"></Link>
                            <span className="fa fa-shopping-basket border-white" aria-hidden="true"></span>
                            <span onClick={toggle} className={active ? "fa fa-bars border-white navbar__bars active" : "fa fa-bars border-white navbar__bars"} aria-hidden="true"></span>
                        </div>
                        <div className="navbar__category">
                            {
                                category.map((item) => {
                                    return (
                                        <div className="navbar__category-row" key={item.id}>
                                            <Link to={item.path}><i className={item.icon} aria-hidden="true"></i></Link>
                                            <Link to={item.path} className="navbar__category-text">{item.text}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}