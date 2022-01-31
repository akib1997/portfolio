import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Accordion() {
  let categories = {
    Exabytelab: {
      positionTitle: "Internship as a Web Designer",
      date: ["04-18", "02-19"],
      tasks: [
        "Deeply learn about HTML, HTML5, CSS, CSS3, Bootstrap, WP Customize, Basic PHP, Basic Javascript, and jQuery.",
        "PSD to HTML conversion, Landing page creates and Helping seniors with HTML and CSS to create the theme.",
        "Fixing issue on previously developed websites.",
      ],
      officialSite: "Exabytelab.com",
    },
    AnnNahl: {
      positionTitle: "Jr. Frontend Developer",
      date: ["03-19", "04-20"],
      tasks: [
        "Develop UI from the given design for website, Application, and landing page.",
        "PSD to HTML conversion using Bootstrap followed CSS architecture like BEM. PSD to HTML Email templates.",
        "HTML, CSS, Responsive, WordPress bug fix and WordPress Customization.",
      ],
      officialSite: "https://aan-nahl.com",
    },
    FutureJanction: {
      positionTitle: "Frontend Developer (Remote)",
      date: ["06-20", "Present"],
      tasks: [
        "Develop UI from design through optimization of images, code, and cross-browser compatibility, mobile-friendly, decreasing loading time.",
        "Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement.",
        "Built SPA, Responsive Design, UI using HTML5, CSS3, Tailwind, Bootstrap, JS, React, NextJS, Material UI where its an expression and can be used to either true or false.",
        "Ensure efficient web development by supporting designers and app developers while resolving website performance issues.",
      ],
      officialSite: "https://futurejunction.co.jp",
    },
  };

  return (
    <>
      <Tab.Group
        as="div"
        className="grid sm:grid-cols-3 gap-4 sm:mx-8 lg:mx-20"
      >
        <Tab.List className="relative self-start sm:col-span-1">
          <span className="absolute left-0 top-0 h-full w-0.5 bg-mainColorLight"></span>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full relative py-2.5 text-left pl-4 text-sm leading-5 font-medium text-mainColor border-l-2 border-opacity-0 transition-opacity duration-300",
                  "focus:outline-none",
                  selected
                    ? "border-mainColor border-opacity-100"
                    : "text-mainColorLight hover:text-mainColor/60 hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="focus:ring-1 ring-mainColorLight sm:col-span-2">
          {Object.values(categories).map((categorie, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(" p-3", "focus:outline-none")}
            >
              <div className="flex"></div>
              <h4 className="text-2xl mb-1">
                {categorie.positionTitle}
                <a
                  href={categorie.officialSite}
                  target="_blank"
                  className="inline-block text-mainColor font-semibold hover-underline tracking-wide ml-2"
                >
                  @Website
                </a>
              </h4>
              <p className="text-sm mb-4">
                {categorie.date[0]} to {categorie.date[1]}
              </p>
              <ul>
                {categorie?.tasks?.map((task) => (
                  <li key={task} className="flex space-x-2 mb-2">
                    <ArrowSmRightIcon className="w-5 h-5 text-mainColor block" />
                    <p className="text-base">{task}</p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
