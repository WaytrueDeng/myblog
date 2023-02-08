import * as React from 'react'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout pageTitle="about me">
    <div>
      Hi I am WaytrueDeng you can find me on 
    <ol>
      <li>github <a href="https://github.com/WaytrueDeng">WaytrueDeng</a></li>
    <li> my email is waytrue@outook.com </li>
    </ol>
    </div>
    </Layout>
  )
}

export const Head = () => {
  return <title>About Me</title>
}
export default about
