import React from 'react'
import {Link} from 'react-router-dom'
import imgHulk from '../../assets/images/hulk.png'
import './index.css'

const ItemCharacters = (props) => {
 return (
    <div className="character" key={props.key}>
        <img src={imgHulk} />
        <Link to="/details/1" className="character-link">Hulk</Link>
    </div>
 )
}

export default ItemCharacters