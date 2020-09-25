import React from 'react'
import {Link} from 'react-router-dom'
import imgHulk from '../../assets/images/hulk.png'
import './index.css'

const ItemCharacters = ({character}) => {
 return (
    <div className="character">
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
        <Link to={`/details/${character.id}`} className="character-link">{character.name}</Link>
    </div>
 )
}

export default ItemCharacters