import React from 'react'
import Author from '../../../common/Author/Author'
import { Grid, Wrapper } from './Authors.styles'

function Authors() {
    return (
        <Wrapper>
            <p className='center'>Tentunya ditulis oleh <b>para ahli yang berpengalaman</b> di bidangnya</p>
            <Grid>
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <img className='filler' src="/static/assets/authorsImage.png" alt="Authors Image" />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
                <Author name={'Deric Cheng'} title={'Dev Education at Web3U'} image={'/static/profile/dericCheng.png'} />
            </Grid>
            <p className='more'>...dan masih banyak lagi!</p>
            <img className='bottom' src="/static/assets/authorsImage.png" alt="Authors Image" />
        </Wrapper>
    )
}

export default Authors