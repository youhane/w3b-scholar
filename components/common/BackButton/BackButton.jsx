import { useRouter } from 'next/router';
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { Wrapper } from './BackButton.styles'

function BackButton() {
  const router = useRouter();
  
  return (
    <Wrapper onClick={() => router.back()}>
        <BsChevronLeft/> Back
    </Wrapper>
  )
}

export default BackButton