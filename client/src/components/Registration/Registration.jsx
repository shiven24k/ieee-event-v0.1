import React from 'react';
function Regestration() {
  return (
    <div className =" container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)'}}>
      <h1 className="text-3xl font-bold mb-5 text-center">REGISTRATION</h1>
      {/* <p className="mb-5 text-center">
        Authors whose papers are accepted and are of high standards and having practical data/implementation will have the option to submit additional fees to get their paper published in UGC/Scopus indexed journal/book chapter apart from the Registration fees as mentioned in the category below:
      </p> */}
      <div className="container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{ backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)' }}>
      <h1 className="text-3xl font-bold mb-5 text-center">REGISTRATION</h1>
      <div className="overflow-x-auto mb-5">
      <table className="min-w-full bg-transparent border border-gray-200 shadow-lg rounded-lg">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b text-center">Delegates</th>
      <th colSpan={2} className="px-4 py-2 border-b text-center">Early Bird Registration</th>
      <th colSpan={3} className="px-4 py-2 border-b text-center">Late/Normal Registration</th>
    </tr>
    <tr>
      <th className="px-4 py-2 border-b text-center">Category of Author</th>
      <th className="px-4 py-2 border-b text-center">IEEE Member</th>
      <th className="px-4 py-2 border-b text-center">IEEE Non-Member</th>
      <th className="px-4 py-2 border-b text-center">IEEE Member</th>
      <th className="px-4 py-2 border-b text-center">IEEE Non-Member</th>
      <th className="px-4 py-2 border-b text-center">Attendee only</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b font-bold text-center" colSpan="6">Indian Participant (in INR)</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Student (UG/PG)</td>
      <td className="px-4 py-2 border-b text-center">3000</td>
      <td className="px-4 py-2 border-b text-center">4000</td>
      <td className="px-4 py-2 border-b text-center">3500</td>
      <td className="px-4 py-2 border-b text-center">4500</td>
      <td className="px-4 py-2 border-b text-center">500</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Research Scholar (PhD)</td>
      <td className="px-4 py-2 border-b text-center">4500</td>
      <td className="px-4 py-2 border-b text-center">5500</td>
      <td className="px-4 py-2 border-b text-center">5500</td>
      <td className="px-4 py-2 border-b text-center">6500</td>
      <td className="px-4 py-2 border-b text-center">1000</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Academica/Faculty</td>
      <td className="px-4 py-2 border-b text-center">5500</td>
      <td className="px-4 py-2 border-b text-center">6500</td>
      <td className="px-4 py-2 border-b text-center">6500</td>
      <td className="px-4 py-2 border-b text-center">7500</td>
      <td className="px-4 py-2 border-b text-center">1000</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Delegates from Industry</td>
      <td className="px-4 py-2 border-b text-center">7000</td>
      <td className="px-4 py-2 border-b text-center">8000</td>
      <td className="px-4 py-2 border-b text-center">8000</td>
      <td className="px-4 py-2 border-b text-center">9000</td>
      <td className="px-4 py-2 border-b text-center">1500</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-bold text-center" colSpan="6">Foreign Participant (in USD)</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Student (UG/PG)</td>
      <td className="px-4 py-2 border-b text-center">150</td>
      <td className="px-4 py-2 border-b text-center">200</td>
      <td className="px-4 py-2 border-b text-center">200</td>
      <td className="px-4 py-2 border-b text-center">250</td>
      <td className="px-4 py-2 border-b text-center">50</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Research Scholar (PhD)</td>
      <td className="px-4 py-2 border-b text-center">200</td>
      <td className="px-4 py-2 border-b text-center">250</td>
      <td className="px-4 py-2 border-b text-center">300</td>
      <td className="px-4 py-2 border-b text-center">350</td>
      <td className="px-4 py-2 border-b text-center">100</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Academica/Faculty</td>
      <td className="px-4 py-2 border-b text-center">300</td>
      <td className="px-4 py-2 border-b text-center">350</td>
      <td className="px-4 py-2 border-b text-center">400</td>
      <td className="px-4 py-2 border-b text-center">450</td>
      <td className="px-4 py-2 border-b text-center">100</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b font-semibold text-center">Delegates from Industry</td>
      <td className="px-4 py-2 border-b text-center">400</td>
      <td className="px-4 py-2 border-b text-center">450</td>
      <td className="px-4 py-2 border-b text-center">500</td>
      <td className="px-4 py-2 border-b text-center">550</td>
      <td className="px-4 py-2 border-b text-center">150</td>
    </tr>
  </tbody>
</table>

      </div>
      <div className='text-center'>
      <i className=" text-sm mt-4">*Selected quality papers will be sent for publication in journals of Repute. Additional cost if any, for the publication has to be borne by the researcher.</i>
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
        <strong>Note:</strong> After making payment, participants are requested to attach the payment transaction and screenshot on the registration form link.
      </p>
    </div>
  );
}  
export default Regestration;