import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Matalia FinTech
            </h3>
            <p className="sm:text-lg italic">Quantitative Machine Learning Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              Oct 2023 – Dec 2023
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
        Got acquainted with Algorithms and Trading bots based
        on Financial Analysis and ML model prediction. Also worked with different REST APIs for fetching
        and collecting historical data.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
