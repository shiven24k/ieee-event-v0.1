import React from 'react';

const studentData = [
  {
    name: 'Akshat Singh',
    contact: '9354223577',
    rollNo: '2129605',
    branch: 'CSE',
    membershipId: '100226571',
    email: 'akshatsingh2473@gmail.com',
  },
  {
    name: 'Chirag Sahani',
    contact: '9528299664',
    rollNo: '2129639',
    branch: 'CSE',
    membershipId: '100226940',
    email: 'sahanichirag9568@gmail.com',
  },
  {
    name: 'Gaurav Kumar Biswas',
    contact: '6294697057',
    rollNo: '2129651',
    branch: 'CSE',
    membershipId: '100256072',
    email: 'biswasgaurav28@gmail.com',
  },
  {
    name: 'Shiven Kashyap',
    contact: '8081107246',
    rollNo: '2129742',
    branch: 'CSE',
    membershipId: '100260600',
    email: 'kashyapshiven2002@gmail.com',
  },
  {
    name: 'Aakanksha',
    contact: '7898960787',
    rollNo: '2230717',
    branch: 'CSE',
    membershipId: '100231663',
    email: 'Kanshuso083@gmail.com',
  },
  {
    name: 'Aakanksha Dubey',
    contact: '7898960787',
    rollNo: '2230717',
    branch: 'CSE',
    membershipId: '100231663',
    email: 'kanshuso083@gmail.com',
  },
  {
    name: 'Anchal Sangwan',
    contact: '7982714936',
    rollNo: '2230911',
    branch: 'ECE',
    membershipId: '100247398',
    email: 'asanchal05@gmail.com',
  },
  {
    name: 'Dhananjay Nagar',
    contact: '8219470175',
    rollNo: '2230919',
    branch: 'ECE',
    membershipId: '100251633',
    email: 'picaos321@gmail.com',
  },
  {
    name: 'Prakhar Kansal',
    contact: '9478560608',
    rollNo: '2230938',
    branch: 'ECE',
    membershipId: '100243365',
    email: 'kansalprakhar7@gmail.com',
  },
  {
    name: 'Uday Sharma',
    contact: '9034683172',
    rollNo: '2230963',
    branch: 'ECE',
    membershipId: '100243362',
    email: 'uday777sh@gmail.com',
  },
  {
    name: 'Vishwas Miglani',
    contact: '7307416770',
    rollNo: '2230967',
    branch: 'ECE',
    membershipId: '100243276',
    email: 'vishwasmiglani11@gmail.com',
  },
  {
    name: 'Rishiraj Dutta',
    contact: '8011625080',
    rollNo: '2231108',
    branch: 'AIML',
    membershipId: '100251525',
    email: 'rishirajorg@gmail.com',
  },
  {
    name: 'Sawan Badhwar',
    contact: '7696073688',
    rollNo: '2231248',
    branch: 'R & AI',
    membershipId: '100230712',
    email: 'sawan272004@gmail.com',
  },
  {
    name: 'Prakshi',
    contact: '9779206799',
    rollNo: '2239609',
    branch: 'ECE',
    membershipId: '100251469',
    email: 'prakshidhawan6@gmail.com',
  },
  {
    name: 'Unith Kumar Sharma',
    contact: '8607705140',
    rollNo: '2240885',
    branch: 'CSE',
    membershipId: '100259497',
    email: 'unithkumarsharma@gmail.com',
  },
  {
    name: 'Pranshu',
    contact: '7355834231',
    rollNo: '2330592',
    branch: 'CSE',
    membershipId: '100256005',
    email: 'priyanshuharitash73@gmail.com',
  },
  {
    name: 'Qazi Mohammad Zaid',
    contact: '8082771896',
    rollNo: '2330846',
    branch: 'R & AI',
    membershipId: '100256100',
    email: 'qazi.zaid16@gmail.com',
  },
  {
    name: 'Harshpreet Singh',
    contact: '7357287187',
    rollNo: '2338673',
    branch: 'Block Chain (CCE)',
    membershipId: '100230876',
    email: 'harsh.x.preet@gmail.com',
  },
].map((student, index) => ({ ...student, index: index + 1 })); 
//function is used to iterate over the studentData array 
//and add an index property to each student object. 
//The index property is set to the current index of the array 
//plus one, making it a 1-based index instead of the default 0-based index.

function StudentTeam() {
  return (
    <div className="container mx-auto pt-20 p-1 sm:p-4 ">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center uppercase">Student Team</h1>

    <div className="mt-4 p-2 sm:p-4">
      <div className="flex flex-wrap justify-center mb-5">
        {[
          { name: "Vishwas Miglani", role: "Chairperson" },
          { name: "Prakhar Kansal", role: "Co-Chairperson" },
          { name: "Dhananjay Nagar", role: "Secretary" },
          { name: "Uday Sharma", role: "Treasurer" },
          { name: "Anchal Sangwan", role: "Vice-Chair" },
          { name: "Aakanksha Dubey", role: "WebMaster" }
        ].map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4 text-lg sm:text-2xl mb-4 flex flex-col items-center">
            <span className="font-semibold">{member.name}</span>
            <span>{member.role}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-red-600 text-white uppercase text-xs sm:text-sm leading-normal">
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Sr. No.</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Name of the Student Member</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Contact Number</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">University Roll No.</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Branch</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Membership ID</th>
            <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Mail ID</th>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm font-light">
          {studentData.map((student) => (
            <tr key={student.index} className="border-b border-gray-200 hover:bg-gray-100 font-semibold">
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left whitespace-nowrap">{student.index}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.name}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.contact}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.rollNo}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.branch}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.membershipId}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default StudentTeam;