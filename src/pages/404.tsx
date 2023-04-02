import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Error.module.css"
const Error = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1)
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router, timer]);

  return (
    <div className={styles["wrapper"]}>
      <Head>
        <title>Error</title>
      </Head>
        <Heading text="Something went wrong"></Heading>
        <h2>You will come back to home page via {timer}</h2>
    </div>
  );
};

export default Error;
