import * as React from "react";
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/Seo";

const index = () => {
  return (
    <Layout pageTitle="Home Page" home="home">
    <div>
    Hi my friends~! How's everything going?
    </div>
    <StaticImage src="../images/homepage.jpg"/>
    </Layout>
  );
};
export const Head = () =>  {return <Seo title="My Blog Homepage"/>}
 export default index;
