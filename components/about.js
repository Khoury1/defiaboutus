import React, { useState } from 'react';

const About = () => {
  return (
    <div
      id='about'
      class='2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto'
    >
      <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=''>
          <img className='w-full' alt='MERN' src='assets/mern_hero.png' />
        </div>
        <div className='lg:ml-8 md:ml-6 md:mt-0 mt-6'>
          <div className='border-b border-gray-200 pb-6'>
            <p className='text-sm leading-none text-gray-600'>About me</p>
            <h1
              className='
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						'
            >
              Glad to see you here!
            </h1>
          </div>
          <div>
            <p className='text-base lg:leading-tight leading-normal text-gray-600 mt-3'>
              My name is Prathmesh Sadake. I'm a full-stack engineer. As a
              full-stack developer, I can create client-facing apps and websites
              with cutting-edge back-end support. I usually use the MERN stack,
              but I'm flexible enough to utilize whatever tools are required.
            </p>
            <p className='text-base lg:leading-tight leading-normal text-gray-600 mt-3'>
              I specialize in creating solid backends for your app or website
              that handle all of the heavy liftings. I enjoy creating systems
              that are both light and powerful, distributed yet coordinated, and
              beautiful yet functional. I'd like to continue producing
              individualized goods for people by combining my passion for
              learning with my software development talents.
            </p>{' '}
            <p className='text-base lg:leading-tight leading-normal text-gray-600 mt-3'>
              When I'm not working, I like to spend time reading books,
              listening audiobooks or podcasts, learning to code or tinkering
              with new apps and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;