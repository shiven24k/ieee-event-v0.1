import React from "react";
import CGCimage from "../../assets/CGC-image.png";
import HunnyPahuja from "../../assets/HunnyPahuja.jpg";
import PradeepKumar from "../../assets/PradeepKumar.jpeg";
import Mirgendra from "../../assets/Mirgendra.jpg";
import ProfileCard from "../ProfileCard/ProfileCard";
import chairman from "../../assets/chairman.png";
import md from "../../assets/md.png";
import ed from "../../assets/ed.png";
import ed_dcpd from "../../assets/ed-dcpd.png";
import da from "../../assets/da.png";
import shivani from "../../assets/shivani.jpg";
import reg from "../../assets/reg.png";
import pradeepReddy from "../../assets/pradeepReddy.jpeg";
import ashwani from "../../assets/ashwani.jpg";
import sajjan from "../../assets/sajjan.jpeg";
import hodcse from "../../assets/hodcse.jpg";
import vikasdeep from "../../assets/vikasdeep.jpg";
import sarabpreet from "../../assets/sarabpreet.jpg";
import ankita from "../../assets/ankita.jpg";

function About() {
  return (
    <div>
      <div className="pt-10 flex justify-center">
        <h1 className=" text-red-600 mb-0 text-center text-4xl  font-bold">
          CHANDIGARH ENGINEERING COLLEGE
        </h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-auto">
          <img src={CGCimage} alt="CGC Jhanjeri" className="w-full md:w-auto" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 p-4">
        <div className="md:w-2/3">
          <h2 className=" text-2xl font-extrabold text-center mb-5">
            ABOUT THE INSTITUTE
          </h2>
          <div className="p-5 mt-10 text-justify bg-gray-100 rounded-md">
            <p>
            Established in 2012 with engineering as its flagship program, Chandigarh Engineering College, Jhanjeri (CEC-J), accredited with a NAAC A+ rating, has made significant strides in providing quality higher education at affordable costs. CEC-J, with origins tracing back to 2001 as part of the CEC Group, has emerged as one of North India’s premier higher education institutions, offering world-class education and extensive placement opportunities to students from across the country. CEC-J stands out for its strong international partnerships, having forged alliances with over 50 leading international colleges and universities across 25 countries. These collaborations provide our students with the chance to expand their global perspectives. The college is home to experienced faculty, many of whom are alumni of IITs, NITs and IIMs, and fosters a student-centric, research-driven environment. Our educational approach effectively combines theoretical knowledge with practical experience. In addition, CEC-J places great emphasis on comprehensive pre-placement training and has built robust industry-academia partnerships, making us leaders in campus placements. We have established connections with top-tier companies across various sectors to stay aligned with industry trends and implement an industry-relevant curriculum.
            </p>
            <div className="pt-5">
              <p>
                <span className="font-bold">VISION :</span> To become a
                top-notch technical institution offering professional training
                for the long-term advancement of society.
              </p>
              <p>
                <span className="font-bold">MISSION :</span> To attain academic
                flexibility via robust industry-academia interactions and
                emphasize employability, and entrepreneurship.
              </p>
              <p>
                <span className="font-bold">QUALITY POLICY :</span> To give
                children access to first-rate facilities, state-of-the-art
                technology, and highly trained teachers.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 mt-5 md:mt-0 md:ml-5">
          <img
            src="https://chandigarhengineeringcollege.com/uploads/banners/1719649726_df07b8e561efce2b733d.jpg"
            alt="Institute Image"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        
      </div>
      {/* chief partons */}
      <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              CHIEF PARTONS
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
            <ProfileCard
              name="S. Rashpal Singh Dhaliwal"
              title="Chairman, CGC Jhanjeri"
              imageSrc={chairman}
            />
            <ProfileCard
              name="Mr. Arsh Dhaliwal"
              title="Managing Director, CGC Jhanjeri"
              imageSrc={md}
            />
         
            
          </div>
        </div>
        {/* partons */}
      <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
               PARTONS
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
            <ProfileCard
              name="Dr. Vinay Goyal"
              title="Executive Director, CGC Jhanjeri"
              imageSrc={ed}
            />
            <ProfileCard
              name="Dr. Ansih Gupta"
              title="Director Academics, CGC Jhanjeri"
              imageSrc={da}
            />
            <ProfileCard
              name="Dr. Anupamdeep Sharma"
              title="Registrar, CGC Jhanjeri"
              imageSrc={reg}
            />
         
            
          </div>
        </div>

        {/* general chair */}
        <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              GENERAL CHAIR
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
              name="Dr. Pradeep Reddy"
              title="Director Engineering"
              imageSrc={pradeepReddy}
            />
            <ProfileCard
              name="Dr. Hunny Pahuja"
              title="HoD ECE, CGC Jhanjeri"
               imageSrc={HunnyPahuja}
            />
          </div>
        </div>
       

        {/* conference chair */}
        <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              CONFERENCE CHAIR
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
              name="Dr. Pradeep Kumar Jindal"
              title="Associate Professor"
              imageSrc={PradeepKumar}
            />
          </div>
        </div>
        {/* conference co-chair */}
        <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              CONFERENCE CO-CHAIR
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
            <ProfileCard
              name="Dr. Shivani Goyal"
              title="Assistant Professor"
              imageSrc={shivani}
            />
          </div>
        </div>

        {/* technical program chair
        <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              TECHNICAL PROGRAM CHAIR
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
            <ProfileCard
              name="Dr. Pradeep Kumar Jindal"
              title="Associate Professor"
              imageSrc={PradeepKumar}
            />
            <ProfileCard
              name="Dr. Shivani Goyal"
              title="Assistant Professor"
              imageSrc={shivani}
            />
          </div>
        </div> */}

        {/* publication chair */}
        <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              PUBLICATION CHAIR
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
            <ProfileCard
              name="Dr. Sarabpreet Kaur"
              title="Professor"
              imageSrc={sarabpreet}
            />
            <ProfileCard
              name="Dr. Ankita Aggarwal"
              title="Associate Professor"
              imageSrc={ankita}
            />
            <ProfileCard
              name="Dr. Mirgendra"
              title="Associate Professor"
              imageSrc={Mirgendra}
            />
          </div>
        </div>

         {/* organizing team */}
         <div>
          <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
            <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
              organizing team
            </h1>
          </div>
          <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
              name="Dr. Ashwani K Sharma"
              title="HoD Applied Sciences"
              imageSrc={ashwani}
            />
            <ProfileCard
              name="Dr. Sajjan Singh"
              // title="Director Engineering"
               imageSrc={sajjan}
            /><ProfileCard
              name="Dr. Vikas Deep Mann"
              title="HoD ME-Civil"
              imageSrc={vikasdeep}
            /><ProfileCard
              name="Dr. Rini Saxena"
              title="HoD CSE"
              imageSrc={hodcse}
            /><ProfileCard
              name="Dr. Anmol Gautam"
              title="Vice Principal"
              // imageSrc={pradeepReddy}
            />
          </div>
        </div>
    </div>
  );
}
export default About;
