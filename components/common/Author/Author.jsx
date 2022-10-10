import Link from 'next/link'
import React from 'react'
import { COLORS } from '../../../constants/styles'
import { Info, Wrapper } from './Author.styles'

const PROFILE_IMAGE_NOT_FOUND = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"

function Author({ profileImageURL = PROFILE_IMAGE_NOT_FOUND, name = "Anonymous", position = "Beban", company = "Somwhere in the World", uid = '404', color = COLORS.lightGrey }) {
  return (
    <Link href={`/profile/${uid}`}>
      <Wrapper color={color}>
        {profileImageURL === null || profileImageURL === "" ?
          <img src={PROFILE_IMAGE_NOT_FOUND} alt="Author" /> :
          <img src={profileImageURL} alt="Author" />
        }
        <Info>
          <h2>{name}</h2>
          {position !== "" && company !== "" ?
            <h3>{position} in {company}</h3> : ""
          }
        </Info>
      </Wrapper>
    </Link>
  )
}

export default Author