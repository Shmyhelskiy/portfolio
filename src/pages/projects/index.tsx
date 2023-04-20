import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Heading from "../../../components/Heading"
import TransitionEffect from "../../../components/TransitionEffect";

const Projects = () => {

    return (
        <>
        <Head>
          <title>Projects</title>
        </Head>
        <TransitionEffect />
          <div className="flex flex-col items-center lg:flex-row lg:items-stretch min-w-full gap-2">
            <Link href="/projects/calculator" className="projects-link">
            <Heading text="Calculator" />
            <Image
                className="p-5 min-h-[80%]"
              priority
              src="/calculator.png"
              height={150}
              width={150}
              alt="calculator"
            />
            </Link>
            <Link href="/projects/flash-card" className="projects-link">
              <Heading text="Flash card"/>
              <Image
                className="p-5 min-h-[80%]"
                priority
                src="/flashCard.png"
                height={150}
                width={150}
                alt="Flash card"
              />
            </Link>
            <Link href="/projects/to-do-list" className="projects-link">
              <Heading text="To-Do list"/>
              <Image
                className="p-5 min-h-[80%]"
                priority
                src="/Todo.png"
                height={150}
                width={150}
                alt="Todo list"
              />
            </Link>
            <Link href="/projects/weather" className="projects-link">
              <Heading text="Weather App"/>
              <Image
                className="p-5 min-h-[80%]"
                priority
                src="/weather.png"
                height={150}
                width={150}
                alt="weather"
              />
            </Link>
            <div className="projects-link max-w-[250px]">
              <Heading text="The rest will appear soon..." tag="h3"/>
            </div>
          </div>
        </>
    );
};

export default Projects;