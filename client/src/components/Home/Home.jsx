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
    <div>
      <div className="relative pl-5 pr-5 w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://library.cgc.ac.in/images/slider/slide-1.jpg')", backgroundPositionY: "center" }}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="absolute top-30 flex flex-col justify-center items-center text-center m-auto pb-5" style={{ paddingTop: '5rem' }}>
            <div className="text-white text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] tracking-widest font-extrabold text-shadow-lg pb-3 sm:pb-5">
              <div className="text-center">
                INTERNATIONAL CONFERENCE <br /> ON <br /> EMERGING TECHNOLOGIES IN AI AND COMMUNICATION SYSTEMS <br />
                (ICETIS-2025)
              </div>
            </div>
            <div className="w-full container mx-auto px-2 sm:px-4">
              <div className="flex flex-col sm:flex-row flex-wrap p-2 sm:p-5">
                <div className="w-full sm:w-1/2 px-2 sm:px-4 py-2 flex justify-center items-center pt-10 sm:pt-[5em]">
                  <h4 className="text-center text-white text-shadow-lg leading-relaxed font-normal text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] px-2 sm:px-10">
                    <i>
                      All selected, presented and registered paper will be submitted to IEEE Xplore for consideration.
                    </i>
                  </h4>
                </div>
                <div className="w-full sm:w-1/2 px-2 sm:px-4">
                  <h4 className="text-center font-sans text-white font-bold text-shadow-lg text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] leading-snug title">
                    Important Dates:
                    <br /> <br />
                    <table className="table-auto w-full">
                      <tbody>
                        {dates.map((item, index) => (
                          <tr key={index}>
                            <td className="text-left font-sans text-white font-semibold text-shadow-lg text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] leading-snug whitespace-nowrap">
                              {item.label}
                            </td>
                            <td className="text-left font-sans text-white font-semibold text-shadow-lg text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] leading-snug pl-2 sm:pl-4 md:pl-6 lg:pl-8 whitespace-nowrap">
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
            <h4 className="uppercase text-center font-sans font-semibold text-white text-shadow-lg text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[1vw] xl:text-[0.75vw] pt-5 sm:pt-10 md:pt-15 lg:pt-20 break-words">
              Organised by <br />
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING,<br />
              Chandigarh Engineering College,<br/> Chandigarh Group of Colleges, Jhanjeri, Mohali, <br />
              Punjab-140307
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
