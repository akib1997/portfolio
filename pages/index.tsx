import { motion } from "framer-motion";
import Ticker from "react-ticker";

import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Projects from "../components/Projects";
import Social from "../components/Social";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | Shuaib Hasan Akib</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.section className="banner min-h-screen flex items-center justify-center relative px-4">
        {/* Main Image */}
        <Image
          src="/assets/banner-bg.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          alt="Shuaib Hasan Akib"
          layout="fill"
          objectFit="cover"
          quality="100"
        />

        <div className="z-20 text-white">
          {/* Profile Image */}
          <motion.div
            initial={{ y: -100, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="w-52 h-52 rounded-full overflow-hidden mx-auto block mb-4"
          >
            <Image
              src="/assets/profile.jpg"
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
              alt="Shuaib Hasan Akib"
              layout="responsive"
              width="400"
              height="400"
              quality="100"
            />
          </motion.div>
          {/* Profile Image */}
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
            className="text-5xl font-medium"
          >
            Shuaib Hasan Akib
          </motion.h1>

          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className="text-3xl"
          >
            Frontend Developer
          </motion.h3>
          <Ticker speed={5}>
            {() => (
              <h6 className="capitalize text-center text-sm whitespace-pre font-medium">
                HTML, CSS, scss, bootstrap, tailwindcss, javascript, jquery,
                react, nextjs, typescript.
              </h6>
            )}
          </Ticker>
        </div>
      </motion.section>

      <About />
      <Projects />
      <Testimonial />
      <Social />
      <Footer />
    </>
  );
}
