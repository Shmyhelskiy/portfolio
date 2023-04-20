import Head from 'next/head';
import React from 'react';
import Skills from '../../../components/components-for-about/Skill/Skills';
import Experience from '../../../components/components-for-about/Experience/Experience';
import Education from '../../../components/components-for-about/Education/Education';

const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <main className='flex flex-col pb-5'>
            <div className='flex justify-center items-center mt-5 text-sm md:text-lg lg:text-5xl font-bold h-screen'>
                <h1>Thank you for wanting to know more about me</h1>
            </div>
            <Skills />
            <Experience />
            <Education />
        </main>
        </>
    );
};

export default About;