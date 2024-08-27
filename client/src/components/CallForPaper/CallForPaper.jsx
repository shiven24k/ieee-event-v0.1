import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

function CallForPaper(){
    return (
      <div className=" mt-5 container mx-auto py-3 bg-cover bg-no-repeat w-full px-4">
      
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">CALL FOR PAPER</h1>
        <div className="flex justify-between items-center mb-2">
        
          
        </div>
        <div className="flex flex-col text-justify items-center mb-5 md:flex-row">
        <div className='flex flex-col gap-5'>
  <p className="mb-5 pr-5">
    
    {/* International Conference on Emerging Technology and Intelligent Systems (ICETIS) schedule on 11th -13th Sep, 2025. Its objective is to bring together leading academic scientists, researchers, research scholars, and educators to exchange and share their experiences and research results on all aspects of quality control and its management strategies. Experts will share the most recent innovations, trends on advancement in Communication Systems and Networking, Embedded Systems and IOT, Intelligent Computing, Artificial and Machine Learning, and Industrial and commercial applications of technologies.
     */}
     The objective of the International Conference on Emerging Technologies and Intelligent Systems (ICETIS-2025) is to provide a global forum for researchers, practitioners, industry experts, and academicians to present and discuss the latest advancements, challenges, and innovations in the fields of emerging technologies and intelligent systems. The conference aims to facilitate the exchange of knowledge, foster interdisciplinary collaboration, and explore the integration of intelligent systems with emerging technologies to address complex global challenges.

  </p>
  <div >
      <h2 className="text-2xl font-bold mb-4">Publications Opportunity</h2>
      <p className="mb-4">
        Selected research papers will be considered for publication in an IEEE (SCOPUS Indexed) conference after a thorough peer-review process. All abstracts will be published in the conference proceedings. Researchers are responsible for covering any additional publication costs. This opportunity provides valuable visibility for your work, so ensure your submission meets the required standards.
      </p>
    </div>
  
</div>

  
        
        <img src={img1} alt="Innovative Computing" className="w-[30em]  object-cover rounded-lg shadow-lg md:w-1/4 mt-5 md:mt-0" />
        </div>
        
        
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">TECHNICAL TRACKS</h3>
          
        </div>
        <p className="mb-5 ">
          {/* ICETIS 2025 invites original and unpublished manuscripts for submission in the following tracks (but not limited to): */}
          IEEE - International Conference on Emerging Technologies, and Intelligent Systems (ICETIS-2025) - Invites original and unpublished manuscripts for submission in the following tracks (but not limited to):

        </p>
        <ul className="mb-5">
  <li className="flex items-center mb-2">
    <svg className="flex-shrink-0 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Track 1: IInnovative in Communication/Electronics/Electrical/Wireless/Optical Networks and Security sensors.
  </li>
  <li className="flex items-center mb-2">
    <svg className="flex-shrink-0 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Track 2: Innovative Computing, Robotics, Next-generation IOT and Industrial Automation.
  </li>
  <li className="flex items-center mb-2">
    <svg className="flex-shrink-0 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Track 3: Artificial Intelligence, Machine Learning, Big data, Blockchain and analytics.
  </li>
</ul>
        <div className="flex flex-col gap-5">
  <div className="flex justify-between items-center mb-2">
    <h4 className="text-lg font-bold">Innovative Communication/Electronics/ Electrical/Networks and Security</h4>
  </div>
  <div className='flex flex-col md:flex-row justify-between items-center'>
    <ul className="p-5 list-disc list-inside mb-5 w-full md:w-[75%]">
      <li>Wireless sensor networks</li>
      <li>Wireless communications</li>
      <li>Optical Communication</li>
      <li>Satellite Communication</li>
      <li>Microelectronics</li>
      <li>Embedded System</li>
      <li>Nanoelectronics</li>
      <li>Mechatronics</li>
      <li>Renewable and Sustainable Energy</li>
      <li>Power Systems</li>
      <li>Smart Grid</li>
      <li>Mobile ad-hoc networks</li>
      <li>Software defined networks</li>
      <li>Information theory and coding</li>
      <li>Cloud communications and networking</li>
      <li>Wearable network and systems</li>
      <li>Personal communication systems</li>
      <li>Vehicular networks and applications</li>
      <li>Virtual and overlay networks</li>
      <li>Future Internet Architecture</li>
      <li>Next Generation Networking</li>
      <li>Quantum Networking</li>
      <li>QoS Provisioning and Architectures</li>
      <li>Telecommunication Services and Applications</li>
      <li>Network Performance</li>
      <li>Computer Security</li>
      <li>Digital Signature</li>
      <li>Information Security</li>
      <li>Network Security</li>
      <li>Cyber Security</li>
      <li>MANET’s</li>
    </ul>
    <div className="flex justify-center items-center w-full md:w-1/4 mt-5 md:mt-0">
      <img src={img2} alt="Innovative Communication" className="w-[20em] md:w-[30em] object-cover rounded-lg shadow-xl" />
    </div>
  </div>

  <div className="flex justify-between items-center mb-2">
    <h4 className="text-lg font-bold">Innovative Computing</h4>
  </div>
  <div className='flex flex-col md:flex-row justify-between items-center'>
    <ul className="list-disc p-5 list-inside mb-5 w-full md:w-[70%]">
      <li>Computational Intelligence</li>
      <li>Signal Processing</li>
      <li>Computer vision</li>
      <li>Soft Computing</li>
      <li>Decision Support and Decision making</li>
      <li>Parallel computing</li>
      <li>Distributed computing</li>
      <li>Grid computing</li>
      <li>Cloud computing</li>
      <li>Mobile computing</li>
      <li>Biomedical computing</li>
      <li>Ubiquitous computing</li>
      <li>Image processing</li>
      <li>Information retrieval</li>
      <li>Deep learning</li>
      <li>Expert system</li>
      <li>Internet computing</li>
      <li>High performance computing</li>
    </ul>
    <div className="flex justify-center items-center w-full md:w-1/4 mt-5 md:mt-0">
      <img src={img3} alt="Innovative Communication" className="w-[20em] md:w-[30em] object-cover rounded-lg shadow-xl" />
    </div>
  </div>

  <div className="flex justify-between items-center mb-2">
    <h4 className="text-lg font-bold">Artificial Intelligence/Machine Learning/Robotics/IOT/Blockchain</h4>
  </div>
  <div className='flex flex-col md:flex-row justify-between items-center'>
    <ul className="list-disc p-5 list-inside mb-5 w-full md:w-3/4">
      <li>Machine Learning</li>
      <li>Artificial Intelligence</li>
      <li>Robotics</li>
      <li>Blockchain</li>
      <li>Intelligent Systems for IoT</li>
      <li>Environmental Monitoring</li>
      <li>Machine to Machine/Device Communications</li>
      <li>Network Design and Architecture</li>
      <li>Wireless Systems and Applications</li>
      <li>Infrastructure Management</li>
      <li>IoT and Big Data</li>
      <li>Home Automation</li>
      <li>Security and Privacy</li>
      <li>Social Implications of IoT</li>
      <li>Technological focus for Smart Environments</li>
      <li>Smart City Case Studies</li>
      <li>Data Analysis and Visualization</li>
      <li>Architecture for secure and interactive IoT</li>
      <li>Sensor, Wireless Technologies and APIs</li>
      <li>Emerging IoT</li>
    </ul>
    <div className="flex justify-center items-center w-full md:w-1/4 mt-5 md:mt-0">
      <img src={img4} alt="Innovative Communication" className="w-[20em] md:w-[30em] object-cover rounded-lg shadow-xl" />
    </div>
  </div>
</div>
        
        
        <p className="mb-5 text-right text-sm ">
           Studies and new developments, which are relevant to science, engineering and technology are welcomed to the conference.
        </p>
      </div>
    </div>
    )
}
export default CallForPaper;