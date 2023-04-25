import Head from 'next/head';
import React from 'react';
import Skills from '../../../components/components-for-about/Skill/Skills';
import Experience from '../../../components/components-for-about/Experience/Experience';
import Education from '../../../components/components-for-about/Education/Education';
import Anchor from '../../../components/components-for-about/Anchor';


const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <main className='flex flex-col pb-5'>
            <div className='flex flex-col justify-center items-center mt-5 h-screen'>
                <h1 className='text-base md:text-lg lg:text-5xl font-bold '>Thank you for wanting to know more about me</h1>
                <ul className='flex flex-col items-start'>
                    <Anchor link='#skills' text='Jump to Skills'/>
                    <Anchor link='#Experience' text='Jump to Experience'/>
                    <Anchor link='#Education' text='Jump to Education'/>
                </ul>
            </div>
            <Skills id="skills"/>
            <Experience id="Experience" />
            <Education  id="Education"/>
        </main>
        </>
    );
};

export default About;