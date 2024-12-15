import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          {" "}
          I am a <b>Machine Learning Engineer </b>specializing in{" "}
          <b>AI&ML</b>, currently pursuing a B.E. at Vellore Institute of
          Technology (CGPA: <b>9.19/10</b>). Skilled in{" "}
          <b>Python, Java, Machine Learning, Deep Learning, NLP, Computer Vision</b>, I create
          scalable & useful models. My projects include a Bitcoin Price Predictor, PDF Research Bot & a
          News Classifier.
          <br />
          During my internship at <b>Matalia FinTech</b>, I gained
          hands-on experience in synthetic data generation, financial forecasting, and
          predictive maintenance. I developed a high-frequency trading bot capable based on financial analysis 
          and ML model prediction. Passionate about innovation and continuous learning, I
          bring strong technical skills and problem-solving to every endeavor.{" "}
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
