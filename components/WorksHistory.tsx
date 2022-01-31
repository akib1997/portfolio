import React from "react";
import Accordion from "./Accordion";
import { Tab } from "@headlessui/react";

function WorksHistory() {
  const works = [
    {
      id: 1,
      name: "Exabytelab",
      title: "internship",
      time: "20-2012",
      tasks: ["html", "css"],
    },
    {
      id: 2,
      name: "Ann-nahle",
      title: "Jr. Frontend Developer",
      time: "20-2012",
      tasks: ["html", "css", "JS"],
    },
  ];

  return (
    <>
      <section className="px-4 pb-20 pt-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-3xl font-bold mb-1">Where I’ve Worked</h2>
            <span className="w-32 h-px bg-mainColor block"></span>
          </div>
          <Accordion />
        </div>
      </section>
    </>
  );
}

export default WorksHistory;
