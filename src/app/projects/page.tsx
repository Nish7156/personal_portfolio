import CardOutline from "@/components/CommonComponents/CardOutline";
import DetailCard from "@/components/Pages/About/DetailCard";
import Details from "@/components/Pages/About/Details";
import React from "react";

function Projects() {
  return (
    <>
      <div className=" container my-16">
        <h1 className="section-heading ">
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
          />
          All Projects
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
          />
        </h1>
        <section>
          <h2 className="section-heading mt-12">Comming Soon</h2>
        </section>
        <div className="my-4">
          <Details />
          <DetailCard />
          <CardOutline>
            jj
          </CardOutline>
        </div>
      </div>
    </>
  );
}

export default Projects;
