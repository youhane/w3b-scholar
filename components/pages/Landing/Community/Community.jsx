import React from 'react'
import Button from '../../../common/Button/Button'
import { Wrapper } from './Community.styles'
import {FaDiscord} from 'react-icons/fa'

function Community() {
  return (
    <Wrapper>
      <div>
        <p>Bergabunglah ke <b>komunitas</b> kami!</p>
        <Button text={'W3B Scholar'} icon={<FaDiscord/>} />
      </div>
      <img src="/static/assets/footerImage.png" alt="Footer Image" />
    </Wrapper>
  )
}

export default Community