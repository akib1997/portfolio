import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import projectData from "../../../data/ProjectData";
import { motion } from "framer-motion";

export default function project() {
  const router = useRouter();

  let id = router.query.id;

  const strTonNumber = Number(id);

  const filterData = projectData.filter((di) => di.id === strTonNumber);

  return (
    <>
      <Head>
        <title> {filterData.map((item) => item.title)} </title>
      </Head>
      <div className="px-3">
        <div className="lg:w-2/3 sm:w-4/5 mx-auto">
          {filterData &&
            filterData.map((item, index) => (
              <div key={index}>
                <div className="md:flex h-screen">
                  <div className="md:w-1/4 md:pr-6 md:mt-40 my-12">
                    <h2 className="text-3xl mb-4 font-semibold">
                      Works Related With{" "}
                    </h2>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="capitalize font-medium text-purple-900 shadow mr-2 p-1 mb-1 inline-block"
                      >
                        {`${tag}, `}
                      </span>
                    ))}
                    <p className="text-3xl font-semibold mt-6 mb-3">URL:</p>
                    <Link href={item.url}>
                      <a
                        target="_blank"
                        className="block text-green-300 text-xl"
                      >
                        {item.url}
                      </a>
                    </Link>
                  </div>
                  <div className="md:w-3/4 h-full">
                    <h1 className="text-3xl text-left py-6">{item.title}</h1>
                    <div className="h-3/5 overflow-y-auto">
                      <Image
                        src={`/assets/${item.img}`}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                    <div className="text-left mt-4">
                      <Link href="/#projects">
                        <a className="bg-blue-500 text-white inline-block py-1 mt-4 font-semibold px-2">
                          Back To Home
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
