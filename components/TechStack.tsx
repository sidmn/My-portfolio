import { stack } from '@/data'
import React from 'react'

const TechStack = () => {
  return (
    <section id="testimonials" className="pt-20 pb-10 md:pt-[120px]">
      <h1 className="heading mb-10 md:mb-[60px]">
        My 
        <span className="text-purple"> Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 max-lg:mt-10"
        >
          {stack.map((techstack) => (
            <React.Fragment key={techstack.id}>
              <div className="flex md:max-w-60 max-w-45 gap-3">
                <img
                  src={techstack.img}
                  alt={techstack.name}
                  className="md:w-10 w-7"
                />
                <h2 className="flex justify-center items-center text-xl">
                    {techstack.name}
                </h2>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack