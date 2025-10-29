import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function SmoothScrollLayout({ children }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5, // seconds to "catch up" to the native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements
    });

    // Cleanup on component unmount
    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full h-full overflow-x-hidden">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

