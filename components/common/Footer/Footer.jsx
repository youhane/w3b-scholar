import { useRouter } from 'next/router'
import React from 'react'
import { Wrapper } from './Footer.styles'

function Footer() {
  const router = useRouter()

  if (router.pathname !== '/_error' && router.pathname !== '/login' && router.pathname !== '/register') {
    return (
      <Wrapper>
        <img src="/static/assets/w3bLogoDark.png" alt="W3B Logo" />
        <p>W3B Scholar - BNCC Nice Try</p>
      </Wrapper>
    )
  }
}

export default Footer