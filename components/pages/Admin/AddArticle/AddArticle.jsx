import React from 'react'
import Sidebar from '../../../common/Sidebar/Sidebar'
import Editor from '../Editor/Editor'
import { Wrapper } from './AddArticle.styles'

function AddArticle() {
  return (
    <Wrapper>
        <Sidebar article={true}/>
        <Editor/>
    </Wrapper>
  )
}

export default AddArticle