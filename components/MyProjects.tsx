import { createClient } from "contentful";
import React from "react";
import ProjectCard from "./common/ProjectCard";

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENT_ACCESS_TOKEN,
//   });

//   const response = await client.getEntries({ content_type: "myProjects" });

//   return {
//     props: {
//       projects: response.items,
//     },
//   };
// }

function MyProjects({ projects }) {
  return (
    <>
      <section className="my-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-3xl font-bold mb-1">Some Things I’ve Built</h2>
            <span className="w-32 h-px bg-mainColor block"></span>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            {projects?.map((data, idx) => (
              <ProjectCard key={idx} data={data.fields} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProjects;
