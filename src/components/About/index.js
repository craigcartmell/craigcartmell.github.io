import React from 'react';
import Contact from '../Contact';
import Icon from 'react-icons-kit';
import { circleDown } from 'react-icons-kit/icomoon/index';

const About = () => (
    <section className="w-full h-screen text-center bg-transparent text-xl">
        <div className="flex flex-row h-full items-center p-12">
            <div className="m-4">
                I'm an experienced and highly motivated
                <span className="text-pink font-bold">
                    {' '}
                    Freelance Senior Full Stack Developer{' '}
                </span>
                with over 15 years in the industry.
            </div>
            <div className="m-4">
                I've been lucky enough to work at some of the biggest companies
                in their respective industries including{' '}
                <span className="text-pink font-bold"> Saatchi & Saatchi </span>
                and more recently, the world's leading outdoor advertising
                company,
                <span className="text-pink font-bold"> JCDecaux</span>.
                <Contact />
            </div>
            <div className="m-4">
                I'm dedicated to staying ahead of the curve, writing clean,
                readable code and helping implement best practises.
            </div>
        </div>
        <div className="absolute pin-b w-full h-auto mb-6">
            <span className="block text-pink">View Latest Work</span>
            <span className="block mt-2 text-white bounce">
                <Icon icon={circleDown} size={32} />
            </span>
        </div>
    </section>
);

export default About;