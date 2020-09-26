import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
const Midia = ({midia}) => {
    return (
        <a href={midia.urls[0].url} title={midia.urls[0].detail} target="_blank" className="event">        
            <img src={`${midia.thumbnail.path}.${midia.thumbnail.extension}`} />
            <h1 className="title">{midia.title}</h1>        
        </a>
    )
}

export default Midia