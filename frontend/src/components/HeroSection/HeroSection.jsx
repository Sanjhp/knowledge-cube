import React from 'react'
import HSstyles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div>
      
          <section className={HSstyles.hero}>                
              <h1 className={HSstyles.heading}>To expand your career, get in touch with us.</h1>
              <p className={HSstyles.subheading}>Here you can select the best course for your career from a wide range of courses.</p>
                  <a href="https://www.youtube.com/watch?v=I2UBjN5ER4s&t=847s&ab_channel=BrianDesign" className={HSstyles.button}>Get started now for free</a>
          </section>

         
    </div>
  )
}

export default HeroSection
