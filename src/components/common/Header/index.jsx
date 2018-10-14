import Link from "next/link";
import styled from "styled-components";

const HeaderWrap = styled.div`
  border-top: 8px solid hsl(47, 100%, 57%);
  color: hsl(0, 0%, 0%);
  padding: 40px 0;
`;

const Logo = styled.span`
  font-family: Lato;
  font-weight: 700;
`;

const Header = () => (
  <HeaderWrap>
    <Logo>Theodore Chernin</Logo>
  </HeaderWrap>
);

export default Header;
