import { ProjectList } from "@/lib/constant";
import React from "react";
import ProjectCard from "@/components/CommonComponents/ProjectCard";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ProjectList;
}

async function ProjectSection() {
  const projectListsData = await getData();

  return (
    <>
      {projectListsData &&
        projectListsData.map((data: any) => {
          return (
            <div key={data.id}>
              <ProjectCard
                title={data.title}
                name={data.projectTitle}
                desc={data.desc}
                imageSrc={data.image}
                link={data.link}
                badge={data.badge}
              />
            </div>
          );
        })}
    </>
  );
}

export default ProjectSection;
