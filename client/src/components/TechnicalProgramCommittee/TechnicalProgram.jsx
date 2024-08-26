import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

function TechnicalProgram() {
  return (
    <div>
      {/* Techical Program Community */}
   <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Techical Program Community
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
export default TechnicalProgram;