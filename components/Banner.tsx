import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Banner() {
  return (
    <>
      <section className="banner min-h-screen flex items-center ustify-center relative px-4">
        <div className="z-20 text-white max-w-6xl mx-auto w-full">
          <motion.p
            className="text-xl font-medium"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.5,
            }}
            className="text-3xl sm:text-4xl lg:text-7xl font-semibold my-3 text-gray-100"
          >
            Shuaib Hasan Akib
          </motion.h1>

          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: "easeIn",
              type: "tween",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-300"
          >
            I make things that people see on the web
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: "easeIn",
              type: "tween",
            }}
            className="max-w-2xl my-8 lg:my-12 text-lg tracking-wide"
          >
            I’m a web developer specializing in building and designing
            exceptional digital experiences. Currently, I’m focused on building
            accessible, human-centered products at
            <a
              href="https://brainstation-23.com"
              target="_blank"
              className="inline-block text-mainColor relative font-semibold tracking-wider text-lg ml-1 hover-underline"
            >
              Brain Station 23
              {/* <span className="w-full h-px absolute bottom-0.5 left-0 bg-mainColor"></span> */}
            </a>
          </motion.p>
          <Link href="/akib.pdf">
            <a className="inline-block px-7 py-2 bg-gradient-to-b from-mainColor to-mainColorLight transition-all hover:from-mainColorLight hover:to-mainColor  rounded text-white text-lg">
              My Resume
            </a>
          </Link>
          {/* <Ticker speed={4}>
            {() => (
              <h6 className="capitalize text-center text-lg whitespace-pre font-medium">
                HTML, CSS, scss, bootstrap, tailwindcss, javascript, jquery,
                reactjs, nextjs, typescript, wordpress, git, etc.
              </h6>
            )}
          </Ticker> */}
        </div>
      </section>
    </>
  );
}

export default Banner;
