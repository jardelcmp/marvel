import React,{useState, useEffect} from 'react'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import apiMarvel from '../../config/apiMarvel'
import imgHulk from '../../assets/images/hulk.png'
import api from '../../services/api'
const Details = (props) => {
    const id = props.match.params.id
    const [character, setCharacter] = useState({
        name: '',thumbnail:'',description:''
    })
    async function handleFindCharacterById(id){
        const {ts, apikey, hash} = apiMarvel
        const response = await api.get(`characters/${id}`,{
            params:{
                ts,
                apikey,
                hash
            }
        })
        setCharacter({
            name: response.data.data.results[0].name,
            thumbnail: `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`,
            description: response.data.data.results[0].description,
        })
        console.log(character)
    }
    const data = [1, 2, 3, 4, 5,6]
    useEffect(() => {
        handleFindCharacterById(id)
    },[])
    
    return (
        <>
            <Header />
            <section id="container-details-character">
                <div className="image-character">
                    <img src={character.thumbnail} />
                </div>
                <div className="details">
                    <div className="title">
                        <h1>{character.name}</h1>
                    </div>
                    <div className="description">
                        <p>{character.description ? character.description : 'No description'}</p>
                    </div>
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Comics</h1>
                </div>
                <div className="box-events">
                    {data.map(item => {
                        return (
                            <div className="event" key={item}>
                                <img src={imgHulk} />
                                <Link to="/details/1" className="event-link">Hulk</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Events</h1>
                </div>
                <div className="box-events">
                    {data.map(item => {
                        return (
                            <div className="event" key={item}>
                                <img src={imgHulk} />
                                <Link to="/details/1" className="event-link">Hulk</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Séries</h1>
                </div>
                <div className="box-events">
                    {data.map(item => {
                        return (
                            <div className="event" key={item}>
                                <img src={imgHulk} />
                                <Link to="/details/1" className="event-link">Hulk</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Stories</h1>
                </div>
                <div className="box-events">
                    {data.map(item => {
                        return (
                            <div className="event" key={item}>
                                <img src={imgHulk} />
                                <Link to="/details/1" className="event-link">Hulk</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
           <Footer />
        </>
    )
}
export default Details