import React from "react";
import ieeelogo from "../../assets/ieeelogo.png";
import CGCimage from "../../assets/CGC-image.png";
const dates = [
  {
    label: "Paper Submission Deadline:",
    date: "8th Aug, 2025"
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

function Home() {
  return (
    <div>
      <div className="relative pl-5 pr-5 w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://library.cgc.ac.in/images/slider/slide-1.jpg')", backgroundPositionY: "center" }}>
      <div className="flex justify-center items-center min-h-screen">
      <div className="absolute top-30 flex flex-col justify-center items-center text-center m-auto pb-5">
  <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-widest font-extrabold text-shadow-lg pb-3 sm:pb-5">
    <div className="text-center">
      INTERNATIONAL CONFERENCE <br /> ON <br /> EMERGING TECHNOLOGY AND INTELLIGENT SYSTEMS <br />
      (ICETIS-2025)
    </div>
    {/* <pre className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-sans tracking-widest font-extrabold text-shadow-lg pb-3 sm:pb-5 mt-3 sm:mt-5">
      IEEE Conference ID:- 61846 <br />
      (Hybrid Mode)
    </pre> */}
  </div>
  <div className="w-full container mx-auto px-2 sm:px-4">
    <div className="flex flex-col sm:flex-row flex-wrap p-2 sm:p-5">
      <div className="w-full sm:w-1/2 px-2 sm:px-4 py-2 flex justify-center items-center pt-10 sm:pt-[5em]">
        <h4 className="text-center text-white text-shadow-lg leading-relaxed font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 sm:px-10">
          <i>
            All selected, presented and registered paper will be submitted to IEEE Xplore for consideration.
          </i>
        </h4>
      </div>
      <div className="w-full sm:w-1/2 px-2 sm:px-4">
        <h4 className="text-center font-sans text-white font-bold text-shadow-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug title">
          Important Dates:
          <br /> <br />
          <table className="table-auto w-full">
      <tbody>
        {dates.map((item, index) => (
          <tr key={index}>
            <td className="text-left font-sans text-white font-semibold text-shadow-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug whitespace-nowrap">
              {item.label}
            </td>
            <td className="text-left font-sans text-white font-semibold text-shadow-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug pl-2 sm:pl-4 md:pl-6 lg:pl-8 whitespace-nowrap">
              {item.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </h4>
      </div>
    </div>
  </div>
  <h4 className="uppercase text-center font-sans font-semibold text-white text-shadow-lg text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg pt-5 sm:pt-10 md:pt-15 lg:pt-20 break-words">
  Organised by <br />
  DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING,<br />
  Chandigarh Engineering College,<br/> Chandigarh Group of Colleges, Jhanjeri, Mohali, <br />
  Punjab-140307
</h4>
</div>
</div>
</div>
      {/* <div className="w-full flex flex-col items-center bg-silver p-0 pb-10 gap-8">
        <h4 class="text-center font-sans text-black font-bold text-shadow-lg text-2xl pt-10">
          Technically Sponsored by
        </h4>
        <img src={ieeelogo} alt="IEEE Delhi" className="p-5" />
      </div> */}
      {/* <div className="w-full flex flex-col items-center bg-gray-200 pb-10 overflow-hidden">
  <h4 className="text-center font-sans text-black font-bold text-shadow-lg text-2xl pt-10 title">
    Conference Sponsors
  </h4>
  <div className="flex gap-16 p-0 px-8 animate-marquee mb-10">
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <p>PBCD</p>
    <p>EFGH</p>
    <p>IJKL</p>
    <p>MNOP</p>
    <p>QRST</p>
    <p>UVWX</p>
    <p>YZAB</p>
    <p>CDEF</p>
    <p>GHIJ</p>
    <p>KLMN</p>
    <p>OPQR</p>
    <p>STUV</p>
    <p>WXYZ</p>
    
  </div>
</div> */}
      {/* <div className="w-full bg-silver py-8">
        
      </div> */}

     
       {/* contact us */}
      {/* <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
        <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Contact
        </h1>
        <div className="container mx-auto px-4 py-8">
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-red-700 text-white">
        <tr>
          <th className="w-1/4 py-3 px-4 text-left">Name</th>
          <th className="w-1/4 py-3 px-4 text-left">Email Us @</th>
          <th className="w-1/4 py-3 px-4 text-left">Call Us</th>
          <th className="w-1/4 py-3 px-4 text-left">Quick Links</th>
        </tr>
      </thead>
      
      <tbody>
      <tr className="border-b border-gray-200">
          <td className="py-3 px-4">ICETIS Official Mail </td>
          <td className="py-3 px-4">icetis@cgc.ac.in</td>
          <td className="py-3 px-4"></td>
          
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4">Dr. Pradeep Kumar Jindal </td>
          <td className="py-3 px-4">Pardeep.j1881@cgc.ac.in</td>
          <td className="py-3 px-4">+91 98724 95684</td>
          <td className="py-3 px-4">
            <ul className="list-disc list-inside">
              <li className="list-none"><a href="https://www.linkedin.com/in/dr-pardeep-kumar-jindal-1bb1b1217/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="text-blue-500 hover:underline">Linkedin</a></li>
             
            </ul>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4">Dr. Shivani Goyal
</td>
          <td className="py-3 px-4">Shivani.j2587@cgc.ac.in</td>
          <td className="py-3 px-4">+91 82642 39901</td>
          <td className="py-3 px-4">
            <ul className="list-disc list-inside">
              <li className="list-none"><a href="https://www.linkedin.com/in/shivani-goyal-138b2281/?originalSubdomain=in" className="text-blue-500 hover:underline">Linkedin</a></li>
              
            </ul>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>
      </div> */}
    </div>
  );
}
export default Home;
