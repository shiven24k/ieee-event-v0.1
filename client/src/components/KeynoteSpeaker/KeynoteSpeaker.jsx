import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import balwinder from '../../assets/balwinder.png';
import noor from '../../assets/noor.png';
import zeev from '../../assets/zeev.png';
import mike from '../../assets/mike.jpg';
import salekul from '../../assets/salekul.jpg';
import shashi from '../../assets/shashi.jpeg';
import ks from '../../assets/ks.jpeg';
import kubir from '../../assets/kubir.jpg';
const sections = [
  {
    title: "Inaugural Session/Plenary Talk",
    items: [
      {
        name: "Prof. Noor Zaman Jhanjhi",
        institute: "School of Computer Science, Taylor's University, Malaysia",
        bio: "A distinguished professor with expertise in cybersecurity and blockchain technology.",
        about: "Professor Dr. Noor Zaman Jhanjhi, currently serving as a Professor and Programme Director of Postgraduate Research Programmes (Computing) at Taylor’s University, Malaysia, is a distinguished scholar with over 24 years of teaching, research, and industry experience. Recognized among the world's top 2% scientists for 2022, 2023, and 2024, he has achieved numerous accolades, including the Vice Chancellor’s Award as Taylor’s University Most Cited Researcher for 2023 and being ranked among the top three Computer Science researchers in Malaysia by the AD Scientific Index for 2025. With a prolific research portfolio comprising over 700 publications, including 400+ SCIE-indexed journal articles and 60+ authored or edited books with leading publishers, his work spans cybersecurity, IoT security, wireless networks, and machine learning. Holding an impressive Google Scholar H-index of 71 with over 17,400 citations, Dr. Jhanjhi has delivered 60+ keynote speeches globally, secured 13 international patents, supervised 38 postgraduate theses, and successfully led international research collaborations with over 50 universities and industries worldwide. Additionally, his leadership roles include curriculum design, academic planning, and securing ABET accreditation for multiple programs, showcasing his exceptional expertise in academia, research, and innovation.",
        location: "Kuala Lumpur, Malaysia",
        jobTitle: "Professor at Taylor's University",
        hobbies: "Research, Writing, Technology Innovation",
        skills: ["Cybersecurity", "Blockchain", "AI", "IoT Security"],
        img:noor
      }
    ]
  },
  {
    title: "Invited Expert Talk-1",
    items: [
      {
        name: "Prof. Zeev Zalevsky",
        institute: "School of Engineering, Bar-Ilan University, Israel",
        bio: "He is a renowned expert in optical engineering and biomedical optics.",
        about: "Zeev Zalevsky (Senior Member, IEEE) received the B.Sc. and direct Ph.D. degrees in electrical engineering from Tel-Aviv University, Israel, in 1993 and 1996, respectively.,He is currently a full Professor in the faculty of engineering in Bar-Ilan University, Israel. His major fields of research are optical super resolution, biomedical optics, nanophotonics and electrooptical devices, RF photonics, and beam shaping. He has published more than 350 refereed journal papers, more than 190 conference proceeding papers, more than 315 international presentations, out of which more than 105 were invited or plenary, has been issued 32 patents and more than 15 patents pending, six authored books, three books as an editor, and 27 book chapters.,Prof. Zalevsky has received several international and national awards, for his research activity, such as the Krill prize given by the Wolf foundation (Wolf prize for young scientists), the International Commission of Optics (ICO) prize, Juludan prize for advancing technology in medicine, the international SAOT (School for Advanced Optical Technologies) Young Researcher Prize for his pioneering contributions in the development of optical techniques for enhanced imaging resolution and its use for biomedical applications, the Lean and Maria Taubenblatt Prize for Excellence in Medical Research, the young investigator award in nanoscience and nanotechnology and the international Wearable Technologies (WT) Innovation World Cup 2012 Prize. He is the Fellow of OSA, SPIE, and EOS, and also received an OSA Outstanding Reviewer Award for 2013.",
        location: "Ramat Gan, Israel",
        jobTitle: "Professor at Bar-Ilan University",
        hobbies: "Research, Innovation, Teaching",
        skills: ["Optical Engineering", "Biomedical Optics", "Signal Processing"],
        img:zeev
      }
    ]
  },
  {
    title: "Invited Expert Talk-1",
    items: [
      {
        name: "Prof. Mike Hinchey",
        institute: "University of Limerick, Ireland, UK",
        bio: "He is an Irish computer scientist and former Director of the Irish Software Engineering Research Centre (Lero), a multi-university research centre headquartered at the University of Limerick, Ireland.",
        about: "​Mike Hinchey is Professor of Software Engineering at University of Limerick, Ireland. Prior to joining Lero, Professor Hinchey was Director of the NASA Software Engineering Laboratory; he continues to serve as a NASA Expert. In 2009 he was awarded NASA's Kerley Award as Innovator of the Year. Hinchey holds a B.Sc. in Computer Systems from University of Limerick, an M.Sc. in Computation from University of Oxford and a PhD in Computer Science from University of Cambridge. The author/editor of more than 15 books and over 200 articles on various aspects of Software Engineering, at various times Hinchey previously hel​​d positions as Full Professor in Australia, UK, Sweden and USA. He is a Chartered Engineer, Chartered Engineering Professional, Chartered Mathematician and Charted Information Technology Professional, as well as a Fellow of the IET, British Computer Society and Irish Computer Society.  He is President of IFIP (International Federation for Information Processing) and Vice-Chair (and Chair-Elect) of IEEE​ UK & Ireland section. He is also Editor-in-Chief of Innovations in Systems and Software Engineering: a NASA Journal and Journal of the Brazilian Computer Society.",
        location: "Limerick, Ireland",
        jobTitle: "Software Engineering at University of Limerick",
        hobbies: "Research, Innovation, Teaching",
        skills: ["Optical Engineering", "Biomedical Optics", "Signal Processing"],
        img:mike
      }
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      {
        name: "Prof. Salekul Islam",
        institute: "North South University, Dhaka, Bangladesh",
        bio: "Senior Member of IEEE with expertise in computer networks and security.",
        about: "Dr. Salekul Islam, a distinguished academic and researcher, is currently a Professor in the Electrical and Computer Engineering (ECE) Department at North South University since 2024. Previously, he served as a Professor and Head of the Computer Science and Engineering (CSE) Department at United International University (UIU) for nearly a decade and held leadership roles such as Director of the Institutional Quality Assurance Cell (IQAC) and the Centre for AI and Robotics (CAIR). Under his guidance, UIU student teams achieved remarkable success in the University Rover Challenge, securing top global rankings. Dr. Islam earned his PhD in Computer Science from Concordia University, Canada, and later pursued postdoctoral research at INRS with an FRQNT Fellowship. Actively contributing to the development of engineering education, he has played a vital role with Bangladesh Board of Accreditation for Engineering and Technical Education (BAETE) and the National Working Committee on Blended Learning Policy. His research spans cutting-edge domains such as Blockchain, Edge Cloud Computing, Network Security, and Robotics, and he serves as an Associate Editor for prominent journals like IEEE Access. A Senior Member of IEEE and a Fellow of IEB, Dr. Islam has also chaired several international conferences, further solidifying his impact on both academia and industry.",
        location: "Dhaka, Bangladesh",
        jobTitle: "Professor at North South University",
        hobbies: "Research, Teaching, Networking",
        skills: ["Cloud Computing", "Network Security", "Blockchain", "AI"],
        img:salekul
      }
    ]
  },
  {
    title: "Invited Expert Talk-2",
    items: [
      {
        name: "Prof. Shashi Kant Gupta",
        institute: "Eudoxia Research University, New Castle, Delaware, USA",
        bio: "An expert in artificial intelligence applications for the Metaverse, focusing on augmented reality, mixed reality, and NLP.",
        about: "Dr. Shashi Kant Gupta pursued Bachelor of Technology from Northern India Engineering College, Lucknow, U.P., India in 2008 and Post Graduate Diploma in Information technology form Symbiosis Centre for Distance Learning, Pune in the year 2011. He has completed his Master of Technology from Azad Institute of Engineering & Technology, Lucknow, U.P., India in the year 2015. He has completed his Ph.D. in CSE from Integral University, Lucknow, UP, India in the year 2022. He is currently doing Post Doctoral Fellow from Eudoxia Research University, USA. He is CEO & Founder of Chinmay Research Education and Publication Private Limited, Lucknow, UP, India. He is also working as an editor-in-chief of a reputed peer-reviewed scholarly International Journal of Data Informatics and Intelligent computing (IJDIIC). He has worked as Assistant Professor in the Department of Computer Science and Engineering, PSIT, Kanpur, U.P., India. He has also served as an Associate Professor in School of Computer Applications at BBD University. He has worked in many other reputed Universities and colleges as a faculty. He is an author and an editor in many CRC Press and Taylor & Francis group Book Series. He is a member of Spectrum IEEE & Potentials Magazine IEEE since 2019 and many more international organizations for research activities. He has got various International Awards. He has more than 15 Indian patents and 2 Germany patents. He has published many research papers in reputed international journals with SCOPUS, (ESCI & SCI) WOS indexed journals and published many papers in National and International conferences and as well as presented papers in Seminars. He has organized various Faculty Development Programmes, Seminars, Workshops, Short Term Courses at University level. His main research work focuses on performance enhancement through cloud computing, Big Data Analytics, IoT, Blockchain and Computational Intelligence-based Education. He has published many books related to green computing, Computer Organization and Architecture and many more. He has edited many books as an editor. He is currently working as a reviewer in various international journals like BJIT and many more. He is working as editorial board member of various reputed national and international journals. He has more than 12 years of teaching experience and 2 years of Industrial Experience.",
        location: "New Castle, Delaware, USA",
        jobTitle: "Professor at Eudoxia Research University",
        hobbies: "Research, Innovation, Writing",
        skills: ["Artificial Intelligence", "Metaverse", "Natural Language Processing"],
        img:shashi
      }
    ]
  },
  {
    title: "Invited Expert Talk-3",
    items: [
      {
        name: "Prof. K.S Sandha",
        institute: "Thapar University, Patiala",
        bio: "An academic at Thapar University with contributions to computer science and interdisciplinary technologies.",
        about: "Professor K.S. Sandha, also known as Dr. Karmjit Singh Sandha, is an Associate Professor at the Thapar Institute of Engineering and Technology, specializing in the field of VLSI interconnects, with research interests including MWCNT based interconnects, optical interconnects, and embedded systems; he is primarily known for his expertise in microelectronics and related technologies within the Department of Electronics and Communication Engineering at Thapar University",
        location: "Patiala, India",
        jobTitle: "Professor at Thapar University",
        hobbies: "Teaching, Mentoring, Research",
        skills: ["Computer Science", "Engineering", "Technology Development"],
        img:ks
      }
    ]
  },
  {
    title: "Valedictory Session/Plenary Talk",
    items: [
      {
        name: "Prof. Kulbir Singh",
        institute: "Thapar University, Patiala",
        bio: "A faculty member at Thapar University known for contributions to technical education.",
        about: "Dr. Kulbir Singh is a Professor and the Head of the Electronics and Communication Engineering Department at Thapar Institute of Engineering & Technology, Patiala, India. Renowned for his academic and leadership excellence, he has contributed significantly to advancing education and research in electronics and communication engineering. Dr. Singh's commitment to fostering innovation and excellence has established the department as a hub for cutting-edge learning and development.",
        location: "Patiala, India",
        jobTitle: "Professor at Thapar University",
        hobbies: "Academic Development, Teaching",
        skills: ["Education", "Engineering", "Technical Training"],
        img:kubir
      }
    ]
  }
  ,
  {
    title: "Inaugural Session/Plenary Talk",
    items: [
      {
        name: "Dr. Balwinder Raj",
        institute: "National Institute of Technology, Jalandhar, Punjab, India",
        img: balwinder,
        bio: "He is an accomplished researcher in computer science and engineering.",
        about: "He is currently working as Associate Professor in ECE Department, NIT Jalandhar and also hold the position of Associate Dean Academic-PG since June 2024. Earlier, he worked as Associate Dean of Industry and International Affairs and having more than 15 experience in teaching, research and administrative. He did B. Tech, Electronics Engineering (PTU Jalandhar), M. Tech-Microelectronics (PU Chandigarh) and Ph.D- VLSI Design (IIT Roorkee), India in 2004, 2006 and 2010 respectively. For further research work, European Commission awarded him Mobility of life research fellowship for postdoc research work at University of Rome, Tor Vergata, Italy in 2010-2011. He also worked as visiting researcher at KTH university Sweden, Oct-Nov. 2013 and Alto University Finland July 2017. Dr. Raj has authored/co-authored 08 books, 15 book chapters and more than 100 research papers in peer reviewed international/national journals and conferences. He guided 12 PhDs and currently 6 PhD scholars are working with him. He guided more than 45 M.Tech students. Dr. Raj completed 6 research projects from DST Delhi, SERB Delhi, ISRO and CIMO Finland. Currently he is handing two research projects from AICTE and SERB. His areas of interest in research are Nanoscale Semiconductor Device Modeling, Memory design for AI Applications, Low Power VLSI Design, Digital/Analog VLSI Design and FPGA implementation.",
        location: "Jalandhar, India",
        jobTitle: "Professor at NIT Jalandhar",
        hobbies: "Academic Research, Mentoring, Technology Development",
        skills: ["Computer Science", "Engineering", "Research Methodology"],
        
      }
    ]
  }
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
                imageSrc={item.img}
                speakerData={item}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advisory;