import Heading from "../../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="Somothing is going wrong"></Heading>
    </div>
  );
};

export default Error;
