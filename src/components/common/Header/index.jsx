import Link from "next/link";
import styled from "styled-components";

const HeaderWrap = styled.div`
  border-top: 6px solid hsl(47, 100%, 57%);
  color: hsl(0, 0%, 0%);
  padding: 30px;
`;

const Logo = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-size: 18px;
`;

const Header = () => (
  <HeaderWrap>
    <Logo>{`<Theodore Chernin />`}</Logo>
  </HeaderWrap>
);

export default Header;
