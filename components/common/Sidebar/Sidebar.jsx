import React from 'react'
import { Bottom, Top, Wrapper } from './Sidebar.styles'
import { FiLogOut, FiUpload } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'
import { BiUserCircle } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import SidebarButton from './Button/SidebarButton'
import Link from 'next/link'

function Sidebar({ article, profile }) {
  
  const navigateTo = (path) => {

  }

  return (
    <Wrapper>
      <Top>
        {article && (
          <>
            <Link href={'/articles'}>
              <SidebarButton
                icon={<CgFileDocument />}
                text={'Artikel'}
                path={'/articles'}
              />
            </Link>
            <Link href={'/articles/editor'}>
              <SidebarButton
                icon={<FiUpload />}
                text={"Upload Artikel"}
                path={'/articles/editor'}
              />
            </Link>
          </>
        )}
        {profile && <Link href={'/profile'}>
          <SidebarButton
            icon={<BiUserCircle />}
            text={'Profil'}
            path={'/profile'}
          />
        </Link>
        }
      </Top>
      <Bottom>
        {profile && <SidebarButton
          icon={<IoIosCloseCircleOutline />}
          text={'Delete Account'}
        />
        }
        <SidebarButton
          icon={<FiLogOut />}
          text={'Logout'}
          hoverColor={'red'}
        />
      </Bottom>
    </Wrapper>
  )
}

export default Sidebar