import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ data }) {
  console.log(data);
  return (
    <>
      <div className="shadow-md mb-4 hover:shadow-xl transition-all h-96">
        <div className="pb-3 project-lin relative overflow-hidden flex">
          <div className="overflow-hidden h-96">
            <Image
              src={`https:${data.projectImages[0].fields.file.url}`}
              alt={data.projectTitle}
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-0 left-0">
              {data.projectTags?.map((data, i) => (
                <span
                  key={i}
                  className="bg-mainColorLight text-sm font-light tracking-wide mb-1 shadow-sm uppercase inline-block mr-1 p-1"
                >
                  {data}
                </span>
              ))}
            </p>
          </div>

          <div className="pl-3">
            <h5 className="text-xl mt-2 mb-1">
              {data.projectTitle?.slice(0, 20)}...
            </h5>
            <p className="text-gray-400"> {data.projectUrl} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
