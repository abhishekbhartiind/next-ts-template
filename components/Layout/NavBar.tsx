import styled from "styled-components";

const NavBarLayout = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  box-shadow: 0 6px 13px 0px rgb(0 0 0 / 15%);
`

const NavBar = () => {
  return <NavBarLayout>NavBar</NavBarLayout>;
};

export default NavBar;
