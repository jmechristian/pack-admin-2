'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(true);

  const transitionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setIsAnimating(true);
      let tl = gsap.timeline();
      tl.to('.children', { opacity: 0, duration: 0.5 });
      tl.set('.transition-wrapper', {
        display: 'flex',
      });
      tl.to('transition-wrapper', { opacity: 0, duration: 0.5, delay: 0.5 });
      tl.to(
        '.left',
        { left: 0, duration: 0.5, ease: 'power4.easeInOut' },
        '-=1'
      );
      tl.to(
        '.right',
        { right: '0', duration: 0.5, ease: 'power4.easeInOut' },
        '-=1'
      );
      tl.to('.left', {
        left: '-100%',
        duration: 0.5,
        delay: 1,
        ease: 'power4.easeInOut',
      });
      tl.to(
        '.right',
        {
          right: '-100%',
          duration: 0.5,
          ease: 'power4.easeInOut',
        },
        '-=0.5'
      );
      tl.set('.transition-wrapper', { display: 'none' }).call(() =>
        setIsAnimating(false)
      );
      tl.to('.children', { opacity: 1, duration: 1 });
    }, transitionRef);

    return () => ctx.revert();
  }, [pathname, searchParams]);

  return (
    <div
      className='w-screen h-screen relative overflow-hidden bg-transparent'
      ref={transitionRef}
    >
      <div className='w-full relative z-[100] h-full hidden transition-wrapper'>
        <div className='w-1/2 h-full -left-full bg-neutral-800 left relative'></div>
        <div className='w-1/2 h-full bg-neutral-800 -right-full right relative'></div>
      </div>
      <div className='children'>{!isAnimating && children}</div>
    </div>
  );
};

export default TransitionWrapper;
