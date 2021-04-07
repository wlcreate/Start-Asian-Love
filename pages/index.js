import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Carousel from '../components/Carousel.js'

export default function Home() {
  return (
    <div>
        <Header/>
        <h1>Start Asian Love</h1>
        <Carousel/>
    </div>
    
  )
}

