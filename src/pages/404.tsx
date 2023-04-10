import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <div className="flex flex-col items-center justify-center min-h-80 font-bold md:text-2xl lg:text-3xl">
      <Head>
        <title>Error</title>
      </Head>
        <Heading text="Something went wrong"></Heading>
        <h2>You will come back to home page via {timer}</h2>
    </div>
  );
};

export default Error;
