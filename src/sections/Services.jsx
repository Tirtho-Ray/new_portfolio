import React from 'react'

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className='main-container pb-8 lg:pb-12'>
          <h3>Services in Detail</h3>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[30rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                 Front End <br /> Developer
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed font-roboto">
                 I craft modern, user-focused web applications using <span className='font-bold font-heading leading-1.5'>React.js</span> and  <span className='font-bold font-heading leading-1.5'>Next js</span>, combining clean layouts, thoughtful typography, and smooth interactions. Every interface is meticulously designed to deliver both aesthetic appeal and seamless usability, ensuring fast, responsive, and engaging experiences for users across devices.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[30rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Backend <br /> Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed font-roboto">
                  I design and build robust, scalable <span className='font-bold font-heading leading-1.5'>backend</span> systems using <span className='font-bold font-heading leading-1.5'>TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma, JWT,</span> and <span className='font-bold font-heading leading-1.5'>zod</span>. Following <span className='font-bold font-heading leading-1.5'>modular</span> and <span className='font-bold font-heading leading-1.5'> MVC architectures</span>, I create clean, maintainable code, efficient APIs, and optimized databases, ensuring high performance, security, and reliability across applications.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 >
                  <span className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]" >DevOps</span> <span className='font-heading leading-[1]'>(Beginner)</span>
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                 I build and manage robust development and deployment workflows using <span className='font-bold font-heading leading-1.5'>Docker</span>,<span className='font-bold font-heading leading-1.5'> Kubernetes (kubectl)</span>, and <span className='font-bold font-heading leading-1.5'>Git</span>. I focus on containerization, version control, and scalable deployments, ensuring applications are reliable, maintainable, and production-ready.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services