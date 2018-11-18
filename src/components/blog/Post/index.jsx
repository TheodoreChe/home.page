import { withRouter } from "next/router";
import Link from "next/link";
import { H2, Paragraph, PostLink } from "Common/Typography";

import { PostWrap } from "./style";

const renderTitle = title => {
  if (title == null) return null;
  return <H2>{title}</H2>;
};

const renderText = text => {
  if (text == null) return null;
  return <Paragraph>{text}</Paragraph>;
};

const renderLink = (href, linkText) => {
  if (href == null) return null;
  return (
    <Link href={href}>
      <PostLink>{linkText != null ? linkText : "Read More..."}</PostLink>
    </Link>
  );
};

const Post = ({ router, title, href, linkText, text }) => {
  return (
    <PostWrap>
      {renderTitle(title)}
      {renderText(text)}
      {renderLink(href, linkText)}
    </PostWrap>
  );
};

export default withRouter(Post);
