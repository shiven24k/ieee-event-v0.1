import React from "react";
import ieeelogo from "../../assets/ieeelogo.png";
import CGCimage from "../../assets/CGC-image.png";
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

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-16">
      <div 
        className="absolute inset-0 z-0 bg-no-repeat" 
        style={{
          backgroundImage: "url('https://library.cgc.ac.in/images/slider/slide-1.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        {/* Main Title */}
        <div className="text-white text-xl md:text-2xl lg:text-3xl tracking-wider font-extrabold mb-8 text-center">
          <div>
            INTERNATIONAL CONFERENCE <br />
            ON <br />
            EMERGING TECHNOLOGIES IN AI AND COMMUNICATION SYSTEMS <br />
            (ICETIS-2025)
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* IEEE Notice */}
            <div className="lg:w-1/2 flex items-center">
              <p className="text-white text-base md:text-lg lg:text-xl italic text-left">
                All selected, presented and registered paper will be submitted to IEEE Xplore for consideration.
              </p>
            </div>

            {/* Important Dates */}
            <div className="lg:w-1/2">
              <h4 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
                Important Dates:
              </h4>
              <div>
  <table className="w-full">
    <tbody>
      {dates.map((item, index) => (
        <tr key={index} className=" text-white transition-colors">
          <td className="py-1.5 px-3 text-xs md:text-sm lg:text-base font-medium">
            {item.label}
          </td>
          <td className="py-1.5 px-3 text-xs md:text-sm lg:text-base font-medium text-right">
            {item.date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
            </div>
          </div>

          {/* Organization Details */}
          <div className="text-center text-white text-base md:text-lg lg:text-xl font-semibold mt-8">
            <p className="mb-2">Organised by</p>
            <p className="mb-2">DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING,</p>
            <p className="mb-2">Chandigarh Engineering College,</p>
            <p className="mb-2">Chandigarh Group of Colleges, Jhanjeri, Mohali,</p>
            <p>Punjab-140307</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
