/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const headerSyled = css({
  "background-color": "#333333",
  padding: "15px",
  "margin-bottom": "15px",
  "border-radius": "0 0 5px 5px"
});

export const Header = () => {
  return (
    <header css={headerSyled}>
      <Link
        // css={css`
        //   &:hover {
        //     text-decoration: underline;
        //   }
        // `}
        to="/"
      >
        Home
      </Link>
      <Link
        // css={css`
        //   &:hover {
        //     text-decoration: underline;
        //   }
        // `}
        to="/other"
      >
        Other
      </Link>
    </header>
  );
};
