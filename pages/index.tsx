import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section from "../components/Section"
import Btns from "../components/Btns"
import Partnership from "../components/Partnership"

const Home: NextPage = () => {
  return (
    <>
      <Section />
      <Btns />
      <Partnership />
    </>
  )
}

export default Home