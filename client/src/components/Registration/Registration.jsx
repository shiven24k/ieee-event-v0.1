import React from 'react';
function Regestration() {
  return (
    <div className =" container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)'}}>
     
      {/* <p className="mb-5 text-center">
        Authors whose papers are accepted and are of high standards and having practical data/implementation will have the option to submit additional fees to get their paper published in UGC/Scopus indexed journal/book chapter apart from the Registration fees as mentioned in the category below:
      </p> */}
      <div className="container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{ backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)' }}>
      <h1 className="text-3xl font-bold mb-5 text-center">REGISTRATION</h1>
      <div className="overflow-x-auto mb-5">
      <div className="flex justify-center">
      <table className="table-auto w-full max-w-4xl border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th rowSpan={2} className="border border-gray-300 p-2">Category of Author</th>
            <th colSpan={2} className="border border-gray-300 p-2">Indian Authors</th>
            <th colSpan={2} className="border border-gray-300 p-2">Foreign Authors</th>
          </tr>
          <tr className="bg-gray-200">
            
            <th className="border border-gray-300 p-2 text-center">IEEE Member</th>
            <th className="border border-gray-300 p-2 text-center">Non-IEEE Member</th>
            <th className="border border-gray-300 p-2 text-center">IEEE Member</th>
            <th className="border border-gray-300 p-2 text-center">Non-IEEE Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">Student (UG/PG)</td>
            <td className="border border-gray-300 p-2 text-center">6000</td>
            <td className="border border-gray-300 p-2 text-center">7000</td>
            <td className="border border-gray-300 p-2 text-center">200</td>
            <td className="border border-gray-300 p-2 text-center">250</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">Research Scholar (PhD)</td>
            <td className="border border-gray-300 p-2 text-center">7000</td>
            <td className="border border-gray-300 p-2 text-center">8000</td>
            <td className="border border-gray-300 p-2 text-center">250</td>
            <td className="border border-gray-300 p-2 text-center">300</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">Academica/Faculty</td>
            <td className="border border-gray-300 p-2 text-center">8000</td>
            <td className="border border-gray-300 p-2 text-center">9000</td>
            <td className="border border-gray-300 p-2 text-center">300</td>
            <td className="border border-gray-300 p-2 text-center">350</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">Delegates from Industry</td>
            <td className="border border-gray-300 p-2 text-center">9000</td>
            <td className="border border-gray-300 p-2 text-center">10000</td>
            <td className="border border-gray-300 p-2 text-center">350</td>
            <td className="border border-gray-300 p-2 text-center">400</td>
          </tr>
        </tbody>
      </table>
    </div>

      </div>
      <div className='text-right'>
      <i className=" text-sm mt-4">All selected, presented and registered paper will be submitted to IEEE Xplore for consideration.</i>
      </div>
    </div>
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <p className="mb-2"><strong>Account Name:</strong> Chandigarh Engineering College</p>
        <p className="mb-2"><strong>Bank Name:</strong> State Bank of India</p>
        <p className="mb-2"><strong>Account number:</strong> 39625129110</p>
        <p className="mb-2"><strong>IFSC Code:</strong> SBIN0017008</p>
        <p className="mb-2"><strong>MICR Code:</strong> 160002082</p>
        <p className="mb-2"><strong>Bank Name and Address:</strong> Jhanjeri, Sirhind Road 140307</p>
      </div>
      <p className="text-center mt-5">
        <strong>Note:</strong> After making payment, participants are requested to share transaction details along with paper id <a className='cursor-pointer text-blue-600'>here</a>.
      </p>
    </div>
  );
}  
export default Regestration;