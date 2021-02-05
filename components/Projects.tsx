import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projectData from "../data/ProjectData";
import { motion } from "framer-motion";
import { spawn } from "child_process";
// import './../assets/'

export default function Projects() {
  // let catgs:string[] = ['all', 'html', 'css', 'js', 'ts']

  const transition = { duration: 0.5, ease: "easeInOut" };
  const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, transition },
    exit: { x: "-100%", opacity: 0, transition },
  };

  let catgs: string[] = [
    "all",
    "html css",
    "scss",
    "wordpress",
    "react",
    "typescript",
    "nextjs",
    "bug fix",
  ];
  const [data, setData] = useState(projectData);
  const [active, setActive] = useState(false);

  const filterData = (e) => {
    if (e.target.value === "all") {
      setData(projectData);
    } else {
      setData(projectData.filter((filter) => filter.cat === e.target.value));
    }
  };

  return (
    <div className="py-20 px-4" id="projects">
      <div className="lg:w-4/5 md:w-7/8 mx-auto">
        <h2 className="text-5xl font-bold mb-2">Some Projects</h2>
        <p className="text-xl mb-8">
          Here is some of my recent coplited project.
        </p>

        <div className="mb-8">
          {catgs.map((item, index) => (
            <button
              className="bg-white text-blue-700 shadow-sm border-none rounded-none text-xl inline-block px-5 py-2 mr-3 mb-2 capitalize focus:outline-none focus:text-white focus:bg-blue-700"
              key={index}
              value={item}
              onClick={filterData}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid Property   */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={postPreviewVariants}
        >
          {data &&
            data.map((item, index) => (
              <motion.div
                className="shadow-md mb-4 hover:shadow-xl transition-all"
                key={index}
              >
                <Link href="/project/[id]" as={`/project/${item.id}`}>
                  <a className="block pb-3 project-link relative overflow-hidden">
                    <div className="h-60 overflow-hidden">
                      <Image
                        src={`/assets/${item.img}`}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                      />
                      <p className="absolute top-0 left-0">
                        {item.tags.map((data, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-sm font-semibold mb-1 shadow-sm inline-block mr-1 p-1"
                          >
                            {data}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="pl-3">
                      <h5 className="text-xl mt-2 mb-1">
                        {" "}
                        {item.title.slice(0, 20)}...
                      </h5>
                      <p className="text-gray-400"> {item.url} </p>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
