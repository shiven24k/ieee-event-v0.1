import React, { useState } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

function CallForPaper() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      title: "Track 1: Innovation in Communication/Electronics/Electrical/Wireless/Optical Networks and Security sensors",
      items: [
        "5G, 6G, and Beyond Networks", "Wireless Sensor Networks", "Wireless and Optical Communication",
        "Underwater and Underground Communication Networks", "Satellite Communication Systems",
        "MIMO, OFDM, and Antenna Design", "Microelectronics, Nanoelectronics, and Embedded Systems",
        "Renewable and Sustainable Energy", "Power Systems and Smart Grid", "Mobile ad-hoc networks",
        "Software-defined networks", "Wearable network and systems", "Vehicular networks and applications",
        "Virtual and overlay networks", "Next Generation Networking", "Quantum Networking",
        "QoS Provisioning and Architecture", "Telecommunication Services and Applications",
        "Network Performance", "Computer Security", "Cognitive Radio and Dynamic Spectrum Access"
      ],
      image: img2
    },
    {
      title: "Track 2: Innovative Computing, Robotics, Next-generation IOT and Industrial Automation with Computational Intelligence",
      items: [
        "Computational Intelligence", "Signal Processing", "Computer vision", "Soft Computing",
        "Decision Support and Decision making", "Parallel computing", "Distributed computing",
        "Grid computing", "Cloud computing", "Mobile computing", "Biomedical computing",
        "Ubiquitous computing", "Image processing", "Information retrieval", "Deep learning",
        "Expert system", "Internet computing", "High performance computing", "Quantum Computing and Algorithms"
        // ... (rest of the items from the original component)
      ],
      image: img3
    },
    {
      title: "Track 3: Artificial Intelligence, Machine Learning, Big data, Blockchain and Analytics",
      items: [
        "AI Algorithms and Architectures", "Natural Language Processing and Text Analytics",
        "Image Processing", "AI in Healthcare and Medicine", "Autonomous Systems and Robotics",
        "AI in Finance and Economic Modeling", "AI for Social Good and Sustainable Development",
        "Model Interpretability and Explainable ML", "ML for Time Series Analysis and Forecasting",
        "Anomaly Detection and Predictive Maintenance"
        // ... (rest of the items from the original component)
      ],
      image: img4
    }
  ];

  const toggleTrack = (index) => {
    setActiveTrack(activeTrack === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-6 bg-white">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
            CALL FOR PAPER
          </h1>

          {/* Conference Description */}
          <div className="flex flex-col-reverse md:flex-row items-center mb-6 gap-4">
            <div className="flex-1 text-gray-700 text-base sm:text-lg text-justify">
              <p>
                The objective of the International Conference on Emerging Technology in AI, and Communication Systems (ICETCS-2025) is to provide a global forum for researchers, practitioners, industry experts, and academicians to present and discuss the latest advancements, challenges, and innovations in the fields of emerging technologies and intelligent systems. 
              </p>
            </div>
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img 
                src={img1} 
                alt="Innovative Computing" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Technical Tracks Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              TECHNICAL TRACKS
            </h2>
            <p className="text-gray-700 mb-4">
              IEEE - International Conference on Emerging Technology in AI, and Communication Systems (ICETCS-2025) - Invites original and unpublished manuscripts for submission in the following tracks (but not limited to):
            </p>

            {tracks.map((track, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div 
                  className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => toggleTrack(index)}
                >
                  <h3 className="font-semibold text-base sm:text-lg">
                    {track.title}
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 transform transition-transform ${activeTrack === index ? 'rotate-90' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {activeTrack === index && (
                  <div className="flex flex-col-reverse md:flex-row p-4 gap-4">
                    <ul className="flex-1 space-y-2 list-disc pl-5 text-gray-700">
                      {track.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm sm:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img 
                        src={track.image} 
                        alt={`Track ${index + 1} Illustration`} 
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForPaper;