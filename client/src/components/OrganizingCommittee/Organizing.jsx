import React from 'react';

const facultyData = [
  { srNo: 1, name: 'Dr. Hunny Pahuja', designation: 'HOD', contact: '9729288808' },
  { srNo: 2, name: 'Dr. Sarabpreet Kaur', designation: 'Professor', contact: '9779454366' },
  { srNo: 3, name: 'Dr. Pardeep Kumar Jindal', designation: 'Associate Professor', contact: '9872495684' },
  { srNo: 4, name: 'Dr. Ankita Aggarwal', designation: 'Associate Professor', contact: '9996021548' },
  { srNo: 5, name: 'Dr. Ankur Garg', designation: 'Associate Professor', contact: '9468433090' },
  { srNo: 6, name: 'Dr. Shivani Goyal', designation: 'Assistant Professor', contact: '8264239901' },
  { srNo: 7, name: 'Dr. Raj Kumar', designation: 'Assistant Professor', contact: '8566986679' },
  { srNo: 8, name: 'Dr. Archana Kanwar', designation: 'Assistant Professor', contact: '9041084001' },
  { srNo: 9, name: 'Ms. Richa Mehta', designation: 'Assistant Professor', contact: '9781247703' },
  { srNo: 10, name: 'Ms. Sonia Bhukra', designation: 'Assistant Professor', contact: '8427055363' },
  { srNo: 11, name: 'Ms. Bhupinder Kaur', designation: 'Assistant Professor', contact: '9501840222' },
  { srNo: 12, name: 'Mr. Parveen Kumar', designation: 'Assistant Professor', contact: '9914452153' },
  { srNo: 13, name: 'Ms. Manbir Kaur Brar', designation: 'Assistant Professor', contact: '9855081229' },
  { srNo: 14, name: 'Mr. Taranjeet Singh', designation: 'Lab Instructor', contact: '8360888698' },
  { srNo: 15, name: 'Mr. Tirth Singh', designation: 'Lab Instructor', contact: '9056730308' },
  { srNo: 16, name: 'Mr. Ravinder Singh', designation: 'Office Assistant', contact: '7888849196' },
];

const FacultyTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Organising Committee</h1>
      
      {/* Chief Patrons */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            CHIEF PATRONS
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              S. Rashpal Singh Dhaliwal, Chairman, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Mr. Arsh Dhaliwal, Managing Director, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Patrons */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto  ">
          <h1 className=" mb-5 text-[1.75rem] font-bold text-dark  text-4xl uppercase">
            PATRONS
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              Dr. Vinay Goyal, Executive Director, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Anish Gupta, Director Academics, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Anupamdeep Sharma, Registrar, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* General Chair */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            GENERAL CHAIR
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              Dr. Pradeep Reddy, Director Engineering, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Hunny Pahuja, HoD ECE, CGC Jhanjeri, CEC, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Organizing Secretary */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            ORGANIZING SECRETARY
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
          <li className="mb-4">
              Dr. Sajjan Singh, Vice Principal, CCE, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Ashwani K Sharma, HoD Applied Sciences, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Vikas Deep Mann, HoD ME-Civil, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Rini Saxena, HoD, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Anmol Gautam, Associate Professor, CCE, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Conference Chair */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            CONFERENCE CHAIR
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              Dr. Pradeep Kumar Jindal, CEC, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Conference Co-Chair */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            CONFERENCE CO-CHAIR
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              Dr. Shivani Goyal, CEC, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Publication Chair */}
      <div>
        <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto ">
          <h1 className="mb-5 text-[1.75rem] font-bold text-dark text-4xl uppercase">
            PUBLICATION CHAIR
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            <li className="mb-4">
              Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Ankita Aggarwal, CEC, CGC Jhanjeri
            </li>
            <li className="mb-4">
              Dr. Mirgendra, CEC, CGC Jhanjeri
            </li>
          </ul>
        </div>
      </div>

      {/* Organizing Team */}
    </div>
  );
};

export default FacultyTable;