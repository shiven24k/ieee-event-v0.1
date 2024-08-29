import React from 'react';
function PaperSubmission(){
    return (
        <div className=" mt-5 container mx-auto py-3 bg-cover bg-no-repeat w-full px-4">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Paper Submission</h1>
      {/* <h2 className="text-2xl font-bold mb-4">Publications Opportunity</h2>
      <p className="mb-4">
      Selected research papers will be considered for publication in an IEEE (SCOPUS Indexed) conference after a thorough peer-review process. All abstracts will be published in the conference proceedings. Researchers are responsible for covering any additional publication costs. This opportunity provides valuable visibility for your work, so ensure your submission meets the required standards.
      </p> */}
     
      <h2 className="text-2xl font-bold mb-4">Selection Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Originality of idea</li>
        <li>Soundness of Concept</li>
        <li>Plagiarism report (less than 10%) and no AI Content (0%)</li>
        <li>Research methodology (Preferably empirical research)</li>
        <li>Discretion of the selection panel</li>
        <li>Outcomes of the research</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Submission Details</h2>
      <p className="mb-4">
        Authors are requested to submit their original research papers in IEEE format through the submission link - 
      </p>
      <div className="flex  mt-6 mb-6 flex-col gap-5 items-center">
        <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Click here to Download IEEE Format
          </button>
        </a>
        <a href="https://cmt3.research.microsoft.com/Conference" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Click Here
          </button>
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-4">Guide Lines for Authors</h2>
      <h3 className="text-xl font-semibold mb-2">Paper Specifications</h3>
      <div className='mb-2'>
      <span >Use IEEE template to meet formatting requirements. Your paper must comply with the following:</span>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Paper Length: Maximum 6 pages</li>
        <li>Paper Size: US Letter (8.5” x 11”)</li>
        <li>Fonts: Embed ALL fonts in your PDF file. Avoid the use of Type 3 fonts.</li>
        <li>File Format: Adobe PDF (.pdf)</li>
        <li>Allowed File Size: 2.0Mb</li>
        <li>Do NOT page number your paper.</li>
        <li>Do NOT apply security settings to your PDF file.</li>
      </ul>
      <div className="mb-4">
      <i >Note: Deviations from the above paper specifications will result in the rejection of your submission.</i>
      </div>

      <h3 className="text-xl font-semibold mb-2">Final Submission Procedure</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Pay for conference registration here: <a href="#" className="text-blue-500 underline">IEEE ICETIS 2025 registration site</a></li>
        <li>Final submission is REQUIRED, even if you do not intend to make any changes to your original submission.</li>
        <li>BEFORE YOU PROCEED, carefully read the Author Information page to ensure that your submission meets the guidelines.</li>
        <li>Prepare a copy of your paper in PDF format using our templates</li>
        <li>MANDATORY: Make sure your PDF file meets IEEE Xplore compliance by following the instructions on the PDF Express page. IEEE Xplore link will be provided later.</li>
        <li>Log in using the same username and password you created during your initial submission.</li>
        <li>Do NOT apply security settings to your PDF file.</li>
      </ul>
      <p className="mb-4"> <span className='text-red-500 font-semibold'>MANDATORY:</span> You must pay for conference registration BEFORE you will be allowed to upload your final paper. You will need your registration code in order to proceed. Prospective authors are requested to submit full length paper no longer than six (6) pages. The paper must clearly state the objectives of the work, its significance in the advancement of scientific and technical knowledge.</p>

      <h3 className="text-xl font-semibold mb-2">Plagiarism Policy</h3>
      <p className="mb-4">
        <a href="#" className="text-blue-500 underline">Click here for IEEE policy on plagiarism, guidelines for AI generated text etc.</a>
      </p>
      <p className="mb-4">Note: Papers presented in the Conference, duly accepted after peer review, will be eligible for submission for further consideration of publishing in the IEEE Xplore, subject to maintenance of quality, and post-conference scrutiny of response of Conference Organizers to Technical Program of Questionnaire (TPQ) on the Conference.</p>

            
        </div>
        </div>
    )
}
export default PaperSubmission;