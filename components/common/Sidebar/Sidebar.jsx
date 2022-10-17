import React, { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { FiLogOut, FiUpload } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

import { Bottom, Top, Wrapper } from "./Sidebar.styles";
import SidebarButton from "./Button/SidebarButton";
import { auth, db } from "../../../firebase/firebase";
import { AuthContext } from "../../../context/AuthContext";

function Sidebar({ article, profile }) {
  const user = useContext(AuthContext);
  const router = useRouter();

  // masih ga yakin
  const handleDelete = async () => {
    await deleteDoc(doc(db, "users", user?.uid));
  };

  const handleLogout = () => {
    auth.signOut();
    router.push("/");
  };

  return (
    <Wrapper className="sidebar-container">
      <Top>
        {article && (
          <>
            <Link href={"/articles"}>
              <SidebarButton
                icon={<CgFileDocument />}
                text={"Artikel"}
                path={"/articles"}
              />
            </Link>
            <Link href={"/articles/editor"}>
              <SidebarButton
                icon={<FiUpload />}
                text={"Upload Artikel"}
                path={"/articles/editor"}
              />
            </Link>
          </>
        )}
        {profile && (
          <Link href={"/profile"}>
            <SidebarButton
              icon={<BiUserCircle />}
              text={"Profil"}
              path={`/profile/${user?.uid}`}
            />
          </Link>
        )}
      </Top>
      <Bottom>
        {profile && (
          <SidebarButton
            icon={<IoIosCloseCircleOutline />}
            text={"Delete Account"}
          />
        )}
        <SidebarButton
          icon={<FiLogOut />}
          text={"Logout"}
          hoverColor={"red"}
          onClick={handleLogout}
        />
      </Bottom>
    </Wrapper>
  );
}

export default Sidebar;
