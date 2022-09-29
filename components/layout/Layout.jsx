import MainNavigation from "./MainNavigation";
import { Wrapper } from "./Layout.styles";
const Layout = (props) => {
  return (
    // pass profile pic imgURL as prop to MainNavigation

    <div>
      <Wrapper>
        <MainNavigation profileImg={props.profileImg} />
        <main>{props.children}</main>
      </Wrapper>
    </div>
  );
};

export default Layout;
