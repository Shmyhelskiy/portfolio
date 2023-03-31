import Head from "next/head";
import Link from "next/link";
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
              Calculator
            </Link>

           </div>
        </div>
        </>
    );
};

export default Projects;