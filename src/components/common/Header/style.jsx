import styled from "styled-components";

const HeaderWrap = styled.div`
  border-top: 2px solid hsl(0, 100%, 66%);
  color: hsl(0, 0%, 0%);
  padding: 20px 0 50px;
`;

const Logo = styled.span`
  font-family: ${props => props.theme.headingsFontFamily};
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.15s ease-out;
  will-change: color;
  cursor: ${props => (props.route != "/" ? "pointer" : "default")};
  &:hover {
    color: ${props =>
      props.route != "/" ? "hsl(0, 100%, 66%)" : "hsl(0, 0 %, 0 %)"};
  }
`;

const HeaderLink = styled.a`
  font-family: ${props => props.theme.headingsFontFamily};
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.15s ease-out;
  will-change: color;
  color: hsl(204, 100%, 31%);
  cursor: pointer;
  margin-left: 20px;
  border-bottom: 1px solid hsl(0, 0%, 85%);
  &:hover {
    border-bottom: 1px solid hsl(0, 100%, 85%);
    color: hsl(0, 100%, 66%);
  }
`;

export { HeaderWrap, Logo, HeaderLink };
