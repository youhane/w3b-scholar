import React from 'react'
import Author from '../../../common/Author/Author'
import { Row, Wrapper } from './Authors.styles'

function Authors() {
    return (
        <Wrapper>
            <Row>
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
            </Row>
            <p>Tentunya ditulis oleh <b>para ahli yang berpengalaman</b> di bidangnya</p>
            <Row>
            <img className='filler' src="/static/assets/authorsImage.png" alt="Authors Image" />

                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
            </Row>
            <p className='more'>...dan masih banyak lagi!</p>
        </Wrapper>
    )
}

export default Authors