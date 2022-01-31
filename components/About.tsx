import { motion } from "framer-motion";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiSketch,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaGithub,
  FaGitlab,
  FaSlack,
  FaTrello,
} from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
import { SiJquery, SiNextDotJs } from "react-icons/si";
import { RiArrowRightSFill } from "react-icons/ri";

import Image from "next/image";
import React from "react";
function About() {
  const techs = [
    { text: "HTML5, CSS3, SCSS." },
    { text: "Bootstrap, Tailwind." },
    { text: "Javascript(ES6+), Typescript." },
    { text: "ReactJS, NextJS." },
  ];
  const techs2 = [
    { text: "AntD, Material-UI, TailwindUI" },
    { text: "Formik, React Hook Form." },
    { text: "Redux, RTK, Context API" },
    { text: "Storybook." },
  ];
  return (
    <>
      <div className="text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center lg:grid-cols-2 gap-6">
            <div className="">
              <div className="flex items-center space-x-4 mb-6">
                <h2 className="text-3xl font-bold mb-1">About Me</h2>
                <span className="w-32 h-px bg-mainColor block"></span>
              </div>

              <p className="mb-3 text-justify">
                Hello! My name is Akib and I enjoy creating things that live on
                the internet. My interest in technology started back in 2017
                then I started to try learning HTML, CSS!
              </p>
              <p className="mb-3 text-justify">
                After completing my graduation in 2018, I start to focus on web
                development with Bengali tutorials and docs then switched to
                English resources.
              </p>
              <p className="mb-3 text-justify">
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul>
                  {techs?.map((data, idx) => (
                    <li className="flex items-center space-x-1 mb-1" key={idx}>
                      <ArrowSmRightIcon className="w-4 h-4" />
                      <p className="k"> {data.text} </p>
                    </li>
                  ))}
                </ul>
                <ul>
                  {techs2?.map((data, idx) => (
                    <li className="flex items-center space-x-1 mb-1" key={idx}>
                      <ArrowSmRightIcon className="w-4 h-4" />
                      <p className="k"> {data.text} </p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <p className="mb-5 text-xl text-justify">
                I've already worked on more than 70+ projects with Fiverr and
                Upwork. My maximum clients are very happy to work with me.
              </p>
              <h5 className="font-medium text-2xl mb-3">Core Skills:</h5>
              <ul className="flex flex-wrap mb-6">
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-yellow-300">
                    <FaHtml5 />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block  text-blue-700">
                    <FaCss3Alt />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-red-300">
                    <FaSass />
                  </span>
                </li>

                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-purple-800">
                    <FaBootstrap />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-green-500">
                    <SiTailwindcss />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-yellow-300">
                    <SiJavascript />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-500">
                    <SiJquery />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-400">
                    <FaReact />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-400">
                    <SiNextDotJs />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-500">
                    <SiTypescript />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-500">
                    <FaWordpress />
                  </span>
                </li>
              </ul>
              <h5 className="font-medium text-2xl mb-3">Additional Tools:</h5>
              <ul className="flex flex-wrap mb-6">
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-gray-700">
                    <FaGithub />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-yellow-400">
                    <FaGitlab />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-pink-900">
                    <FaSlack />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-blue-500">
                    <FaTrello />
                  </span>
                </li>
              </ul>
              <h5 className="font-medium text-2xl mb-3">Graphics Tools:</h5>
              <ul className="flex flex-wrap mb-6"> */}
              {/* <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-gray-900">
                    <SiAdobephotoshop />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-red-900">
                    <SiAdobexd />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-red-900">
                    
                    <img
                      src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png"
                      className="w-7"
                      alt=""
                    />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-yellow-500">
                    <SiSketch />
                  </span>
                </li>
                <li>
                  <span className="text-4xl mr-3 mb-2 inline-block text-yellow-500">
                    <img
                      src="https://cdn.zeplin.io/assets/lp/img/icZeplin.svg"
                      alt="Zeplin"
                      className="w-12"
                    />
                  </span>
                </li>
              </ul> */}
              {/* <p>Hi, I'm Akib. A Frontend Developer with 2.5 years of expirience. working in Companiyes and Worked more than 70+ projects.</p> */}
              {/* <p className="mb-5 text-xl">
                I'm Akib, a Frontend Web-Developer. I have been working in this
                sector for nearly 3 years now, and along with the common
                Frontend Technologies, I'm comfortable with frameworks like
                Bootstrap, Tailwind, React, and NextJS. Also, when it comes to
                pure CSS, I have acquaintance with CSS architecture like BEM,
                OOCSS, SMACSS, and Semantic Markup.
              </p>
              <p className="mb-5 text-xl">
                I've already worked on more than 70+ projects with Fiverr and
                Upwork. My maximum clients are very happy to work with me.
              </p>
              <h5 className="font-medium text-2xl">Core Skills:</h5>
              <ul className="flex flex-wrap mb-6">
                <li className="mr-3 font-medium">HTML5,</li>
                <li className="mr-3 font-medium">CSS3,</li>
                <li className="mr-3 font-medium">SCSS,</li>
                <li className="mr-3 font-medium">Bootstrap,</li>
                <li className="mr-3 font-medium">TailwindCSS,</li>
                <li className="mr-3 font-medium">JavaScript,</li>
                <li className="mr-3 font-medium">jQuery,</li>
                <li className="mr-3 font-medium">ReactJS,</li>
                <li className="mr-3 font-medium">NextJS,</li>
                <li className="mr-3 font-medium">TypeScript</li>
              </ul>
              <h5 className="font-medium text-2xl">Additional Tools:</h5>
              <ul className="flex flex-wrap mb-6">
                <li className="mr-3 font-medium">Github,</li>
                <li className="mr-3 font-medium">Gitlab,</li>
                <li className="mr-3 font-medium">Slack,</li>
                <li className="mr-3 font-medium">Trello</li>
              </ul>
              <h5 className="font-medium text-2xl">Graphics Tools:</h5>
              <ul className="flex flex-wrap">
                <li className="mr-3 font-medium">
                  Adobe Photoshop,{" "}
                  <span className="text-3xl">
                    <SiAdobephotoshop />
                  </span>
                  <span className="text-3xl">
                    <SiAdobexd />
                  </span>
                  <span className="text-3xl">
                    <SiSketch />
                  </span>
                  <span className="text-3xl bg-blue-700 inline-block text-white">
                    <SiFigma />
                  </span>
                </li>
                <li className="mr-3 font-medium">Adobe XD,</li>
                <li className="mr-3 font-medium">Sketch,</li>
                <li className="mr-3 font-medium">Figma,</li>
                <li className="mr-3 font-medium"> Zeplin</li>
              </ul>
              */}
            </div>
            <div className="">
              {/* <Image
                src="/assets/fiverr.png"
                className="block"
                alt="Shuaib Hasan Akib"
                layout="responsive"
                width={400}
                height={355}
                quality="100"
              /> */}
              {/* <Image
                src="/assets/about-6.jpg"
                className="w-full h-full my-8"
                alt="Shuaib Hasan Akib"
                layout="responsive"
                width={1000}
                height={1000}
                quality="100"
              /> */}
              <div className="">
                <div className="w-80 group relative lg:ml-12 cursor-wait">
                  <Image
                    src="/assets/akib.JPG"
                    className="object-cover relative rounded overflow-hidden"
                    alt="Shuaib Hasan Akib"
                    layout="responsive"
                    width="320"
                    height="360"
                    quality="100"
                    objectPosition={`center`}
                  />
                  <span className="group-hover:translate-x-3 group-hover:translate-y-3 transition-transform absolute inset-0 border-4 border-mainColor transform translate-x-6 translate-y-6 z-[-1] rounded"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
