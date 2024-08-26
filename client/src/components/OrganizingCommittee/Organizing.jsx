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
    <h1 className="text-3xl font-bold mb-4 text-center">Orgainising Commettiee</h1>
      <div className='overflow-x-auto'>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-red-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Sr. No.</th>
            <th className="py-3 px-6 text-left">Faculty Name</th>
            <th className="py-3 px-6 text-left">Designation</th>
            <th className="py-3 px-6 text-left">Contact Number</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light">
          {facultyData.map((faculty) => (
            <tr key={faculty.srNo} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className="py-3 px-6 text-left whitespace-nowrap">{faculty.srNo}</td>
              <td className="py-3 px-6 text-left">{faculty.name}</td>
              <td className="py-3 px-6 text-left">{faculty.designation}</td>
              <td className="py-3 px-6 text-left">{faculty.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  );
};

export default FacultyTable;