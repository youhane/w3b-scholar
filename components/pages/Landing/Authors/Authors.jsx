import React from 'react'
import Author from '../../../common/Author/Author'
import { Grid, Wrapper } from './Authors.styles'

function Authors({authors}) {
    return (
        <Wrapper>
            <p className='center'>Tentunya ditulis oleh <b>para ahli yang berpengalaman</b> di bidangnya</p>
            <Grid>
                {authors?.slice(0, 3).map((author, index) => (
                    <Author key={index} {...author} />
                ))}
                <img className='filler' src="/static/assets/authorsImage.png" alt="Authors Image" />
                {authors?.slice(4, 6).map((author, index) => (
                    <Author key={index} {...author} />
                ))}
            </Grid>
            <p className='more'>...dan masih banyak lagi!</p>
            <img className='bottom' src="/static/assets/authorsImage.png" alt="Authors Image" />
        </Wrapper>
    )
}

export default Authors