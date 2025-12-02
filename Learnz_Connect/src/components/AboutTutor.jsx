import React from "react";

export default function AboutTutor() {
  return (
    <section className="full-width-section about-section">
      <div className="section-inner">
        
        <div className="about-center">
          <h2 className="section-title about-title-center">About My Tutor</h2>

            <p className="about-text">
            I have been following my tutor for the past <strong>1 year</strong>, and I can confidently
            say that his teaching has played a major role in shaping my journey as a developer.
            He is extremely well-planned, patient, and consistent always making sure every concept
            is explained clearly before moving forward. No matter how many doubts we ask, he responds 
            with a smile and reminds us in every session: <em>“Please ask whatever doubt you have.”</em>
            I’m truly happy with this React course. Over this journey, I learned how to build a complete 
            React website from scratch.
          </p>

          <p className="about-text">
            The course covered essential topics such as <strong>Redux, RTK, Hooks,ZOD,Api, error handling, folder 
            structure, optimization techniques,</strong> and real-world development patterns. He also taught 
            us smart techniques like how to identify and fix errors quickly using <strong>Inspect → Console</strong>,
            and how to make our code faster and cleaner without depending on AI-generated solutions. These 
            practical debugging and optimization skills built strong confidence in writing code the right way.
          </p>

          <p className="about-text">
            His teaching style flows beautifully from basics to advanced concepts, making sure no student feels 
            left behind. If Google Reviews allowed more than 10 stars, I would rate him a perfect 10 without 
            hesitation. Five stars simply aren’t enough to express my gratitude for the effort, dedication, 
            and valuable knowledge he has shared with us throughout this journey. 
            <strong> Thank you so much for everything.</strong>
          </p>

          <div className="about-cta-row about-center-buttons">
            <a className="btn-primary" href="https://learnzconnect.com/" target="_blank" rel="noreferrer">Learnz Connect</a>
          </div>
        </div>

      </div>
    </section>
  );
}
