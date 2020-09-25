import React, { useState } from 'react'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import './index.css'
const  Paginator = (props) => {
    
    return (
        <section id="container-paginator">
            <div class="content-paginator">
            <button type="button"><AiOutlineDoubleLeft /></button>
            <button type="button"><AiOutlineLeft /></button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button"><AiOutlineRight /></button>
            <button type="button"><AiOutlineDoubleRight /></button>
            </div>
      </section>
    )
}
export default Paginator