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

function PaperSubmission() {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">  {/* Added pt-20 sm:pt-24 for top margin */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          
          {/* Guidelines Section */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Paper Submission Guidelines:
          </h2>
          
          <ul className="space-y-3 mb-8 text-sm sm:text-base lg:text-lg">
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span>Paper should be in IEEE format.</span>
              <a 
                href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline inline-block"
              >
                IEEE Format
              </a>
            </li>
            
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span>Paper to be submitted through Microsoft CMT.</span>
              <a 
                href="https://cmt3.research.microsoft.com/Conference" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline inline-block"
              >
                Click here
              </a>
            </li>
            
            <li>Paper length: preferably 6-7 pages. Thereafter 50 USD per page.</li>
            <li>Plagiarism should not be more than 10% (5% from single source)</li>
            <li>AI content: NIL</li>
          </ul>

          {/* Important Dates Section */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Important Dates:
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  {dates.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`
                        border-b border-gray-300
                        hover:bg-gray-50 transition-colors
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      `}
                    >
                      <td className="py-3 px-4 text-sm sm:text-base lg:text-lg font-medium">
                        {item.label}
                      </td>
                      <td className="py-3 px-4 text-sm sm:text-base lg:text-lg">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PaperSubmission;