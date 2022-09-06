import React from 'react'
import Button from '../../../common/Button/Button'
import { Left, Right, Wrapper } from './Hero.styles'

function Hero() {
    return (
        <Wrapper>
            <Left>
                <div>
                    <h1>Platform <br /> <span>Belajar Web 3.0</span> <br /> untuk <span>Indonesia</span> 🇮🇩</h1>
                    <Button text={'Pelajari Lebih Lanjut'} onClick={() => console.log('clicked')} />
                </div>
            </Left>
            <Right>
                <img src="/static/assets/heroImage.png" alt="Hero" />
            </Right>
        </Wrapper>
    )
}

export default Hero