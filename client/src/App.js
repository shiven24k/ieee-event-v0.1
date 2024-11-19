import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CallForPaper from './components/CallForPaper/CallForPaper';
import PaperSubmission from './components/PaperSubmission/PaperSubmission';
import Registration from './components/Registration/Registration';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Organizing from './components/OrganizingCommittee/Organizing';
import TechnicalProgram from './components/TechnicalProgramCommittee/TechnicalProgram';
import StudentTeam from './components/StudentTeam/StudentTeam';
import KeynoteSpeaker from './components/KeynoteSpeaker/KeynoteSpeaker';
import Advisory from './components/AdvisoryCommittee/AdvisoryCommittee';
import Steering from './components/SteeringCommittee/SteeringCommittee';
import Finance from './components/FinanceCommittee/FinanceCommittee';
import Publication from './components/PublicationCommittee/PublicationCommittee';
import Publicity from './components/PublicityCommittee/PublicityCommittee';
import Hospitality from './components/HospitalityCommittee/HospitalityCommittee';
import Acccomodation from './components/AccommodationCommittee/AccommodationCommittee';
import Transportation from './components/TransportationCommittee/TransportationCommittee';
import ProfileAbout from './components/ProfileAbout/ProfileAbout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/keynotespeaker" element={<KeynoteSpeaker />} />
          <Route path="/organizing" element={<Organizing />} />
          <Route path="/technical" element={<TechnicalProgram />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
          <Route path="/papersubmission" element={<PaperSubmission />} />
          <Route path="/studentteam" element={<StudentTeam />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/steering" element={<Steering />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/publicity" element={<Publicity />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/accommodation" element={<Acccomodation />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path='/profileabout' element={<ProfileAbout />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;