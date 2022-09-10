import React, { useEffect, useState } from 'react'
import { Bottom, Top, Wrapper } from './Sidebar.styles'
import { FiLogOut, FiUpload } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'
import { BiUserCircle } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useRouter } from 'next/router'
import SidebarButton from './Button/SidebarButton'

function Sidebar({ article, profile }) {
  const router = useRouter()

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(router.route)
  }, [router.route]);

  return (
    <Wrapper>
      <Top>
        {article && (
          <>
            <SidebarButton icon={<CgFileDocument />} text={'Artikel'} />
            <SidebarButton icon={<FiUpload />} text={"Upload Artikel"} />
          </>
        )}
        {profile && <button><BiUserCircle /> Profil</button>}
      </Top>
      <Bottom>
        {profile && <SidebarButton icon={<IoIosCloseCircleOutline />} text={'Delete Account'} />}
        <SidebarButton icon={<FiLogOut />} text={'Logout'} />
      </Bottom>
    </Wrapper>
  )
}

export default Sidebar