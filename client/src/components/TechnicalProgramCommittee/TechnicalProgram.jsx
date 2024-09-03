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
    name: "Neha Sardana",
    designation: "Associate Professor",
    institute: "IIT Ropar"
  },
  {
    sno: 3,
    name: "Dr. Renuka Sharma",
    designation: "Deputy Dean Research and Head Liaisoning Research",
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
    name: "Dr. PRASHANT UPADHYAYA",
    designation: "",
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
  }
];

// Define the hierarchy of designations
const hierarchy = [
  "Professor",
  "Professor and Associate Dean R & D",
  "Deputy Dean Research and Head Liaisoning Research",
  "Associate Professor",
  "Associate Professor and Assistant Dean",
  "Associate Professor and Academic Head",
  "Assistant Professor",
  ""
];

// Sort the array based on the hierarchy
technicalProgramCommittee.sort((a, b) => {
  return hierarchy.indexOf(a.designation) - hierarchy.indexOf(b.designation);
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
        <div className='overflow-x-auto'>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-red-500 text-white text-sm leading-normal">
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Designation</th>
              <th className="px-4 py-2 text-left">Institute & Location</th>
            </tr>
          </thead>
          <tbody>
            {technicalProgramCommittee.map((member, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{member.sno}</td>
                <td className="border px-4 py-2">{member.name}</td>
                <td className="border px-4 py-2">{member.designation}</td>
                <td className="border px-4 py-2">{member.institute}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgram;