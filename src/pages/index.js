// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout/layout'
 
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>I'm making this by following the Gatsby Tutorial!</p>
      <StaticImage 
      src='../images/mr-peanutbutter.jpg' 
      alt='Mr. Peanutbutter'/>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage