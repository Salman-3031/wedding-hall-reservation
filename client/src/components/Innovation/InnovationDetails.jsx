import { div } from "framer-motion/client";
import React from "react";
import { useParams } from "react-router-dom";

const InnovationDetail = ({ InnovationData }) => {
  const { id } = useParams();
  //   console.log(useParams())

  // Find innovation by index
  const innovation = InnovationData[id];
  console.log(innovation)

  if (!innovation) {
    return <div className="bg-bglight dark:bg-bgdark">
      <p className="container py-[90px] text-center text-red-500">Innovation not found</p>
    </div>
  }

  return (
    <div className="bg-bglight dark:bg-bgdark">
      <div className="container py-[90px] space-y-6 ">
        <img
          src={innovation.image}
          alt={innovation.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />

        <div className="flex justify-between">
          <span className="bg-bgdark dark:bg-bglight text-white dark:text-black px-4 py-1 rounded-full text-sm">
            {innovation.technology}
          </span>
          <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">
            {innovation.status}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {innovation.title}
        </h1>
        <p className="text-darkpara dark:text-lightpara">
          {innovation.description}
        </p>

        <h2 className="text-xl font-semibold mt-6 dark:text-white">About</h2>
        <p className="text-darkpara dark:text-lightpara">{innovation.about}</p>

        <h2 className="text-xl font-semibold mt-6 dark:text-white">Features</h2>
        <ul className="list-disc pl-5">
          {innovation.features.map((feature, i) => (
            <li key={i}
              className="text-darkpara dark:text-lightpara">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InnovationDetail;
