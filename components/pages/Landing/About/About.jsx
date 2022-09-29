import React from 'react'
import Title from '../../../common/Title/Title'
import { Wrapper } from './About.styles'

function About() {
    return (
        <Wrapper>
            <img src="/static/assets/w3bLogoLight.png" alt="Logo Light" />
            <div>
                <Title text={'W3B Scholar'} />
                <p>W3B Scholar merupakan website belajar bagi para tech enthusiast dan developer Indonesia untuk mempelajari lebih dalam mengenai Web3, agar para developer Indonesia dapat bersaing dengan negara lain dan maju dalam bidang web development, khusunya Web3!</p>
            </div>
        </Wrapper>
    )
}

export default About