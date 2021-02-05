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

import Image from "next/image";
function About() {
  return (
    <>
      <div className="bg-blue-50 py-12 px-4">
        <div className="lg:w-4/5 md:w-7/8 mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 lg:pr-12 pr-6">
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <p></p>
              <p className="mb-5 text-xl text-justify">
                I'm Akib, 25 years old a Frontend Web-Developer. I've complited
                my Master's degree in 2017 and have been working in this sector
                for nearly 3 years now, and along with the common Frontend
                Technologies, I'm comfortable with frameworks like Bootstrap,
                Tailwind, React, and NextJS. Also, when it comes to pure CSS and
                JS, I have acquaintance with CSS architecture like BEM, OOCSS,
                SMACSS, and Semantic Markup.
              </p>
              <p className="mb-5 text-xl text-justify">
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
              <ul className="flex flex-wrap mb-6">
                <li>
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
                    {/* <SiFigma /> */}
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
                      src="https://zeplin.io/img/icZeplin.svg"
                      alt="Zeplin"
                      className="w-12"
                    />
                  </span>
                </li>
              </ul>
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
            <div className="lg:w-1/2">
              {/* <Image
                src="/assets/fiverr.png"
                className="block"
                alt="Shuaib Hasan Akib"
                layout="responsive"
                width={400}
                height={355}
                quality="100"
              /> */}
              <Image
                src="/assets/about-6.jpg"
                className="w-full h-full my-8"
                alt="Shuaib Hasan Akib"
                layout="responsive"
                width={1000}
                height={1000}
                quality="100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
