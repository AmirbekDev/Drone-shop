import React from 'react'
import Navbar from './Navbar'
import {edge} from '../../helpers/data'
import images from "../../helpers/images"

export default function Header() {
    return ( 
    <div className="header" >
        <Navbar/>
        <div className="container" >
            <div className="header-row" >
                <div className="header-text">
                    <span className="header-text-title">
                        AgroScout - беспилотные технологии для сельского хозяйства и промышлености
                    </span>
                    <img src={images.drone__icon} alt="drone__icon" />
                    <div className="header-text-rows">
                        {
                            edge.map((item) => {
                                return (
                                    <div className="header-text-items" key={item.id}>
                                        <span className="header-text-items-num">{item.text}</span>
                                        <span className="header-text-items-text">{item.content}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="header-img">
                    <img src={images.bgBackground} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}