import React from 'react';

const technicalProgramCommittee = [
  { sno: 1, name: "Prof. Mike Hinchey", institute: "University of Limerick, Ireland, UK" },
  { sno: 2, name: "Prof. Shashi Kant Gupta", institute: "Eudoxia Research University, New Castle, Delaware, USA" },
  { sno: 3, name: "Prof. Noor Zaman Jhanjhi", institute: "School of Computer Science, Taylor’s University, Malaysia" },
  { sno: 4, name: "Prof. Zeev Zalevsky", institute: "School of Engineering, Bar-Ilan University, Israel" },
  { sno: 5, name: "Prof. Salekul Islam", institute: "North South University, Dhaka, Bangladesh" },
  { sno: 6, name: "Prof. Nitin Mittal", institute: "Shri Vishwakarma Skill University, Haryana, India" },
  { sno: 7, name: "Prof. Jaskirat Kaur", institute: "Punjab Engineering College, Chandigarh, India" },
  { sno: 8, name: "Prof. Anshuman Mohapatra", institute: "NIT, Puducherry, Chennai, India" },
  { sno: 9, name: "Prof. Deepak Kumar", institute: "Punjab Engineering College, Chandigarh, India" },
  { sno: 10, name: "Prof. Hemant Kumar Singh", institute: "SMS Institute of Technology, Lucknow, India" },
  { sno: 11, name: "Prof. Shikha Verma", institute: "CSE, ABESEC, Ghaziabad, India" },
  { sno: 12, name: "Prof. Anupma Gupta", institute: "Chitkara University Institute of Engineering and Technology, Punjab, India" },
  { sno: 13, name: "Prof. Beant Kaur", institute: "Punjabi University, Patiala, India" },
  { sno: 14, name: "Prof. Kanwarpreet Kaur", institute: "Chandigarh University, Punjab, India" },
  { sno: 15, name: "Prof. Monica Bhutani", institute: "Bharati Vidyapeeth's College of Engineering, New Delhi, India" },
  { sno: 16, name: "Prof. Shonak Bansal", institute: "Chandigarh University, Mohali, India" },
  { sno: 17, name: "Prof. Rupinder Kaur", institute: "Punjabi University, Patiala, India" },
  { sno: 18, name: "Prof. Chirag Sharma", institute: "Lovely Professional University, Punjab, India" },
  { sno: 19, name: "Prof. Ritesh Rastogi", institute: "Noida Institute of Engineering and Technology, Greater Noida, India" },
  { sno: 20, name: "Prof. Abhishek Sen", institute: "Calcutta Institute of Technology, West Bengal, India" },
  { sno: 21, name: "Prof. Uvesh Sipai", institute: "Marwadi University, Rajkot, India" },
  { sno: 22, name: "Prof. Saptadeepa Kalita", institute: "Sharda University, Greater Noida, India" },
  { sno: 23, name: "Prof. Mohammad Shahnawaz Shaikh", institute: "Parul University, Vadodara, Gujarat, India" },
  { sno: 24, name: "Prof. Padam Singh", institute: "Galgotias College of Engineering and Technology, Greater Noida, India" },
  { sno: 25, name: "Prof. Pramod Kr. Sagar", institute: "Raj Kumar Goel Institute of Technology, Ghaziabad, India" },
  { sno: 26, name: "Prof. Shweta Agarwal", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 27, name: "Prof. Kannan M", institute: "Christ University, Bengaluru, India" },
  { sno: 28, name: "Prof. Sanket Ravishankar Trivedi", institute: "Gujarat Technological University, Gujarat, India" },
  { sno: 29, name: "Prof. Simar Preet Singh", institute: "Bennett University, Greater Noida, India" },
  { sno: 30, name: "Prof. Anshu Mehta", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 31, name: "Prof. Neeru", institute: "MMU (Deemed to Be University), Mullana, Haryana, India" },
  { sno: 32, name: "Prof. Arnika", institute: "Manav Rachna University, Faridabad, India" },
  { sno: 33, name: "Prof. Khushboo Jain", institute: "NIRMA University, Ahmedabad, India" },
  { sno: 34, name: "Prof. Sandeep Kumar Mathariya", institute: "Medicaps University, Indore, India" },
  { sno: 35, name: "Prof. Kavita Rani", institute: "Panipat Institute of Engineering and Technology, Panipat, India" },
  { sno: 36, name: "Prof. Aparna Singh", institute: "Bennett University, Greater Noida, India" },
  { sno: 37, name: "Prof. Sindhu V", institute: "Christ University, Bengaluru, India" },
  { sno: 38, name: "Prof. Shikha Pandey", institute: "Bhilai Institute of Technology, Chhattisgarh, India" },
  { sno: 39, name: "Prof. Anita Goyal", institute: "Rayat Bahra University, Chandigarh, India" },
  { sno: 40, name: "Prof. Krishnendu Rarhi", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 41, name: "Prof. Mayur Dilip Jakhete", institute: "Pimpri Chinchwad University, Pune, India" },
  { sno: 42, name: "Prof. Namrata Gupta", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 43, name: "Prof. Rohini", institute: "MMU (Deemed to Be University), Mullana, Haryana, India" },
  { sno: 44, name: "Prof. Narinder Kumar", institute: "Rayat Bahra University, Chandigarh, India" },
  { sno: 45, name: "Prof. Vijay K Kaushik", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 46, name: "Prof. Kushketu Kundan Srivastava", institute: "Swami Vivekanand Subharti University, Meerut, India" },
  { sno: 47, name: "Prof. Inderpal Singh", institute: "CT Institute of Technology and Research, Jalandhar, India" },
  { sno: 48, name: "Prof. Khushboo Sharma", institute: "Shridhar University, Pilani, India" },
  { sno: 49, name: "Prof. Puneet", institute: "Chandigarh Engineering College, Jhanjeri, Mohali, India" },
  { sno: 50, name: "Prof. Rijvan Beg", institute: "Maulana Azad National Institute of Technology, Bhopal, India" },
  { sno: 51, name: "Prof. Aradhna Saini", institute: "G L Bajaj Institute of Technology and Management, Greater Noida, India" },
  { sno: 52, name: "Prof. Tejinder Singh", institute: "Chandigarh University, Chandigarh, India" },
  { sno: 53, name: "Prof. Aradhana Sahu", institute: "Rungta College of Engineering and Technology, Bhilai, India" },
  { sno: 54, name: "Prof. Mohit Tiwari", institute: "Bharati Vidyapeeth's College of Engineering, New Delhi, India" },
  { sno: 55, name: "Prof. Tripti Tiwari", institute: "Bharati Vidyapeeth (Deemed University), New Delhi, India" },
  { sno: 56, name: "Prof. Tushar Hrishikesh Jaware", institute: "R C Patel Institute of Technology, Shirpur, India" },
  { sno: 57, name: "Prof. Shikha", institute: "MMU (Deemed University), Mullana, Haryana, India" },
  { sno: 58, name: "Prof. Pawan Kr. Goel", institute: "Raj Kumar Goel Institute of Technology, Ghaziabad, India" },
  { sno: 59, name: "Prof. Tarang Shinde", institute: "Yashoda Technical Campus, Satara, India" },
  { sno: 60, name: "Prof. Ghanshyam Yadav", institute: "ITS Engineering College, Greater Noida, U.P., India" },
  { sno: 61, name: "Prof. Syed Ibad Ali", institute: "Parul University, Vadodara, Gujarat, India" },
  { sno: 62, name: "Prof. Rohit Sharma", institute: "Vivekananda Global University, Jaipur, India" },
  { sno: 63, name: "Prof. Jyoti Shekhawat", institute: "Vivekananda Global University, Jaipur, India" },
  { sno: 64, name: "Prof. Manish Kumar Goyal", institute: "Vivekananda Global University, Jaipur, India" },
  { sno: 65, name: "Prof. P. Sivaprakash", institute: "Dr. N. G. P. Institute of Technology, Coimbatore, India" }
];
// // Define the hierarchy of institutes
// const hierarchy = [
//   "Eudoxia Research University, New Castle, Delaware, USA",
//   "School of Computer Science, Taylor’s University, Malaysia",
//   "School of Engineering, Bar-Ilan University, Israel",
//   "University of Limerick, Ireland, UK",
//   "Noida Institute of Engineering and Technology, Greater Noida, India",
//   "Calcutta Institute of Technology, West Bengal, India",
//   "Marwadi University, Rajkot, India",
//   "Sharda University, India",
//   "Parul University, Vadodara, Gujarat, India",
//   "Galgotias College of Engg. and Technology Greater Noida, India",
//   "Raj Kumar Goel Institute of Technology, Ghaziabad, India",
//   "Chandigarh University, Chandigarh, India",
//   "Christ University, Bengaluru, India",
//   "Gujarat Technological University, Gujarat, India",
//   "Bennett University, Greater Noida, India",
//   "MMU (Deemed to Be University), Mullana, Haryana, India",
//   "Manav Rachna University, Faridabad, India",
//   "NIRMA University, Ahmedabad, India",
//   "Medicaps University, Indore, India",
//   "Panipat Institute of Engineering and Technology, India",
//   "Bhilai Institute of Technology, Chhattisgarh, India",
//   "Rayat Bahra University, Chandigarh, India",
//   "Pimpri Chinchwad University, Pune, India",
//   "Swami Vivekanand Subharti University, India",
//   "CT Institute of Technology and Research, India",
//   "Shridhar University, India",
//   "Chandigarh Engineering College, Jhanjeri, Mohali, India",
//   "Manit, Maulana Azad National Institute of Technology, India",
//   "G L Bajaj Institute of Technology and Management, India",
//   "Rungta College of Engineering and Technology, Bhilai, India",
//   "Bharati Vidyapeeth's College of Engineering, Delhi, India",
//   "Bharati Vidyapeeth (Deemed University), New Delhi, India",
//   "R C Patel Institute of Technology, Shirpur, India",
//   "Yashoda Technical Campus Satara, India",
//   "ITS Engineering College, Greater Noida, U.P., India",
//   "Vivekananda Global University, Jaipur, India",
//   "Dr. N. G. P. Institute of Technology, Jaipur, India"
// ];

// // Sort the array based on the hierarchy
// technicalProgramCommittee.sort((a, b) => {
//   return hierarchy.indexOf(a.institute) - hierarchy.indexOf(b.institute);
// });

// // Update the sno values to reflect the new order
// technicalProgramCommittee.forEach((member, index) => {
//   member.sno = index + 1;
// });

const TechnicalProgram = () => {
  return (
    <div>
      {/* Technical Program Community */}
      <div className='container mx-auto p-4 pt-20 sm:pt-4'>
        <div className="flex flex-wrap w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            Technical Program Committee
          </h1>
        </div>
        <div className="flex w-full text-2xl">
          <ul className="list-disc pl-5">
            {technicalProgramCommittee.map((member, index) => (
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

export default TechnicalProgram;