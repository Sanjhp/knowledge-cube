import React from 'react'
import HSstyles from './HeroSection.module.css';
// import Apps from './Apps.module.css';
import courses from '../../assets/courses.svg';
import expert from '../../assets/expert.svg';
function HeroSection() {
  return (
    <div className="text-align z-0">

      <section className={HSstyles.hero}>
        <h1 className={HSstyles.heading}>To expand your career, get in touch with us.</h1>
        <p className={HSstyles.subheading}>Here you can select the best course for your career from a wide range of courses.</p>
        <a href="https://www.youtube.com/watch?v=I2UBjN5ER4s&t=847s&ab_channel=BrianDesign" className={HSstyles.button}>Get started now for free</a>
      </section>

      <section>
        <div className={HSstyles.gridBox}>
          <div className={HSstyles.gridItem}>
            <img src={courses} alt="cor" />
            <h2>100k Online Courses</h2>

          </div>
          <div className={HSstyles.gridItem + ' ' + HSstyles.item2}>
            <img src={expert} alt="cor" />
            <h2>Expert Instruction</h2>
          </div>
          <div className={HSstyles.gridItem}>
            <img src={courses} alt="cor" />
            <h2>Lifetime Access</h2>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HeroSection
