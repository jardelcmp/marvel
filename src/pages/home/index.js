import React from 'react'

import './index.css'


import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Paginator from '../../components/Paginator'
import ItemCharacters from '../../components/ItemCharacters'

function Home (){
    const data = [1,2,3,4,5,6,7,8]
    return (
        <>
        <Header>
          <div className="search">
                <input type="text" placeholder="Search"/>    
                <AiOutlineSearch size={24} className="icon_search"/>      
            </div>
        </Header>
      <section id="container-characters">
         <div className="title">
           <h1>Characters</h1>
         </div>
         <div className="content-characters">
           
          {data.map(item => {
            return(
              <ItemCharacters key={item}/>
            )
          })}         
           
         </div>
      </section>
      <Paginator />
      <Footer />
    </>
    )
}

export default Home;