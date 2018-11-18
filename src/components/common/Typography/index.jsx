import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2.441rem;
  line-height: 1.22;
  font-weight: 700;
  margin-bottom: 9px;
  font-family: ${props => props.theme.headingsFontFamily};
`;

const H2 = styled.h2`
  font-size: 1.563rem;
  line-height: 1.22;
  font-weight: 700;
  margin-bottom: 9px;
  font-family: ${props => props.theme.headingsFontFamily};
`;

const Paragraph = styled.p`
  color: hsl(0, 0%, 16%);
  font-size: 1.25rem;
  line-height: 1.58;
  font-family: ${props => props.theme.fontFamily};
`;

const Hello = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.953rem;
  line-height: 1.4;
  max-width: 720px;
  font-weight: 400;
`;

const LinkStyle = styled.a`
  transition: color 0.15s ease-out;
  will-change: color;
  color: hsl(204, 100%, 31%);
  cursor: pointer;
  border-bottom: 1px solid hsl(0, 0%, 85%);
  &:hover {
    border-bottom: 1px solid hsl(0, 100%, 85%);
    color: hsl(0, 100%, 66%);
  }
`;

const PostLink = styled(LinkStyle)`
  font-size: 1.25rem;
  line-height: 1.58;
`;

export { H1, H2, Paragraph, Hello, LinkStyle, PostLink };
