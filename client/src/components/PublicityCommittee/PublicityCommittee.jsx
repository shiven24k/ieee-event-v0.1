import React from 'react';

const publicityCommittee = [
    { name: "Prof. Richa Mehta", institute: "CEC, CGC Jhanjeri, Mohali, Punjab" },
    { name: "Prof. Sonia Bhukra", institute: "CEC, CGC Jhanjeri, Mohali, Punjab" },
    { name: "Prof. Puneet", institute: "CEC, CGC Jhanjeri, Mohali, Punjab" },
    { name: "Prof. Manbir Kaur Brar", institute: "CEC, CGC Jhanjeri, Mohali, Punjab" }
  ];
  
// // const hierarchy = [
// //   "Eudoxia Research University, New Castle, Delaware, USA",
// //   "Indian Institute of Technology, Varanasi, U.P, India",
// //   "Indian Institute of Technology, Ropar, Punjab, India",
// //   "Indian Institute of Information Technology, Pune, India",
// //   "Dr B R Ambedkar National Institute of Technology, Jalandhar, India",
// //   "KIET Group of Institutions, Ghaziabad, India",
// //   "Punjab Engineering College, Chandigarh, India",
// //   "Lovely Professional University, Punjab, India",
// //   "Chitkara University, Punjab, India",
// //   "Chandigarh University, Chandigarh, India",
// //   "SGT University, Gurugram, India",
// //   "Galgotias College of Engineering and Technology, Greater Noida, India",
// //   "School of Engineering Design and Automation, GNA University, Phagwara, Punjab, India",
// //   "Thapar Institute of Engineering and Technology, Patiala, Pubjab, India",
// //   "Chandigarh Group of Colleges, Jhanjeri India",
// //   "Noida Institute Of Engineering and Technology, Greater Noida, U.P, India",
// //   "Galgotias College of Engg. and Technology Greater Noida, U.P, India",
// //   "Calcutta Institute of Technology, Howrah, West Bengal, India",
// //   "Marwadi University, Rajkot, Gujarat, India",
// //   "SR University",
// //   "Sharda University, Greater Noida, U.P, India",
// //   "Parul University, Vadodara, Gujarat, India",
// //   "Raj Kumar Goel Institute of Technology, Ghaziabad, UP, India",
// //   "SOE ADYPU",
// //   "Christ University, Bengaluru, Karnataka, India",
// //   "Gujarat Technological University, Gujarat, India",
// //   "RVITM, Bangalore",
// //   "Bennett University, Greater Noida, India",
// //   "Graphic Era University, Deheradun India",
// //   "Bhilai Institute of Technology, Chhattisgarh, India",
// //   "Krishna School of Pharmacy & Research, Drs. Kiran & Pallavi Patel Global University (KPGU), Varnama, Vadodara, Gujarat-391243.",
// //   "Rayat Bahra University, Chandigarh, India",
// //   "Pimpri Chinchwad University, Pune, India",
// //   "MMU (Deemed To Be University), Mullana, Haryana, India",
// //   "Swami Vivekanand Subharti University, India",
// //   "CT Institute of Technology and Research, India",
// //   "NIRMA University, Ahmedabad, India",
// //   "Shridhar University, India",
// //   "Chandigarh Engineering College, Jhanjeri, Mohali, India",
// //   "MANIT(Maulana Azad National Institute of Technology), Bhopal, India",
// //   "G L Bajaj Institute of Technology and Management, India",
// //   "Manav Rachna University, Faridabad, India",
// //   "Bharati Vidyapeeth's College of Engineering, Delhi, India",
// //   "Bharati Vidyapeeth (Deemed to be University) Institute of Management and Research, New Delhi, India",
// //   "R C Patel Institute of Technology, Shirpur, India",
// //   "Rungta College of Engineering and Technology, Bhilai, India",
// //   "Prof. Babasaheb Ambedkar Technological University, Lonere, Maharastra",
// //   "Yashoda Technical Campus Satara, India",
// //   "Medicaps University, Indore, India",
// //   "Panipat Institute of Engineering and Technology, India",
// //   "GLA UNIVERSITY",
// //   "GLA University, Mathura",
// //   "GLBITM, Greater Noida",
// //   "Christ university",
// //   "Rungta College of Engineering and Technology, Bhilai, India",
// //   "Vivekananda Global University, Jaipur, India",
// //   "ITS Engineering College, Greater Noida, U.P., India",
// //   "Parul University, Vadodara, Gujarat, India",
// //   "Prof. N. G. P. Institute of Technology, Jaipur, India"
// // ];
// // Sort the array based on the hierarchy
// steeringCommittee.sort((a, b) => {
//   return hierarchy.indexOf(a.institute) - hierarchy.indexOf(b.institute);
// });
// // Update the sno values to reflect the new order
// steeringCommittee.forEach((member, index) => {
//   member.sno = index + 1;
// });

const Publicity = () => {
  return (
    <div>
      
      <div className='container mx-auto p-4 pt-20 sm:pt-4'>
        <div className="flex flex-wrap w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Publicity Committee
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            {publicityCommittee.map((member, index) => (
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

export default Publicity;