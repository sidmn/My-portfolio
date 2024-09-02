import React from 'react'
import { Timeline } from './ui/Timeline'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <section id="experience" className="py-20">
        <h1 className="heading mb-10">
            My 
            <span className="text-purple"> Work Experience</span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
            <Timeline data={workExperience} />
        </div>
    </section>
  )
}

export default Experience