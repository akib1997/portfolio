import Head from "next/head";
import About from "../components/About";
import Projects from "../components/Projects";
import Social from "../components/Social";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Testing from "../components/Testing";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Banner from "../components/Banner";
import WorksHistory from "../components/WorksHistory";
import MyProjects from "../components/MyProjects";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENT_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "myProjects" });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function Home({ projects }) {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return "Loading";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Akib Hasan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Shuaib hasan akib. Web developer, Frontend Developer, React Developer. Freelance web develope"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Banner />
      {/* <Testing jobs={jobs} /> */}
      <About />
      {/* <WorksHistory /> */}
      {/* <Projects /> */}
      {/* <MyProjects projects={projects} /> */}
      {/* <Testimonial /> */}
      <Social />
      {/* <Footer /> */}
    </>
  );
}
