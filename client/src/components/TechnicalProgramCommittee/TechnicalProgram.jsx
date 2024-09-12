import React from 'react';

const technicalProgramCommittee = [
  {
    sno: 1,
    name: "Dr. R. K. Singh",
    designation: "Professor",
    institute: "IIT BHU"
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
    institute: "SGT University, Gurugram, Haryana"
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
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 6,
    name: "Dr. Prashant Upadhyaya",
    designation: "Associate Professor",
    institute: "Chandigarh University, Chandigarh, India"
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
    institute: "Lovely Professional University, Punjab"
  },
  {
    sno: 9,
    name: "Dr. Jaskirat Kaur",
    designation: "Assistant Professor",
    institute: "Punjab Engineering College, Chandigarh"
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
    institute: "Chandigarh Group of Colleges, Jhanjeri India"
  },
  {
    sno: 17,
    name: "Dr. Anamol Gautam",
    designation: "Associate Professor",
    institute: "Chandigarh Group of Colleges, Jhanjeri India"
  },
  {
    sno: 18,
    name: "Dr. Rochak Bajpai",
    designation: "Assistant Professor",
    institute: "KIET Group of Institutions, Delhi-NCR, Ghaziabad"
  },
  {
    sno: 19,
    name: "Prof. Ritesh Rastogi",
    designation: "Assistant Professor",
    institute: "Noida Institute Of Engineering and Technology, Greater Noida"
  },
  {
    sno: 20,
    name: "Prof. Abhishek Sen",
    designation: "Assistant Professor",
    institute: "Calcutta Institute of Technology, Howrah, West Bengal"
  },
  {
    sno: 21,
    name: "Prof. Shashi Kant Gupta",
    designation: "Assistant Professor",
    institute: "Eudoxia Research University, New Castle, Delaware, USA"
  },
  {
    sno: 22,
    name: "Prof. Uvesh Sipai",
    designation: "Assistant Professor",
    institute: "Marwadi University, Rajkot, India"
  },
  {
    sno: 23,
    name: "Prof. Saptadeepa Kalita",
    designation: "Assistant Professor",
    institute: "Sharda University, India"
  },
  {
    sno: 24,
    name: "Prof. Mohammad Shahnawaz Shaikh",
    designation: "Assistant Professor",
    institute: "Parul University, Vadodara, Gujarat, India"
  },
  {
    sno: 25,
    name: "Prof. Padam Singh",
    designation: "Assistant Professor",
    institute: "Galgotias College of Engg. and Technology Greater Noida, India"
  },
  {
    sno: 26,
    name: "Prof. Pramod Kumar Sagar",
    designation: "Assistant Professor",
    institute: "Raj Kumar Goel Institute of Technology, Ghaziabad, UP, India"
  },
  {
    sno: 27,
    name: "Prof. Shweta Agarwal",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 28,
    name: "Prof. Kannan M",
    designation: "Assistant Professor",
    institute: "Christ University, Bengaluru, India"
  },
  {
    sno: 29,
    name: "Prof. Sanket Ravishankar Trivedi",
    designation: "Assistant Professor",
    institute: "Gujarat Technological University, Gujarat, India"
  },
  {
    sno: 30,
    name: "Prof. Simar Preet Singh",
    designation: "Assistant Professor",
    institute: "Bennett University, Greater Noida, India"
  },
  {
    sno: 31,
    name: "Prof. Anshu Mehta",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 32,
    name: "Prof. Neeru",
    designation: "Assistant Professor",
    institute: "MMU (Deemed To Be University), Mullana, Haryana, India"
  },
  {
    sno: 33,
    name: "Prof. Arnika",
    designation: "Assistant Professor",
    institute: "Manav Rachna University, Faridabad, India"
  },
  {
    sno: 34,
    name: "Prof. Khushboo Jain",
    designation: "Assistant Professor",
    institute: "NIRMA University, Ahmedabad, India"
  },
  {
    sno: 35,
    name: "Prof. Sandeep Kumar Mathariya",
    designation: "Assistant Professor",
    institute: "Medicaps University, Indore, India"
  },
  {
    sno: 36,
    name: "Prof. Kavita Rani",
    designation: "Assistant Professor",
    institute: "Panipat Institute of Engineering and Technology, India"
  },
  {
    sno: 37,
    name: "Prof. Aparna Singh",
    designation: "Assistant Professor",
    institute: "Bennett University, Greater Noida, India"
  },
  {
    sno: 38,
    name: "Prof. Sindhu V",
    designation: "Assistant Professor",
    institute: "Christ University, Bengaluru, India"
  },
  {
    sno: 39,
    name: "Prof. Shikha Pandey",
    designation: "Assistant Professor",
    institute: "Bhilai Institute of Technology, Chhattisgarh, India"
  },
  {
    sno: 40,
    name: "Prof. Anita Goyal",
    designation: "Assistant Professor",
    institute: "Rayat Bahra University, Chandigarh, India"
  },
  {
    sno: 41,
    name: "Prof. Krishnendu Rarhi",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 42,
    name: "Prof. Mayur Dilip Jakhete",
    designation: "Assistant Professor",
    institute: "Pimpri Chinchwad University, Pune, India"
  },
  {
    sno: 43,
    name: "Prof. Namrata Gupta",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 44,
    name: "Prof. Rohini",
    designation: "Assistant Professor",
    institute: "MMU (Deemed To Be University), Mullana, Haryana, India"
  },
  {
    sno: 45,
    name: "Prof. Narinder Kumar",
    designation: "Assistant Professor",
    institute: "Rayat Bahra University, Chandigarh, India"
  },
  {
    sno: 46,
    name: "Prof. Vijay K Kaushik",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 47,
    name: "Prof. Kushketu Kundan Srivastava",
    designation: "Assistant Professor",
    institute: "Swami Vivekanand Subharti University, India"
  },
  {
    sno: 48,
    name: "Prof. Inderpal Singh",
    designation: "Assistant Professor",
    institute: "CT Institute of Technology and Research, India"
  },
  {
    sno: 49,
    name: "Prof. Khushboo Sharma",
    designation: "Assistant Professor",
    institute: "Shridhar University, India"
  },
  {
    sno: 50,
    name: "Prof. Puneet",
    designation: "Assistant Professor",
    institute: "Chandigarh Engineering College, Jhanjeri, Mohali, India"
  },
  {
    sno: 51,
    name: "Prof. Rijvan Beg",
    designation: "Assistant Professor",
    institute: "MANIT(Maulana Azad National Institute of Technology), Bhopal, India"
  },
  {
    sno: 52,
    name: "Prof. Aradhna Saini",
    designation: "Assistant Professor",
    institute: "G L Bajaj Institute of Technology and Management, India"
  },
  {
    sno: 53,
    name: "Prof. Tejinder Singh",
    designation: "Assistant Professor",
    institute: "Chandigarh University, Chandigarh, India"
  },
  {
    sno: 54,
    name: "Prof. Aradhana Sahu",
    designation: "Assistant Professor",
    institute: "Rungta College of Engineering and Technology, Bhilai, India"
  },
  {
    sno: 55,
    name: "Prof. Mohit Tiwari",
    designation: "Assistant Professor",
    institute: "Bharati Vidyapeeth's College of Engineering, Delhi, India"
  },
  {
    sno: 56,
    name: "Prof. Tripti Tiwari",
    designation: "Assistant Professor",
    institute: "Bharati Vidyapeeth (Deemed to be University) Institute of Management and Research, New Delhi, India"
  },
  {
    sno: 57,
    name: "Prof. Tushar Hrishikesh Jaware",
    designation: "Assistant Professor",
    institute: "R C Patel Institute of Technology, Shirpur, India"
  },
  {
    sno: 58,
    name: "Prof. Shikha",
    designation: "Assistant Professor",
    institute: "MMU (Deemed To Be University), Mullana, Haryana, India"
  },
  {
    sno: 59,
    name: "Prof. Pawan Kumar Goel",
    designation: "Associate Professor",
    institute: "Raj Kumar Goel Institute of Technology, Ghaziabad, UP, India"
  },
  {
    sno: 60,
    name: "Prof. Tarang Shinde",
    designation: "Assistant Professor",
    institute: "Yashoda Technical Campus Satara, India"
  },
  {
    sno: 61,
    name: "Prof. Ghanshyam Yadav",
    designation: "Assistant Professor",
    institute: "ITS Engineering College, Greater Noida, U.P., India"
  },
  {
    sno: 62,
    name: "Prof. Syed Ibad Ali",
    designation: "Assistant Professor",
    institute: "Parul University, Vadodara, Gujarat, India"
  },
  {
    sno: 63,
    name: "Prof. Rohit Sharma",
    designation: "Assistant Professor",
    institute: "Vivekananda Global University, Jaipur, India"
  },
  {
    sno: 64,
    name: "Prof. Jyoti Shekhawat",
    designation: "Assistant Professor",
    institute: "Vivekananda Global University, Jaipur, India"
  },
  {
    sno: 65,
    name: "Prof. Manish Kumar Goyal",
    designation: "Assistant Professor",
    institute: "Vivekananda Global University, Jaipur, India"
  },
  {
    sno: 66,
    name: "Prof. P. Sivaprakash",
    designation: "Assistant Professor",
    institute: "Dr. N. G. P. Institute of Technology, Jaipur, India"
  }
];

// Define the hierarchy of institutes
const hierarchy = [
  "Eudoxia Research University, New Castle, Delaware, USA",
  "IIT BHU",
  "IIT Ropar",
  "Indian Institute of Information Technology Pune (IIIT-P)",
  "NIT Jalandhar",
  "KIET Group of Institutions, Delhi-NCR, Ghaziabad",
  "Punjab Engineering College, Chandigarh",
  "Lovely Professional University, Punjab",
  "Chitkara University, Punjab",
  "Chandigarh University, Chandigarh, India",
  "SGT University, Gurugram, Haryana",
  "Galgotias College of Engineering and Technology, Gr. Noida (U.P)",
  "School of Engineering Design and Automation, GNA University, Phagwara, Punjab",
  "Thapar Institute of Engineering and Technology, Patiala",
  "Chandigarh Group of Colleges, Jhanjeri India",
  "Noida Institute Of Engineering and Technology, Greater Noida",
  "Galgotias College of Engg. and Technology Greater Noida, India",
  "Calcutta Institute of Technology, Howrah, West Bengal",
  "Marwadi University, Rajkot, India",
  "SR University",
  "Sharda University, India",
  "Parul University, Vadodara, Gujarat, India",
  "Raj Kumar Goel Institute of Technology, Ghaziabad, UP, India",
  "SOE ADYPU",
  "Christ University, Bengaluru, India",
  "Gujarat Technological University, Gujarat, India",
  "RVITM, Bangalore",
  "Bennett University, Greater Noida, India",
  "N/A",
  "Bhilai Institute of Technology, Chhattisgarh, India",
  "Krishna School of Pharmacy & Research, Drs. Kiran & Pallavi Patel Global University (KPGU), Varnama, Vadodara, Gujarat-391243.",
  "Rayat Bahra University, Chandigarh, India",
  "Pimpri Chinchwad University, Pune, India",
  "MMU (Deemed To Be University), Mullana, Haryana, India",
  "Swami Vivekanand Subharti University, India",
  "CT Institute of Technology and Research, India",
  "NIRMA University, Ahmedabad, India",
  "Shridhar University, India",
  "Chandigarh Engineering College, Jhanjeri, Mohali, India",
  "MANIT(Maulana Azad National Institute of Technology), Bhopal, India",
  "G L Bajaj Institute of Technology and Management, India",
  "Manav Rachna University, Faridabad, India",
  "Bharati Vidyapeeth's College of Engineering, Delhi, India",
  "Bharati Vidyapeeth (Deemed to be University) Institute of Management and Research, New Delhi, India",
  "R C Patel Institute of Technology, Shirpur, India",
  "Rungta College of Engineering and Technology, Bhilai, India",
  "Dr. Babasaheb Ambedkar Technological University, Lonere, Maharastra",
  "Yashoda Technical Campus Satara, India",
  "Medicaps University, Indore, India",
  "Panipat Institute of Engineering and Technology, India",
  "GLA UNIVERSITY",
  "GLA University, Mathura",
  "GLBITM, Greater Noida",
  "Christ university",
  "Rungta College of Engineering and Technology, Bhilai, India",
  "Vivekananda Global University, Jaipur, India",
  "ITS Engineering College, Greater Noida, U.P., India",
  "Parul University, Vadodara, Gujarat, India",
  "Dr. N. G. P. Institute of Technology, Jaipur, India"
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

export default TechnicalProgram;