import React, { useState } from 'react'
import PageIndicator from '../../../common/PageIndicator/PageIndicator'
import Sidebar from '../../../common/Sidebar/Sidebar'
import SuccessModal from '../../../common/SuccessModal/SuccessModal'
import Editor from '../Editor/Editor'
import { Wrapper } from './AddArticle.styles'
import {FiUpload} from 'react-icons/fi'

function AddArticle() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Wrapper>
      {displayModal && 
        <SuccessModal setDisplayModal={setDisplayModal} text={'Artikel berhasil di-upload'} />
      }
      <PageIndicator 
        icon={<FiUpload/>} 
        currentPage={'Upload Article'} 
      />
      <Sidebar article={true} />
      <Editor setDisplayModal={setDisplayModal} />
    </Wrapper>
  )
}

export default AddArticle