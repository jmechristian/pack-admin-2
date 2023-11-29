'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Press_Start_2P } from 'next/font/google';

gsap.registerPlugin(TextPlugin);
const pressStart = Press_Start_2P({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const sceneRef = useRef(null);

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
        duration: 0.5,
        text: '***PACK ADMIN***',
        ease: 'none',
        delay: 1.25,
      });
      gsap.to('.text-1', { opacity: 1, duration: 0.05, delay: 2 });
      gsap.to('.text-2', { opacity: 1, duration: 0.05, delay: 2.25 });
      gsap.to('.text-3', { opacity: 1, duration: 0.05, delay: 2.5 });
      gsap.to('.text-4', {
        duration: 0.5,
        text: '*****************',
        ease: 'none',
        delay: 2.75,
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
      <div className='opacity-0 w-full h-full bg-gradient-to-t from-black/90 fixed inset-0 z-[15] computer-backdrop'></div>
      <div className='w-full mx-auto absolute -bottom-full z-20 computer scale-90'>
        <div className='w-full max-w-[50%] mx-auto relative'>
          <Image
            src={'https://packschool.s3.amazonaws.com/pack-admin-computer.png'}
            alt='pack admin computer'
            width={1120}
            height={957}
          />
          <div className='w-1/2 h-40 absolute z-30 top-20 -translate-x-1/2 left-1/2'>
            <div className='flex flex-col gap-9 pl-3'>
              <div
                className={`${pressStart.className} text-xl text-green-500 text`}
              ></div>
              <div className='flex flex-col'>
                <div
                  className={`${pressStart.className} text-lg text-green-500 text-1 opacity-0`}
                >
                  &gt;CLICK HERE
                </div>
                <div
                  className={`${pressStart.className} text-lg text-green-500 text-2 opacity-0`}
                >
                  &gt;TO ACCESS
                </div>
                <div
                  className={`${pressStart.className} text-lg text-green-500 text-3 opacity-0`}
                >
                  &gt;PSCHOOL DATA
                </div>
              </div>
              <div
                className={`${pressStart.className} text-lg text-green-500 text-4`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
