import React from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import './index.css'
const Home = ({children}) => {
    return (
        <header id="container-header">
            <div className="content-header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>            
                </div>
                {children}
            </div>
        </header>
    )
}

export default Home;