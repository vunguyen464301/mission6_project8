import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import "../css/style.css"
import dynamic from 'next/dynamic'
const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/nav'),
  { loading: () => <p>...</p> }
)
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>


  <p style={{ color: 'red' }}>  THis is home</p>
  <div className="center">
  center
  </div>

  <div className="example">Hello World!</div>
  <Link href="/user/user">
 go to User
</Link>
    
    {/* <style jsx>{`
      .center{
        display: flex;
        justify-content: center;
    }
    `}</style> */}
  </div>
)

export default Home
