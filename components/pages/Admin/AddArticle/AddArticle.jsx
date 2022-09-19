import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar/Sidebar'
import SuccessModal from '../../../common/SuccessModal/SuccessModal'
import Editor from '../Editor/Editor'
import { Wrapper } from './AddArticle.styles'

function AddArticle() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Wrapper>
      {displayModal && <SuccessModal text={'Artikel berhasil di-upload'} />}
      <Sidebar article={true} />
      <Editor />
    </Wrapper>
  )
}

export default AddArticle