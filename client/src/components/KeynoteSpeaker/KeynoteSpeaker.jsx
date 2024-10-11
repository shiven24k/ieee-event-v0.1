import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

const sections = [
  
  {
    title: "Inaugural Session/Plenary Talk",
    items: [
      "Prof. Noor Zaman Jhanjhi, School of Computer Science, Taylor’s University, Malaysia"
    ]
  },
  {
    title: "Invited Expert Talk-1",
    items: [
      "Prof. Zeev Zalevsky, School of Engineering, Bar-Ilan University, Israel"
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      "Prof. Mike Hinchey, University of Limerick, Ireland, UK"
    ]
  },
  {
    title: "Invited Expert Talk-3",
    items: [
      "Prof. K. S. Sandha, Thapar University, Patiala"
    ]
  },
  {
    title: "Invited Expert Talk-4",
    items: [
      "Prof. Balwinder Raj, NIT, Jalandhar"
    ]
  },
  {
    title: "Invited Expert Talk-5",
    items: [
      "Prof. Ankush Kansal, Thapar University, Patiala"
    ]
  },
  {
    title: "Valedictory Session/Plenary Talk",
    items: [
      "Prof. Kulbir Singh, Thapar University, Patiala"
    ]
  }
];

function Advisory(){
    return(
      <div className="container mx-auto p-4 pt-20 sm:pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Keynote Speakers</h1>
      {sections.map((section, index) => (
        <div >
          {/* <div className="flex flex-wrap mt-6 w-full relative flex-col flex-auto">
            <h1 className="mb-5 text-xl sm:text-[1.75rem] font-bold text-dark uppercase">
              {section.title}
            </h1>
          </div> */}
          <div className="flex w-full text-lg sm:text-2xl">
            <ul className="list-disc pl-5">
              {section.items.map((item, idx) => (
                <li className="mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    )
}
export default Advisory;