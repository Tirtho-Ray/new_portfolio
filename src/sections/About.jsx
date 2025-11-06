import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
          {/* Text container */}
          <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>I design and develop backend systems that are robust, scalable, and high-performing. My expertise lies in writing clean, maintainable code, building efficient APIs, and optimizing databases for peak performance. I architect systems with precision, addressing bugs proactively, following best practices, and implementing smart, reliable designs. Leveraging containerization with Docker and modern development workflows, I ensure every application delivers a seamless experience for both developers and users, driving efficiency, reliability, and meaningful impact..</div>
      </div>
    </>
  )
}

export default About