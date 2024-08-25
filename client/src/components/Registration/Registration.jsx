import React from 'react';
function Regestration() {
  return (
    <div className =" container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)'}}>
      <h1 className="text-3xl font-bold mb-5 text-center">REGISTRATION</h1>
      {/* <p className="mb-5 text-center">
        Authors whose papers are accepted and are of high standards and having practical data/implementation will have the option to submit additional fees to get their paper published in UGC/Scopus indexed journal/book chapter apart from the Registration fees as mentioned in the category below:
      </p> */}
      <div className="overflow-x-auto mb-5">
      <table className="min-w-full bg-transparent border border-gray-200 shadow-lg rounded-lg">
  <thead className="bg-gray-100 ">
    <tr>
      <th className="py-2 px-4 text-center" colSpan="1"></th>
      <th className="py-2 px-4 text-center font-bold" colSpan="2">Early Bird Registration</th>
      <th className="py-2 px-4 text-center font-bold" colSpan="3">Late Registration</th>
    </tr>
    <tr>
      <th className="py-2 px-4 text-center font-semibold">Category of Authors/Attendees (IEEE Member)</th>
      <th className="py-2 px-4 text-center font-semibold">IEEE Student Members</th>
      <th className="py-2 px-4 text-center font-semibold">IEEE Members</th>
      <th className="py-2 px-4 text-center font-semibold">IEEE Student Members</th>
      <th className="py-2 px-4 text-center font-semibold">IEEE Members</th>
    </tr>
  </thead>
  <tbody className="bg-white">
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">Indian Participant</td>
      <td className="py-2 px-4 text-center">₹5,000</td>
      <td className="py-2 px-4 text-center">₹6,500</td>
      <td className="py-2 px-4 text-center">₹6,000</td>
      <td className="py-2 px-4 text-center">₹8,000</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">Foreign Participant</td>
      <td className="py-2 px-4 text-center">$150</td>
      <td className="py-2 px-4 text-center">$250</td>
      <td className="py-2 px-4 text-center">$250</td>
      <td className="py-2 px-4 text-center">$300</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="py-2 px-4 text-center font-semibold">Category of Authors/Attendees (Non-IEEE Member)</td>
      <td className="py-2 px-4 text-center font-semibold">Non-IEEE Student Members</td>
      <td className="py-2 px-4 text-center font-semibold">Non-IEEE Members</td>
      <td className="py-2 px-4 text-center font-semibold">Non-IEEE Student Members</td>
      <td className="py-2 px-4 text-center font-semibold">Non-IEEE Members</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">Indian Participant</td>
      <td className="py-2 px-4 text-center">₹6,000</td>
      <td className="py-2 px-4 text-center">₹8,500</td>
      <td className="py-2 px-4 text-center">₹7,500</td>
      <td className="py-2 px-4 text-center">₹10,000</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">Foreign Participant</td>
      <td className="py-2 px-4 text-center">$200</td>
      <td className="py-2 px-4 text-center">$350</td>
      <td className="py-2 px-4 text-center">$400</td>
      <td className="py-2 px-4 text-center">$450</td>
    </tr>
  </tbody>
</table>
      </div>
      <i className="flex text-center justify-center mb-5">
        Registration fee as stated above can be paid through NEFT/Online transaction and refers to:
      </i>
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