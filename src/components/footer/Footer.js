import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id="contact-me">
            <a href='https://github.com/1alyciaoliveira' className='icon'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/alycia-oliveira/' className='icon'>
                <BsLinkedin />
            </a>
            <a href='https://stackoverflow.com/users/20818559/aly-oliveira' className='icon'>
                <BsStackOverflow />
            </a>
        </div>
    )
}

export default Footer

