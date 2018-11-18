import Link from "next/link";
import { Container } from "Common/Layout/style";
import { withRouter } from "next/router";

import { HeaderWrap, Logo, HeaderLink } from "./style";

const Header = ({ router }) => {
  const route = router != null ? router.route : "/";
  return (
    <HeaderWrap>
      <Container>
        {route != "/" ? (
          <Link href="/">
            <Logo route={route}>{`<Theodore Chernin />`}</Logo>
          </Link>
        ) : (
          <Logo route={route}>{`<Theodore Chernin />`}</Logo>
        )}
        <Link href="/blog">
          <HeaderLink>Blog</HeaderLink>
        </Link>
      </Container>
    </HeaderWrap>
  );
};

export default withRouter(Header);
