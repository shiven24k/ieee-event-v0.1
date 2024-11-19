import React from 'react';
const dates = [
  {
    label: "Paper Submission Deadline:",
    date: "8th July, 2025"
  },
  {
    label: "Acceptance Notification:",
    date: "8th Sept, 2025"
  },
  {
    label: "Camera Ready Paper Submission Deadline:",
    date: "8th Oct, 2025"
  },
  {
    label: "Registration Deadline:",
    date: "8th Oct, 2025"
  },
  {
    label: "Conference Date:",
    date: "6th – 8th Nov, 2025"
  }
];
function PaperSubmission({}){
    return (
        <div className=" mt-5 container mx-auto py-3 bg-cover bg-no-repeat w-full px-4">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-10">
      {/* <h1 className="text-3xl font-bold mb-5 text-center">Paper Submission</h1> */}
      {/* <h2 className="text-2xl font-bold mb-4">Publications Opportunity</h2>
      <p className="mb-4">
      Selected research papers will be considered for publication in an IEEE (SCOPUS Indexed) conference after a thorough peer-review process. All abstracts will be published in the conference proceedings. Researchers are responsible for covering any additional publication costs. This opportunity provides valuable visibility for your work, so ensure your submission meets the required standards.
      </p> */}
     
      {/* <h2 className="text-2xl font-bold mb-4">Selection Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Originality of idea</li>
        <li>Soundness of Concept</li>
        <li>Plagiarism report (less than 10%) and no AI Content (0%)</li>
        <li>Research methodology (Preferably empirical research)</li>
        <li>Discretion of the selection panel</li>
        <li>Outcomes of the research</li>
      </ul> */}

      <h2 className="text-2xl font-bold mb-4">Paper Submission Guidelines:</h2>
      <ul className="list-disc list-inside mb-4 sm:text-base md:text-lg lg:text-xl">
        <li>Paper should be in IEEE format. 
          <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
            IEEE Format
          </a>
        </li>
        <li>Paper to be submitted through Microsoft CMT. 
          <a href="https://cmt3.research.microsoft.com/Conference" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
            Click here
          </a>
        </li>
        <li>Paper length: preferably 6-7 pages. Thereafter 50 USD per page.</li>
        <li>Plagiarism should not be more than 10% (5% from single source)</li>
        <li>AI content: NIL</li>
      </ul>
      <div className='flex flex-col '>
      <h1 className="text-2xl font-bold mb-4 ">Important Dates:</h1>
      <table className="table-auto w-full max-w-4xl border border-gray-300">
      <tbody>
      {dates.map((item, index) => (
        <tr key={index} className="border-b border-gray-300">
          <td className="text-left font-sans text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl leading-snug whitespace-nowrap p-2">
            {item.label}
          </td>
          <td className="text-left font-sans text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl leading-snug pl-4 whitespace-nowrap p-2">
            {item.date}
          </td>
        </tr>
      ))}
    </tbody>
</table>
  </div>

      
        </div>
        </div>
    )
}
export default PaperSubmission;