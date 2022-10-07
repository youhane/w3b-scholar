import { useRouter } from "next/router"
import styled from "styled-components"
import Button from '../components/common/Button/Button'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
    margin-bottom: 0.2em;
    background: linear-gradient(91.62deg, #3c9fd7 0%, #009483 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 2.5rem;

        @media (max-width: 768px) {
        font-size: 1.75rem;
        }
    }

    p{
        margin: 1rem 0;
    }

    img{

        @media (max-width: 767px) {
            width: 100%;
        }
    }
`

function Error({ statusCode }) {
    const router = useRouter()

    return (
        <Wrapper>
            <img src={'/static/assets/404page.png'} alt='404 page' />
            <h1>Page Not Found</h1>
            <p>Upss... halaman ini tidak dapat ditemukan.</p>
            <Button text={'Kembali ke Home'} onClick={() => router.push('/')} />
        </Wrapper>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error