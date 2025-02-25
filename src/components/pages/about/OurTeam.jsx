import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const OurTeam = () => {
  return (
    <div className="bg-take py-10">
      <p className="pb-10 text-center text-5xl font-bold text-take_care_primary">
        Our Team
      </p>
      <div className="600 grid items-center justify-items-center gap-y-10 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
        <TeamMemberCard
          name="Melon Musk"
          title="Melon Engineer"
          img="/images/team/person-1.jpg"
        />
        <TeamMemberCard
          name="Mark Lizardman"
          title="Software Engineer"
          img="/images/team/person-2.jpg"
        />
        <TeamMemberCard
          name="Cominu"
          title="Game Developer"
          img="/images/team/person-3.jpg"
        />
        <TeamMemberCard
          name="Helba"
          title="Graphic Designer"
          img="/images/team/person-4.jpg"
        />
        <TeamMemberCard
          name="Stevie"
          title="Software Engineer"
          img="/images/team/person-3.jpg"
        />
        <TeamMemberCard
          name="Dojegan"
          title="Content Writer"
          img="/images/team/person-1.jpg"
        />
      </div>
    </div>
  );
};

export default OurTeam;
