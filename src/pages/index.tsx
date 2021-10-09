import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'

const users = ["mario", "kuppa"];
const arr = ["リンゴ", "パイナップル", "ペン"];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
          {
            arr.map((fruit, i) => <li key={i}>{fruit}</li>)
          }
      </ul>
      {
        users.map((e) => {return <span>{e}</span>})
      }
    </div>
  )
}

export default Home
