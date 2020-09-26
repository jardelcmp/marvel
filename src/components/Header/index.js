import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import './index.css'
const Home = ({children}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
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