import React, { useState, useEffect } from 'react'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import apiMarvel from '../../config/apiMarvel'
import api from '../../services/api'
import Midia from '../../components/Midia'
const Details = (props) => {
    const id = props.match.params.id
    const [character, setCharacter] = useState({
        name: '', thumbnail: '', description: ''
    })

    const [comics, setComics] = useState([])
    const [events, setEvents] = useState([])
    const [series, setSeries] = useState([])

    async function handleFindCharacterById() {
        const { ts, apikey, hash } = apiMarvel
        const response = await api.get(`characters/${id}`, {
            params: {
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
    }

    async function handleListComics() {
        const { ts, apikey, hash } = apiMarvel
        const response = await api.get(`characters/${id}/comics`, {
            params: {
                ts,
                apikey,
                hash,
            }
        })
        setComics(response.data.data.results)
    }

    async function handleListEvents() {
        const { ts, apikey, hash } = apiMarvel
        const response = await api.get(`characters/${id}/events`, {
            params: {
                ts,
                apikey,
                hash,
            }
        })
        setEvents(response.data.data.results)
    }
    async function handleListSeries() {
        const { ts, apikey, hash } = apiMarvel
        const response = await api.get(`characters/${id}/series`, {
            params: {
                ts,
                apikey,
                hash,
            }
        })
        setSeries(response.data.data.results)
    }
    useEffect(() => {
        handleFindCharacterById()
        handleListComics()
        handleListEvents()
        handleListSeries()
    }, [])

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
                    {comics.length <= 0 ? <h1>No comics</h1> : comics.map((comic, index) => {
                        return (
                            <Midia key={index} midia={comic} />
                        )
                    })}
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Events</h1>
                </div>
                <div className="box-events">
                    {events.length <= 0 ? <h1>No Events</h1> : events.map((event, index) => {
                        return (
                            <Midia key={index} midia={event} />
                        )
                    })}
                </div>
            </section>
            <section id="container-events">
                <div className="title">
                    <h1>Séries</h1>
                </div>
                <div className="box-events">
                    {series.length <= 0 ? <h1>No Series</h1> : series.map((serie, index) => {
                        return (
                            <Midia key={index} midia={serie} />
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Details