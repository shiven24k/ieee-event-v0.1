import React from 'react';

const advisoryCommittee = [
  {
    sno: 1,
    name: "Prof. Amritpal Singh",
    institute: "Durham University, UK"
  },
  {
    sno: 2,
    name: "Prof. Fariah Mahzabeen",
    institute: "North South University, Dhaka, Bangladesh"
  },
  {
    sno: 3,
    name: "Prof. Bulatova Evgenia Konstantinovna",
    institute: "ISA UrFU, Russia"
  },
  {
    sno: 4,
    name: "Prof. Kulbir Singh",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 5,
    name: "Prof. Hem Dutt Joshi",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 6,
    name: "Prof. Ankush Kansal",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 7,
    name: "Prof. Anil Verma",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 8,
    name: "Prof. Moon Inder Singh",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 9,
    name: "Prof. Ajay Kakkar",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 10,
    name: "Prof. Neeru Jindal",
    institute: "Thapar University, Patiala, Punjab, India"
  },
  {
    sno: 11,
    name: "Prof. Balwinder Raj",
    institute: "National Institute of Technology, Jalandhar, Punjab, India"
  },
  {
    sno: 12,
    name: "Prof. Ashwani K Rana",
    institute: "National Institute of Technology, Hamirpur, Himachal Pradesh, India"
  },
  {
    sno: 13,
    name: "Prof. Manoj Mittal",
    institute: "IK Gujral Punjab Technical University, Jalandhar, Punjab, India"
  },
  {
    sno: 14,
    name: "Prof. Sharad Sharma",
    institute: "Maharishi Markandeshwar University, Mullana, Haryana, India"
  },
  {
    sno: 15,
    name: "Prof. Davinder Kumar Saini",
    institute: "Chandigarh College of Engineering and Technology, Chandigarh, India"
  },
  {
    sno: 16,
    name: "Prof. Gitanjali",
    institute: "Chitkara University, Rajpura, Punjab, India"
  },
  {
    sno: 17,
    name: "Prof. Ramanpreet Kaur",
    institute: "Chandigarh Group of Colleges, Landran, Mohali, Punjab, India"
  },
  {
    sno: 18,
    name: "Prof. Sharat Tiwari",
    institute: "Parul University, Vadodara, Gujarat, India"
  },
  {
    sno: 19,
    name: "Prof. Reenuka Sharma",
    institute: "Shree Guru Gobind Singh Tricentenary University, Gurugram, Haryana, India"
  },
  {
    sno: 20,
    name: "Prof. Poonam",
    institute: "Punjab Engineering College, Chandigarh, India"
  },
  {
    sno: 21,
    name: "Prof. Simranjeet Singh",
    institute: "Punjab Engineering College, Chandigarh, India"
  },
  {
    sno: 22,
    name: "Prof. Ruchita Gautam",
    institute: "KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India"
  },
  {
    sno: 23,
    name: "Prof. Praveen Kaushik",
    institute: "KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India"
  },
  {
    sno: 24,
    name: "Prof. Shubham Shukla",
    institute: "Indian Institute of Information Technology, Pune, Maharashtra, India"
  },
  {
    sno: 25,
    name: "Prof. Priya Ranjan",
    institute: "University of Petroleum and Energy Studies, Dehradun, Uttarakhand, India"
  },
  {
    sno: 26,
    name: "Prof. Manoj Sindhwani",
    institute: "Lovely Professional University, Jalandhar, Punjab, India"
  },
  {
    sno: 27,
    name: "Prof. Abhas Kanungo",
    institute: "KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India"
  },
  {
    sno: 28,
    name: "Prof. Rochak Bajpai",
    institute: "University of Petroleum and Energy Studies, Dehradun, Uttarakhand, India"
  },
  {
    sno: 29,
    name: "Prof. Preeti Sharma",
    institute: "Chitkara University, Rajpura, Punjab, India"
  },
  {
    sno: 30,
    name: "Prof. Ashwani K Sharma",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 31,
    name: "Prof. Vikas Deep Mann",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 32,
    name: "Prof. Sajjan Singh",
    institute: "Chandigarh College of Education, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 33,
    name: "Prof. Rini Saxena",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 34,
    name: "Prof. Anshu Tomar",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 35,
    name: "Prof. Shavinder Singh",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 36,
    name: "Prof. Rubal Jeet",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 37,
    name: "Prof. Shanky",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
  },
  {
    sno: 38,
    name: "Prof. Puneet",
    institute: "Chandigarh Engineering College, CGC Jhanjeri, Mohali, Punjab, India"
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
//   "Thapar Institute of Engineering and Technology, Patiala, Punjab, India, Pubjab, India",
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
          <ul className="list-disc pl-5 ">
            {advisoryCommittee.map((member, index) => (
              <li key={index} className="text-lg sm:text-2xl mb-4">
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