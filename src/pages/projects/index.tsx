import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Heading from "../../../components/Heading"
import styles from "../../styles/Projects/Projects.module.css"

const Projects = () => {
    return (
        <>
        <Head>
          <title>Projects</title>
        </Head>
          <div className="flex min-w-full gap-2">
            <Link href="/projects/calculator" className="flash-link">
            <Heading text="Calculator" tag="h2"/>
            <Image
                className="p-5"
              priority
              src="/calculator.png"
              height={150}
              width={150}
              alt="calculator"
            />
            </Link>
            <Link href="/projects/flash-card" className="flash-link">
              <Heading text="Flash card" tag="h2"/>
              <Image
                className="p-5"
                priority
                src="/flashCard.png"
                height={150}
                width={150}
                alt="Flash card"
              />
            </Link>
            <div className="flash-link max-w-[500px]">
              <Heading text="The rest will appear soon..." tag="h3"/>
            </div>
          </div>
        </>
    );
};

export default Projects;