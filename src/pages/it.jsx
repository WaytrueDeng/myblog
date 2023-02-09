import * as React from 'react'
import Layout from '../components/Layout'
import Category from '../components/Category'


const it = () => {
  return (
    <Layout>
    <Category queryFor="IT"/>
    </Layout>   
  )
}


export default it
export const Head = () => {
  return <title>It Stuff</title>
}
