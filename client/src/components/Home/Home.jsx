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
      {/* Main Title - Reduced sizes */}
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
          {/* IEEE Notice - Reduced sizes */}
          <div className="lg:w-1/2">
            <h4 className="text-center text-white text-base md:text-lg lg:text-xl italic">
              Request has been submitted to IEEE Delhi Section for Technical sponsorship.
            </h4>
          </div>

          {/* Important Dates - Reduced sizes */}
          <div className="lg:w-1/2">
            <h4 className="text-center text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
              Important Dates:
            </h4>
            <div className=" p-4 rounded-lg">
              <table className="w-full">
                <tbody>
                  {dates.map((item, index) => (
                    <tr key={index} className="border-b border-white/20 last:border-0">
                      <td className="py-2 text-white text-xs md:text-sm lg:text-base font-semibold">
                        {item.label}
                      </td>
                      <td className="py-2 text-white text-xs md:text-sm lg:text-base font-semibold pl-4">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Organization Details - Reduced sizes */}
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
