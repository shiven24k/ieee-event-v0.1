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
              <th className="px-4 py-2 border-b">Delegates</th>
              <th colSpan={2} className="px-4 py-2 border-b">Early Bird Registration</th>
              <th colSpan={2} className="px-4 py-2 border-b">Late/Normal Registration</th>
            </tr>
            <tr>
              <th className="px-4 py-2 border-b">Category of Author</th>
              <th className="px-4 py-2 border-b">IEEE Member</th>
              <th className="px-4 py-2 border-b">IEEE Non-Member</th>
              <th className="px-4 py-2 border-b">IEEE Member</th>
              <th className="px-4 py-2 border-b">IEEE Non-Member</th>
              <th className="px-4 py-2 border-b">Attendee only</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b font-bold text-center" colSpan="6" >Indian Participant (in INR)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Student (UG/PG)</td>
              <td className="px-4 py-2 border-b ">3000</td>
              <td className="px-4 py-2 border-b">4000</td>
              <td className="px-4 py-2 border-b">3500</td>
              <td className="px-4 py-2 border-b">4500</td>
              <td className="px-4 py-2 border-b">500</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Research Scholar (PhD)</td>
              <td className="px-4 py-2 border-b">4500</td>
              <td className="px-4 py-2 border-b">5500</td>
              <td className="px-4 py-2 border-b">5500</td>
              <td className="px-4 py-2 border-b">6500</td>
              <td className="px-4 py-2 border-b">1000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Academica/Faculty</td>
              <td className="px-4 py-2 border-b">5500</td>
              <td className="px-4 py-2 border-b">6500</td>
              <td className="px-4 py-2 border-b">6500</td>
              <td className="px-4 py-2 border-b">7500</td>
              <td className="px-4 py-2 border-b">1000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Delegates from Industry</td>
              <td className="px-4 py-2 border-b">7000</td>
              <td className="px-4 py-2 border-b">8000</td>
              <td className="px-4 py-2 border-b">8000</td>
              <td className="px-4 py-2 border-b">9000</td>
              <td className="px-4 py-2 border-b">1500</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-bold text-center" colSpan="6" >Foreign Participant (in USD)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Student (UG/PG)</td>
              <td className="px-4 py-2 border-b">150</td>
              <td className="px-4 py-2 border-b">200</td>
              <td className="px-4 py-2 border-b">200</td>
              <td className="px-4 py-2 border-b">250</td>
              <td className="px-4 py-2 border-b">50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Research Scholar (PhD)</td>
              <td className="px-4 py-2 border-b">200</td>
              <td className="px-4 py-2 border-b">250</td>
              <td className="px-4 py-2 border-b">300</td>
              <td className="px-4 py-2 border-b">350</td>
              <td className="px-4 py-2 border-b">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Academica/Faculty</td>
              <td className="px-4 py-2 border-b">300</td>
              <td className="px-4 py-2 border-b">350</td>
              <td className="px-4 py-2 border-b">400</td>
              <td className="px-4 py-2 border-b">450</td>
              <td className="px-4 py-2 border-b">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Delegates from Industry</td>
              <td className="px-4 py-2 border-b">400</td>
              <td className="px-4 py-2 border-b">450</td>
              <td className="px-4 py-2 border-b">500</td>
              <td className="px-4 py-2 border-b">550</td>
              <td className="px-4 py-2 border-b">150</td>
            </tr>
          </tbody>
        </table>
      </div>
      <i className=" text-sm mt-4 text-right">*Selected quality papers will be sent for publication in journals of Repute. Additional cost if any, for the publication has to be borne by the researcher.</i>
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