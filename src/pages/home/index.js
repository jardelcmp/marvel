import React, {useState, useEffect, memo} from 'react'

import './index.css'
import '../../components/Paginator/index.css'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Paginator from '../../components/Paginator'
import ItemCharacters from '../../components/ItemCharacters'
import apiMarvel from '../../config/apiMarvel'
import api from '../../services/api'
function Home (){
    const [listCharacters, setListCharacters] = useState([]);
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(16)
    const [offset, setOffset] = useState(0)
    
    useEffect(() => {
      async function handleListCharacters(){
        const {ts, apikey, hash} = apiMarvel     
        const response = await api.get('characters',{
          params:{
            ts,
            apikey,
            hash,
            limit,
            offset: (currentPage * limit) - limit
          }
        })
        setTotalPages(Math.ceil(response.data.data.total / limit))
        
        const limitPagination = 5;
        const limitLateral = Math.ceil(limitPagination / 2);
        const start = currentPage - limitLateral 
        //start = start <= 0 ? 1 : start
        const end = currentPage + limitLateral //6
        const pagesNumber = []
        for(let i = start;i < end;i++) {
          pagesNumber.push(i)
        }  
        console.log(pagesNumber)
        setPages(pagesNumber)
        setListCharacters(response.data.data.results)
    }
      handleListCharacters()
    },[currentPage])

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
           
          {listCharacters.map((character, index) => {
            return(
              <ItemCharacters key={index} character={character}/>
            )
          })}         
           
         </div>
      </section>
      {totalPages > 0 &&(
            <section id="container-paginator">
              <div class="content-paginator">
                {currentPage > 1 &&(
                  <>
                    {
                      currentPage > 2 &&(
                        <button type="button"><AiOutlineDoubleLeft /></button>
                      )
                    }
                    <button type="button"><AiOutlineLeft /></button>
                  </>
                )}

                {
                  pages.map(item => {
                    return (
                      <>
                        {
                          item > 0 && item <= totalPages && (
                            <button key={item} type="button" className={currentPage === item ? "page_active" : ""} onClick={()=>{setCurrentPage(item)}}>{item}</button>
                          )
                        }
                      </>
                    )
                  })
                }

                {
                  currentPage < totalPages && (
                    <>
                      <button type="button" ><AiOutlineRight /></button>
                      {
                        totalPages > 3 && (
                          <button type="button" ><AiOutlineDoubleRight /></button>
                        )
                      }
                    </>
                  )
                }

                </div>
            </section>


          )}

          

      <Footer />
    </>
    )
}

export default Home;