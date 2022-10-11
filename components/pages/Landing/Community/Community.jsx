/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../../common/Button/Button'
import { Wrapper } from './Community.styles'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

function Community() {
  return (
    <Wrapper>
      <div>
        <a href={"https://discord.com/"} target="_blank" rel='noreferrer'>
          <p>Bergabunglah ke <b>komunitas</b> kami!</p>
          <Button text={'W3B Scholar'} icon={<FaDiscord />} />
        </a>
      </div>
      <img src="/static/assets/footerImage.png" alt="Footer Image" />
    </Wrapper>
  )
}

export default Community