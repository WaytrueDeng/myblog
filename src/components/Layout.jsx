import * as React from "react";
import Navbar from "./Navbar";
import { Link,useStaticQuery,graphql } from "gatsby";
import {layout,pagetitle} from "./layout.module.css"

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
    <div className={layout}>
    <header> <span>Waytrue's</span> <span>Blog</span>
    </header>
      <Navbar></Navbar>
      <main>
    <h1 className={pagetitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
