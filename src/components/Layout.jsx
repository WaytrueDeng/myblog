import * as React from "react";
import Navbar from "./Navbar";
import { Link,useStaticQuery,graphql } from "gatsby";

export default function Layout({ pageTitle,children,home }) {
  const data = useStaticQuery(
    graphql`
query {
site {
  siteMetadata {
    title
  }
}
}
    `
  )
  return (
    <div>
    <header> {data.site.siteMetadata.title}
    </header>
      <Navbar></Navbar>
      <main>
    <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
