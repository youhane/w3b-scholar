import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../../common/Button/Button'
import Title from '../../../common/Title/Title'
import { Bottom, Grid, Top, Wrapper } from './Articles.styles'

function Articles() {
    const router = useRouter()

    return (
        <Wrapper>
            <Top>
                <Title text={'Artikel'} />
                <p>Baca juga artikel-artikel pilihan berikut
                    yang akan menambah wawasanmu tentang Web3! </p>
            </Top>
            <img src="/static/assets/articleSectionImage.png" alt="Article Image" />
            <Grid></Grid>
            <Bottom>
                <Button text={'Lihat Lainnya'} onClick={() => router.push('/articles')} />
            </Bottom>
        </Wrapper>
    )
}

export default Articles