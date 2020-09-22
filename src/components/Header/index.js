import React from 'react'
import logo from '../../assets/images/logo.png'

import './index.css'
const Home = ({children}) => {
    return (
        <header id="container-header">
            <div className="content-header">
                <div className="logo">
                    <a href="#">
                        <img src={logo} />
                    </a>            
                </div>
                {children}
            </div>
        </header>
    )
}

export default Home;