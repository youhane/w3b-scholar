import Link from 'next/link'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { Wrapper } from './BackButton.styles'

function BackButton({href = '/'}) {

  return (
    <Link href={href}>
      <Wrapper>
        <BsChevronLeft /> Back
      </Wrapper>
    </Link>
  )
}

export default BackButton