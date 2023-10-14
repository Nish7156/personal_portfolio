import { ProjectList } from "@/lib/constant";
import React from "react";
import ProfileCard from "../Home/SmallCards/ProfileCard";
import LoadingCard from "@/components/CommonComponents/LoadingCard";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return ProjectList;
}

function ProjectSection() {
  const projectPromise = getData();

  return (
    <React.Suspense fallback={<LoadingCard />}>
      {projectPromise.then((projects) =>
        projects.map((data) => (
          <div key={data.id}>
            <ProfileCard
              title={data.title}
              name={data.projectTitle}
              desc={data.desc}
            />
          </div>
        ))
      )}
    </React.Suspense>
  );
}

export default ProjectSection;
