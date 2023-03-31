import Head from 'next/head'
import Heading from '../../components/Heading'
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles["main-container"]}>
        <Heading text="Hello, welcome to my list of small projects" />
      </div>
    </>
  )
}
