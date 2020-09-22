import React from 'react'
import './index.css'
import Header from '../../components/Header'

import imgHulk from '../../assets/images/hulk.png'
function Details(){
    return (
        <>
            <Header />
            <section id="container-details-character">
                <div className="image-character">
                    <img src={imgHulk} />    
                </div>
                <div className="details">
                    <div calssName="title">
                        <h1>hulk</h1>
                    </div>
                    <div className="description">
                        <p>
                            O Hulk, por vezes referido como O Incrível Hulk (The Incredible Hulk, no original em inglês) 
                            é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel 
                            Comics, editora pela qual as histórias do personagem são publicados desde sua criação, 
                            nos anos 1960. Concebido pelo roteirista Stan Lee (1922-2018) e pelo desenhista Jack Kirby 
                            (1917-1994), teve sua primeira aparição junto ao público original dos Estados Unidos na revista 
                            The Incredible Hulk n°1, lançada no mercado americano pela Marvel Comics em maio de 1962, um 
                            título solo do personagem, garantindo-lhe o acesso ao que mais tarde seria popularmente conhecido 
                            como Universo Marvel dos quadrinhos/banda desenhada. A partir de então, o Hulk tem aparecido, 
                            protagonizando ou não, diversas histórias da editora, se tornando um dos mais visualmente 
                            reconhecíveis da mesma, tendo o universo entorno do personagem se expandido continuadamente ao 
                            longo das últimas décadas.
                            </p>
                    </div>    
                </div>
            </section>
        </>
    )
}
export default Details