import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../../components/Heading'
import TransitionEffect from '../../components/TransitionEffect'



export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TransitionEffect />
      <main className=" w-full h-full flex items-center justify-center lg:mt-5 bg-white">
        <div className="min-h-full flex flex-col items-center w-2/3">
            <Heading text="Hello, welcome to my portfolio." />
            <div className="pt-5 mt-5 flex flex-col sm:flex-row justify-around max-w-[70%]">
              <div className="lg:max-w-[50%]">
              <header>
                <Image 
                className="rounded-full mb-5"
                  src="/my-photo.jpg"
                  height={144}
                  width={144}
                  alt="My photo"
                />
                <Heading text="Alex Shmyhelskyi"/>
              </header>
              <section className="text-xs sm:text-sm md:text-base lg:text-xl mt-5">
                <p >Hello everyone, I am <strong>Alex</strong>. I am a frontend developer. In my projects, I use HTML, CSS, Tailwindcss, JavaScript, React, Redux, and Next.js. You can see my projects in 
                <Link href="/projects">⠀Projects⠀</Link> 
                and code on⠀ 
                <a href="https://github.com/Shmyhelskiy">
                    GitHub.
                  </a>
                </p>
              </section>
              </div>
              <div>
                <div className="flex flex-col gap-4 w-1/3 ml-8 mt-5 sm:mt-0">
                  <Heading text="Contacts"tag="h2" />
                  <a href="https://www.linkedin.com/in/shmyhelskyi-oleksandr/"  target="_blank" className="home-link">
                    <Image src="/linkedin.webp" alt="Linkedin" width={25} height={25}/>
                    Linkedin
                  </a>
                  <a href="https://github.com/Shmyhelskiy" target="_blank" className="home-link">
                      <Image src="/github.webp" alt="GitHub" width={25} height={25}/>
                      GitHub
                  </a>
                  <a href="https://t.me/Shmyhelskyi_Oleksandr" target="_blank" className="home-link">
                      <Image src="/Telegram.webp" alt="Telegram" width={25} height={25}/>
                      Telegram
                  </a>
                  <a href="mailto:shmyhelskyi.o.v@gmail.com" target="_blank" className="home-link">
                      <Image src="/email.webp" alt="Email" width={25} height={25}/>
                      shmyhelskyi.o.v@gmail.com
                  </a>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
