import React from 'react';

const sections = [
  {
    title: "CHIEF PATRONS",
    items: [
      "S. Rashpal Singh Dhaliwal, Chairman, CGC Jhanjeri, Mohali, Punjab, India",
      "Mr. Arsh Dhaliwal, Managing Director, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "PATRONS",
    items: [
      "Dr. Vinay Goyal, Executive Director, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Anish Gupta, Director Academics, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Anupamdeep Sharma, Registrar, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "GENERAL CHAIR",
    items: [
      "Dr. Ch. Pradeep Reddy, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Hunny Pahuja, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Arun Kumar Singh, PEC, Chandigarh, India"
      
    ]
  },
 
  {
    title: "CONFERENCE CHAIR",
    items: [
      "Dr. Pardeep Kumar Jindal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Shivani Goyal, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "ORGANIZING SECRETARY",
    items: [
      "Dr. Ashwani K Sharma, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Raj Kumar, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      
      // "Dr. Vikas Deep Mann, HoD ME-Civil, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Rini Saxena, HoD, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Anmol Gautam, Associate Professor, CCE, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "TECHNICAL PROGRAM CHAIR",
    items: [
      "Dr. K.S Sandha, Thapar University, Patiala, Punjab, India",
      "Dr. Vibhav Kumar Sachan, KIET, Ghaziabad, Uttar Pradesh, India",

      "Dr. Sajjan Singh, CCE, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Vikas Deep Mann, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Rini Saxena, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      ,
      // "Dr. Anmol Gautam, Associate Professor, CCE, CGC Jhanjeri, Mohali, Punjab, India"

    ]
  },
  
  {
    title: "PUBLICATION CHAIR",
    items: [
   
      "Dr. Mirgendar Kumar, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Ankita Aggarwal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "PUBLICITY CHAIR",
    items: [
      
      "Dr. Ankur Garg, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      
      // "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Ankita Aggarwal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "FINANCE CHAIR",
    items: [
      
      "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Dr. Shivani Goyal, CEC, CGC Jhanjeri, Mohali, Punjab, India"
      // "Dr. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "REGISTRATION CHAIR",
    items: [
      "Dr. Ankur Garg, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Ms. Bhupinder Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  }
  
];

const FacultyTable = () => {
  return (
    <div className="container mx-auto p-4 pt-20 sm:pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Organising Committee</h1>
      {sections.map((section, index) => (
        <div >
          <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto">
            <h1 className="mb-5 text-xl sm:text-[1.75rem] font-bold text-dark uppercase">
              {section.title}
            </h1>
          </div>
          <div className="flex w-full text-lg sm:text-2xl">
            <ul className="list-disc pl-5">
              {section.items.map((item, idx) => (
                <li className="mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyTable;