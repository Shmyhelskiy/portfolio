import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../../components/Heading'
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles["wrapper"]}>
        <div className={styles["main-container"]}>
            <Heading text="Hello, welcome to my portfolio." />
            <div className={styles["container"]}>
              <div className={styles['left-container']}>
              <header>
                <Image 
                className={styles["image"]}
                  src="/my-photo.jpg"
                  height={144}
                  width={144}
                  alt="My photo"
                />
                <Heading text="Alex Shmyhelskyi" tag="h2" />
              </header>
              <section className={styles["text"]}>
                <p>Hello everyone, I am <strong>Alex</strong>. I am a frontend developer. In my projects, I use HTML, CSS, JavaScript, React, Redux, and Next.js. You can see my projects in 
                <Link href="/projects">⠀Projects⠀</Link> 
                and code on⠀ 
                <a href="https://github.com/Shmyhelskiy">
                    GitHub.
                  </a>
                </p>
              </section>
              </div>
              <div>
                <main className={styles['right-container']}>
                <Heading text="My contacts"tag="h2" />
                <a href="https://www.linkedin.com/in/shmyhelskyi-oleksandr/"  target="_blank" className={styles["link"]}>
                  <Image src="/linkedin.webp" alt="Linkedin" width={25} height={25}/>
                  Linkedin
                </a>
                <a href="https://github.com/Shmyhelskiy" target="_blank" className={styles["link"]}>
                    <Image src="/github.webp" alt="GitHub" width={25} height={25}/>
                    GitHub
                </a>
                <a href="https://t.me/Shmyhelskyi_Oleksandr" target="_blank" className={styles["link"]}>
                    <Image src="/Telegram.webp" alt="Telegram" width={25} height={25}/>
                    Telegram
                </a>
                <a href="mailto:shmyhelskyi.o.v@gmail.com" target="_blank" className={styles["link"]}>
                    <Image src="/email.webp" alt="Email" width={25} height={25}/>
                    shmyhelskyi.o.v@gmail.com
                </a>
                </main>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
