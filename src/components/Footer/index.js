import React from 'react'

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

import './index.css'
function Footer() {
    return (
        <section id="footer">
        <a href="https://github.com/jardelcmp/marvel" target="_blank"><AiFillGithub size={24}/></a>
        <a href="https://www.linkedin.com/in/jardel-costa-m-paula/" target="_blank"><AiFillLinkedin size={24}/></a>
    </section>
    )
}

export default Footer