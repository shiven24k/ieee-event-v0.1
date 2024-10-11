import React from 'react';

const steeringCommittee = [
    {
        sno: 1,
        name: "Prof. Vinay Goyal",
        title: "Executive Director",
        institute: "CGC Jhanjeri, Mohali, Punjab"
    },
    {
        sno: 2,
        name: "Prof. Anish Gupta",
        title: "Director Academics",
        institute: "CGC Jhanjeri, Mohali, Punjab"
    },
    {
        sno: 3,
        name: "Prof. Pradeep Reddy",
        title: "CEC",
        institute: "CGC Jhanjeri, Mohali, Punjab"
    }
];



const Steering = () => {
  return (
    <div>
      {/* Technical Program Community */}
      <div className='container mx-auto p-4 pt-20 sm:pt-4'>
        <div className="flex flex-wrap w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Steering Committee
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            {steeringCommittee.map((member, index) => (
              <li key={index} className="text-[1rem]">
                {member.name}, {member.institute}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steering;