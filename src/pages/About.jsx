import { Gallery } from "@/components/pages/about/Gallery";
import OurTeam from "@/components/pages/about/OurTeam";
import TeamMemberCard from "@/components/pages/about/TeamMemberCard";
import Collage from "@/components/pages/global/Collage";
import React from "react";

const About = () => {
  return (
    <div>
      <Collage />
      {/* <OurTeam /> */}
      <Gallery />
    </div>
  );
};

export default About;
