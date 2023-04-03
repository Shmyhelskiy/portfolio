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
        <div className={styles["wrapper"]}>
           <div className={styles["container"]}>
            <Link href="/projects/calculator" className={styles["link"]}>
            <Heading text="Calculator" tag="h2"/>
            <Image
            className={styles["image"]}
              priority
              src="/calculator.png"
              height={150}
              width={150}
              alt="calculator"
            />
            </Link>
            <Link href="/projects/flash-card" className={styles["link"]}>
            <Heading text="Flash card" tag="h2"/>
            <Image
            className={styles["image"]}
              priority
              src="/flashCard.png"
              height={150}
              width={150}
              alt="Flash card"
            />
            </Link>
            <div className={styles["link"]}>
            <Heading text="The rest will appear soon..." tag="h3"/>
            </div>
           </div>
        </div>
        </>
    );
};

export default Projects;