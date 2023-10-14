import ProjectSection from "@/components/Pages/Projets/ProjectSection";
import StarHeading from "@/components/elements/StarHeading";
import React, { Suspense } from "react";

function Projects() {
  return (
    <>
      <div className=" container my-8">
        <StarHeading heading="ALL PROJECTS" />
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ProjectSection />
        </div>
      </div>
    </>
  );
}

export default Projects;
