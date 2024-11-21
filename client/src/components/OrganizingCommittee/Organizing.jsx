import React from 'react';
import Advisory from '../AdvisoryCommittee/AdvisoryCommittee';
import Steering from '../SteeringCommittee/SteeringCommittee';
import Technical from '../TechnicalProgramCommittee/TechnicalProgram';
import Finance from '../FinanceCommittee/FinanceCommittee';
import Publication from '../PublicationCommittee/PublicationCommittee';
import Publicity from '../PublicityCommittee/PublicityCommittee';
import Hospitality from '../HospitalityCommittee/HospitalityCommittee';
import Accommodation from '../AccommodationCommittee/AccommodationCommittee';
import Transportation from '../TransportationCommittee/TransportationCommittee';
import StudentTeam from '../StudentTeam/StudentTeam';



const sections = [
  {
    title: "CHIEF PATRONS",
    items: [
      "Sardar Rashpal Singh Dhaliwal, Chairman, CGC Jhanjeri, Mohali, Punjab, India",
      "Mr. Arsh Dhaliwal, Managing Director, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "PATRONS",
    items: [
      "Prof. Vinay Goyal, Executive Director, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Anish Gupta, Director Academics, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Anupamdeep Sharma, Registrar, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "GENERAL CHAIR",
    items: [
      "Prof. Ch. Pradeep Reddy, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Hunny Pahuja, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Arun Kumar Singh, PEC, Chandigarh, India"
      
    ]
  },
 
  {
    title: "CONFERENCE CHAIR",
    items: [
      "Prof. Pardeep Kumar Jindal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Shivani Goyal, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "ORGANIZING SECRETARY",
    items: [
      "Prof. Ashwani K Sharma, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Vikasdeep Mann, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Raj Kumar, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      
      // "Prof. Vikas Deep Mann, HoD ME-Civil, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Prof. Rini Saxena, HoD, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Prof. Anmol Gautam, Associate Professor, CCE, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "TECHNICAL PROGRAM CHAIR",
    items: [
      "Prof. Vineet Mehan, NIMS University Jaipur, Rajasthan, India",
      "Prof. K.S Sandha, Thapar University, Patiala, Punjab, India",
      "Prof. Vibhav Kumar Sachan, KIET, Ghaziabad, Uttar Pradesh, India",

      "Prof. Sajjan Singh, CCE, CGC Jhanjeri, Mohali, Punjab, India",
      
      "Prof. Rini Saxena, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      ,
      // "Prof. Anmol Gautam, Associate Professor, CCE, CGC Jhanjeri, Mohali, Punjab, India"

    ]
  },
  
  {
    title: "PUBLICATION CHAIR",
    items: [
   
      "Prof. Mirgendar Kumar, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Prof. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Ankita Aggarwal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Prof. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "PUBLICITY CHAIR",
    items: [
      
      "Prof. Ankur Garg, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      
      // "Prof. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Ankita Aggarwal, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Prof. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "FINANCE CHAIR",
    items: [
      
      "Prof. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Shivani Goyal, CEC, CGC Jhanjeri, Mohali, Punjab, India"
      // "Prof. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  },
  {
    title: "REGISTRATION CHAIR",
    items: [
      "Prof. Ankur Garg, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Sarabpreet Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      "Prof. Bhupinder Kaur, CEC, CGC Jhanjeri, Mohali, Punjab, India",
      // "Dr. Mirgendra, CEC, CGC Jhanjeri, Mohali, Punjab, India"
    ]
  }
  
];

const FacultyTable = () => {
  return (
    <>
    <div className="container mx-auto p-4 pt-20 sm:pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center uppercase">Organising Committee</h1>
      {sections.map((section, index) => (
        <div >
          <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto">
            <h1 className="mb-5 sm:text-[1.75rem] font-bold text-dark uppercase">
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
    <Steering />
    <Technical />
    <Advisory />
    <Finance/>
    <Publication/>
    <Publicity/>
    <Hospitality/>
    <Accommodation/>
    <Transportation/>
    <StudentTeam/>
    
    
    </>
  );
  
};

export default FacultyTable;