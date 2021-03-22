/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  return (
    <header css={header}>
      <Link css={link} to="/">
        Home
      </Link>
      <Link css={link} to="/about">
        About
      </Link>
    </header>
  );
};

const header = css({
  backgroundColor: "#333333",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "0 0 5px 5px"
});

const link = css`
  &:hover {
    text-decoration: underline;
  }
`;
