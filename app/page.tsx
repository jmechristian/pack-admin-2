'use client';
import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Press_Start_2P } from 'next/font/google';
import useSound from 'use-sound';
// import factoryShort from '@/public/sounds/factory_short.mp3';

gsap.registerPlugin(TextPlugin);
const pressStart = Press_Start_2P({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const sceneRef = useRef(null);

  const [play] = useSound('/sounds/factory_short.mp3');

  useEffect(() => {
    play();
  }, [isHovered]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.back', { opacity: 1, duration: 1 });
      gsap.to('.back', { scale: 1, duration: 1.5 });
      gsap.to('.computer-backdrop', {
        opacity: 1,
        delay: 0.75,
        duration: 0.75,
      });
      gsap.to('.computer', {
        bottom: 0,
        scale: 1.25,
        duration: 1,
        ease: 'power4.easeInOut',
      });
      gsap.to('.text', {
        duration: 1,
        text: '***PACK ADMIN***',
        ease: 'none',
        delay: 1.25,
      });
      gsap.to('.text-1', { opacity: 1, duration: 0.05, delay: 2.5 });
      gsap.to('.text-2', { opacity: 1, duration: 0.05, delay: 2.75 });
      gsap.to('.text-3', { opacity: 1, duration: 0.05, delay: 3 });
      gsap.to('.text-4', {
        duration: 0.5,
        text: '*****************',
        ease: 'none',
        delay: 3.25,
      });
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className='flex min-h-screen min-w-screen w-full relative bg-slate-900 overflow-hidden'
      ref={sceneRef}
    >
      <div
        className='w-full h-full bg-slate-700 opacity-0 absolute z-10 inset-0 bg-cover bg-no-repeat bg-center back scale-125'
        style={{
          backgroundImage: `url('https://packschool.s3.amazonaws.com/admin-back-main.png')`,
        }}
      ></div>
      <div className='opacity-0 w-full h-full bg-gradient-to-t from-black fixed inset-0 z-[15] computer-backdrop'></div>
      <div
        className='w-full mx-auto absolute -bottom-full z-20 computer scale-90'
        onMouseEnter={() => setIsHovered(true)}
      >
        <div className='w-full max-w-4xl lg:max-w-2xl xl:max-w-3xl mx-auto relative mb-8'>
          <Image
            src={'https://packschool.s3.amazonaws.com/pack-admin-computer.png'}
            alt='pack admin computer'
            width={1120}
            height={957}
          />
          <div className='w-1/2 h-40 absolute z-30 top-9 md:top-20 lg:top-20 -translate-x-1/2 left-1/2'>
            <div className='flex flex-col gap-3 xl:gap-9 pl-3'>
              <div
                className={`${pressStart.className} text-xs md:text-lg xl:text-xl text-green-500 text`}
              ></div>
              <div className='flex flex-col'>
                <div
                  className={`${pressStart.className} text-xs md:text-lg xl:text-lg text-green-500 text-1 opacity-0`}
                >
                  &gt;CLICK HERE
                </div>
                <div
                  className={`${pressStart.className} text-xs md:text-lg xl:text-lg text-green-500 text-2 opacity-0`}
                >
                  &gt;TO ACCESS
                </div>
                <div
                  className={`${pressStart.className} text-xs md:text-lg xl:text-lg text-green-500 text-3 opacity-0`}
                >
                  &gt;PSCHOOL DATA_
                </div>
              </div>
              <div
                className={`${pressStart.className} text-xs md:text-lg xl:text-lg text-green-500 text-4 overflow-hidden`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
