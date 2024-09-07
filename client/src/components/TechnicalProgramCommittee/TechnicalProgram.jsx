import React from 'react';

const technicalProgramCommittee = [
  {
    sno: 1,
    name: "Dr. R. K. Singh",
    designation: "Professor",
    institute: "IIT, BHU"
  },
  {
    sno: 2,
    name: "Dr. Neha Sardana",
    designation: "Associate Professor",
    institute: "IIT Ropar"
  },
  {
    sno: 3,
    name: "Dr. Renuka Sharma",
    designation: "Professor",
    institute: "SGT University"
  },
  {
    sno: 4,
    name: "Dr. Balwinder Raj",
    designation: "Associate Professor",
    institute: "NIT Jalandhar"
  },
  {
    sno: 5,
    name: "Dr. Ruchi",
    designation: "Professor",
    institute: "Chandigarh University"
  },
  {
    sno: 6,
    name: "Dr. Prashant Upadhyaya",
    designation: "Associate Professor",
    institute: "Chandigarh University"
  },
  {
    sno: 7,
    name: "Dr. Parvin Kumar",
    designation: "Professor and Associate Dean R & D",
    institute: "KIET Group of Institutions, Delhi-NCR, Ghaziabad"
  },
  {
    sno: 8,
    name: "Dr. Manoj Sindhwani",
    designation: "Associate Professor and Assistant Dean",
    institute: "Lovely Professional University"
  },
  {
    sno: 9,
    name: "Dr. Jaskirat Kaur",
    designation: "Assistant Professor",
    institute: "Punjab Engineering College (Deemed to be University) Chandigarh"
  },
  {
    sno: 10,
    name: "Dr. Abhas Kanungo",
    designation: "Associate Professor",
    institute: "KIET Group of Institutions, Delhi-NCR, Ghaziabad"
  },
  {
    sno: 11,
    name: "Dr. Shubham Shukla",
    designation: "Assistant Professor",
    institute: "Indian Institute of Information Technology Pune (IIIT-P)"
  },
  {
    sno: 12,
    name: "Dr. Gurpreet Singh",
    designation: "Associate Professor and Academic Head",
    institute: "Chitkara University, Punjab"
  },
  {
    sno: 13,
    name: "Dr. Sanjay Kumar",
    designation: "Professor",
    institute: "Galgotias College of Engineering and Technology, Gr. Noida (U.P)"
  },
  {
    sno: 14,
    name: "Dr. Sunil Kumar Paswan",
    designation: "Assistant Professor",
    institute: "School of Engineering Design and Automation, GNA University, Phagwara, Punjab"
  },
  {
    sno: 15,
    name: "Dr. Hari Shankar Singh",
    designation: "Associate Professor",
    institute: "Thapar Institute of Engineering and Technology, Patiala"
  },
  {
    sno: 16,
    name: "Dr. Preetinder Kaur",
    designation: "Associate Professor",
    institute: "Chandigarh College of Engineering, CGC, Jhanjeri"
  },
  {
    sno: 17,
    name: "Dr. Anamol Gautam",
    designation: "Associate Professor",
    institute: "Department of Applied Science, Chandigarh College of Engineering- Chandigarh Group of Colleges Jhanjeri India"
  },
  {
    sno: 18,
    name: "Dr. Rochak Bajpai",
    designation: "Assistant Professor",
    institute: "KIET Group of Institutions, Delhi-NCR, Ghaziabad"
  }
];

// Define the hierarchy of institutes
const hierarchy = [
  "IIT, BHU",
  "IIT Ropar",
  "Indian Institute of Information Technology Pune (IIIT-P)",
  "NIT Jalandhar",
  "KIET Group of Institutions, Delhi-NCR, Ghaziabad",
  "Punjab Engineering College (Deemed to be University) Chandigarh",
  "Lovely Professional University",
  "Chitkara University, Punjab",
  "Chandigarh University",
  "SGT University",
  "Galgotias College of Engineering and Technology, Gr. Noida (U.P)",
  "School of Engineering Design and Automation, GNA University, Phagwara, Punjab",
  "Thapar Institute of Engineering and Technology, Patiala",
  "Chandigarh College of Engineering, CGC, Jhanjeri",
  "Department of Applied Science, Chandigarh College of Engineering- Chandigarh Group of Colleges Jhanjeri India",
  ""
];

// Sort the array based on the hierarchy
technicalProgramCommittee.sort((a, b) => {
  return hierarchy.indexOf(a.institute) - hierarchy.indexOf(b.institute);
});
// Update the sno values to reflect the new order
technicalProgramCommittee.forEach((member, index) => {
  member.sno = index + 1;
});

const TechnicalProgram = () => {
  return (
    <div>
      {/* Technical Program Community */}
      <div className='container mx-auto p-4'>
        <div className="flex flex-wrap w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            Technical Program Community
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            {technicalProgramCommittee.map((member, index) => (
              <li key={index} className="mb-4">
                {member.name}, {member.institute}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgram;