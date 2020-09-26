import React from 'react'
import {Link} from 'react-router-dom'
import imgHulk from '../../assets/images/hulk.png'
import './index.css'

const ItemCharacters = ({character}) => {
 return (
    <Link to={`/details/${character.id}`} className="character-link">
        <div className="character">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            <p>{character.name}</p>
        </div>
    </Link>
 )
}

export default ItemCharacters