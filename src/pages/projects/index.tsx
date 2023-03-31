import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Heading from "../../../components/Heading"
import styles from "../../styles/Projects.module.css"

const Projects = () => {
    return (
        <>
        <Head>
        <title>Projects</title>
      </Head>
        <div className={styles["wrapper"]}>
           <Heading text="Projects" />
           <div className={styles["container"]}>
            <Link href="/projects/calculator" className={styles["link"]}>
            <Heading text="Calculator" tag="h2"/>
            <Image
            className={styles["image"]}
              priority
              src="/calculator.png"
              height={150}
              width={150}
              alt=""
            />
            </Link>

           </div>
        </div>
        </>
    );
};

export default Projects;