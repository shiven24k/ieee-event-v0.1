import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import balwinder from '../../assets/balwinder.png';

const sections = [
 
  {
    title: "Inaugural Session/Plenary Talk",
    items: [
      { name: "Prof. Noor Zaman Jhanjhi", institute: "School of Computer Science, Taylor’s University, Malaysia" }
    ]
  },
  {
    title: "Invited Expert Talk-1",
    items: [
      { name: "Prof. Zeev Zalevsky", institute: "School of Engineering, Bar-Ilan University, Israel" }
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      { name: "Prof. Mike Hinchey", institute: "University of Limerick, Ireland, UK" }
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      { name: "Prof. Salekul Islam", institute: "North South University, Dhaka, Bangladesh" }
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      { name: "Prof. Shashi Kant Gupta", institute: "Eudoxia Research University, New Castle, Delaware, USA" }
    ]
  },
  {
    title: "Invited Expert Talk-3",
    items: [
      { name: "Prof. K. S. Sandha", institute: "Thapar University, Patiala" }
    ]
  },
  {
    title: "Valedictory Session/Plenary Talk",
    items: [
      { name: "Prof. Kulbir Singh", institute: "Thapar University, Patiala" }
    ]
  }, {
    title: "Inaugural Session/Plenary Talk",
    items: [
      { name: "Dr. Balwinder Raj", institute: "National Institute of Technology, Jalandhar, Punjab, India", img:balwinder }
    ]
  },
];

function Advisory() {
  return (
    <div className="container mx-auto p-4 pt-20 sm:pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Keynote Speakers</h1>
      {sections.map((section, index) => (
        <div key={index}>
          
          <div className="flex flex-wrap justify-center">
            {section.items.map((item, idx) => (
              <ProfileCard
                key={idx}
                name={item.name}
                title={item.institute}
                imageSrc={item.img} // Replace with actual image URL if available
              />
                
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advisory;