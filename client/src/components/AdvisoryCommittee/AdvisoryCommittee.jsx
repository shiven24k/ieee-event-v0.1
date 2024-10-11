import React from 'react';

const advisoryCommittee = [
    {
      sno: 1,
      name: "Prof. Kulbir Singh",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 2,
      name: "Prof. K S Sandha",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 3,
      name: "Prof. Hem Dutt Joshi",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 4,
      name: "Prof. Ankush Kansal",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 5,
      name: "Prof. Anil Verma",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 6,
      name: "Prof. Moon Inder Singh",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 7,
      name: "Prof. Ajay Kakkar",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 8,
      name: "Prof. Neeru Jindal",
      institute: "Thapar University, Patiala"
    },
    {
      sno: 9,
      name: "Prof. Balwinder Raj",
      institute: "NIT Jalandhar"
    },
    {
      sno: 10,
      name: "Prof. Ashwani K Rana",
      institute: "NIT Hamirpur"
    },
    {
      sno: 11,
      name: "Prof. Manoj Mittal",
      institute: "IKGPTU Jalandhar"
    },
    {
      sno: 12,
      name: "Prof. Sharad Sharma",
      institute: "MMU Mullana"
    },
    {
      sno: 13,
      name: "Prof. Davinder Kumar Saini",
      institute: "CCET, Sec-26, Chandigarh"
    },
    {
      sno: 14,
      name: "Prof. Gitanjali",
      institute: "Chitkara, Rajpura"
    },
    {
      sno: 15,
      name: "Prof. Ramanpreet Kaur",
      institute: "CGC Landran, Mohali, Punjab"
    },
    {
      sno: 16,
      name: "Prof. Sharat Tiwari",
      institute: "Parul University, Vadodara, Gujarat"
    },
    {
      sno: 17,
      name: "Prof. Reenuka Sharma",
      institute: "SGT University"
    },
    {
      sno: 18,
      name: "Prof. Poonam",
      institute: "PEC, Chandigarh"
    },
    {
      sno: 19,
      name: "Prof. Simranjeet Singh",
      institute: "PEC, Chandigarh"
    },
    {
      sno: 20,
      name: "Prof. Vibhav Kumar Sachan",
      institute: "KIET, Ghaziabad"
    },
    {
      sno: 21,
      name: "Prof. Ruchita Gautam",
      institute: "KIET, Ghaziabad"
    },
    {
      sno: 22,
      name: "Prof. Praveen Kaushik",
      institute: "KIET, Ghaziabad"
    },
    {
      sno: 23,
      name: "Prof. Shubham Shukla",
      institute: "IIIT Pune"
    },
    {
      sno: 24,
      name: "Prof. Priya Ranjan",
      institute: "UPES, Dehradun"
    },
    {
      sno: 25,
      name: "Prof. Manoj Sindhwani",
      institute: "LPU, Jalandhar"
    },
    {
      sno: 26,
      name: "Prof. Abhas Kanungo",
      institute: "KIET, Ghaziabad"
    },
    {
      sno: 27,
      name: "Prof. Rochak Bajpai",
      institute: "UPES, Dehradun"
    },
    {
      sno: 28,
      name: "Prof. Preeti Sharma",
      institute: "Chitkara University, Rajpura"
    },
    {
      sno: 29,
      name: "Prof. Ashwani K Sharma",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 30,
      name: "Prof. Vikas Deep Mann",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 31,
      name: "Prof. Sajjan Singh",
      institute: "CCE, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 32,
      name: "Prof. Rini Saxena",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 33,
      name: "Prof. Anshu Tomar",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 34,
      name: "Prof. Shavinder Singh",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 35,
      name: "Prof. Rubal Jeet",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 36,
      name: "Prof. Shanky",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    },
    {
      sno: 37,
      name: "Prof. Puneet",
      institute: "CEC, CGC Jhanjeri, Mohali, Punjab"
    }
  ];

// const hierarchy = [
//   "Eudoxia Research University, New Castle, Delaware, USA",
//   "Indian Institute of Technology, Varanasi, U.P, India",
//   "Indian Institute of Technology, Ropar, Punjab, India",
//   "Indian Institute of Information Technology, Pune, India",
//   "Dr B R Ambedkar National Institute of Technology, Jalandhar, India",
//   "KIET Group of Institutions, Ghaziabad, India",
//   "Punjab Engineering College, Chandigarh, India",
//   "Lovely Professional University, Punjab, India",
//   "Chitkara University, Punjab, India",
//   "Chandigarh University, Chandigarh, India",
//   "SGT University, Gurugram, India",
//   "Galgotias College of Engineering and Technology, Greater Noida, India",
//   "School of Engineering Design and Automation, GNA University, Phagwara, Punjab, India",
//   "Thapar Institute of Engineering and Technology, Patiala, Pubjab, India",
//   "Chandigarh Group of Colleges, Jhanjeri India",
//   "Noida Institute Of Engineering and Technology, Greater Noida, U.P, India",
//   "Galgotias College of Engg. and Technology Greater Noida, U.P, India",
//   "Calcutta Institute of Technology, Howrah, West Bengal, India",
//   "Marwadi University, Rajkot, Gujarat, India",
//   "SR University",
//   "Sharda University, Greater Noida, U.P, India",
//   "Parul University, Vadodara, Gujarat, India",
//   "Raj Kumar Goel Institute of Technology, Ghaziabad, UP, India",
//   "SOE ADYPU",
//   "Christ University, Bengaluru, Karnataka, India",
//   "Gujarat Technological University, Gujarat, India",
//   "RVITM, Bangalore",
//   "Bennett University, Greater Noida, India",
//   "Graphic Era University, Deheradun India",
//   "Bhilai Institute of Technology, Chhattisgarh, India",
//   "Krishna School of Pharmacy & Research, Drs. Kiran & Pallavi Patel Global University (KPGU), Varnama, Vadodara, Gujarat-391243.",
//   "Rayat Bahra University, Chandigarh, India",
//   "Pimpri Chinchwad University, Pune, India",
//   "MMU (Deemed To Be University), Mullana, Haryana, India",
//   "Swami Vivekanand Subharti University, India",
//   "CT Institute of Technology and Research, India",
//   "NIRMA University, Ahmedabad, India",
//   "Shridhar University, India",
//   "Chandigarh Engineering College, Jhanjeri, Mohali, India",
//   "MANIT(Maulana Azad National Institute of Technology), Bhopal, India",
//   "G L Bajaj Institute of Technology and Management, India",
//   "Manav Rachna University, Faridabad, India",
//   "Bharati Vidyapeeth's College of Engineering, Delhi, India",
//   "Bharati Vidyapeeth (Deemed to be University) Institute of Management and Research, New Delhi, India",
//   "R C Patel Institute of Technology, Shirpur, India",
//   "Rungta College of Engineering and Technology, Bhilai, India",
//   "Prof. Babasaheb Ambedkar Technological University, Lonere, Maharastra",
//   "Yashoda Technical Campus Satara, India",
//   "Medicaps University, Indore, India",
//   "Panipat Institute of Engineering and Technology, India",
//   "GLA UNIVERSITY",
//   "GLA University, Mathura",
//   "GLBITM, Greater Noida",
//   "Christ university",
//   "Rungta College of Engineering and Technology, Bhilai, India",
//   "Vivekananda Global University, Jaipur, India",
//   "ITS Engineering College, Greater Noida, U.P., India",
//   "Parul University, Vadodara, Gujarat, India",
//   "Prof. N. G. P. Institute of Technology, Jaipur, India"
// ];
// Sort the array based on the hierarchy
// advisoryCommittee.sort((a, b) => {
//   return hierarchy.indexOf(a.institute) - hierarchy.indexOf(b.institute);
// });
// Update the sno values to reflect the new order
// advisoryCommittee.forEach((member, index) => {
//   member.sno = index + 1;
// });

const Advisory = () => {
  return (
    <div>
      {/* Technical Program Community */}
      <div className='container mx-auto p-4 pt-20 sm:pt-4'>
        <div className="flex flex-wrap w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Advisory Committee
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            {advisoryCommittee.map((member, index) => (
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

export default Advisory;