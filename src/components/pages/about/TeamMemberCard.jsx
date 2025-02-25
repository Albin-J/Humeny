import React from "react";

const TeamMemberCard = ({ name, img, title }) => {
  return (
    <div className="group relative h-60 w-72 overflow-hidden rounded-xl bg-red-200 text-white transition-all duration-300">
      {/* Background image div */}
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:rotate-2 group-hover:scale-105"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Blur overlay */}
      <div className="absolute inset-0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100"></div>
      {/* The title will only hide for large screen as you can only hover using the mouse */}
      <div className="absolute bottom-0 w-full rounded-lg px-2 pb-2 pt-0 backdrop-blur-xl transition-all duration-500 group-hover:bottom-0 lg:-bottom-7">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
