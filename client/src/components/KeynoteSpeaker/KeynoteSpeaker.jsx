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
        about: "Prof. Dr. Noor Zaman Jhanjhi is a highly esteemed Senior Professor of Computer Science, specializing in Artificial Intelligence and Cybersecurity. He currently holds the position of Professor at the School of Computer Science at Taylor's University, Malaysia, and serves as the Program Director for Postgraduate Research Degree Programmes as well as the Director of the Center for Smart Society (CSS5). With a career marked by academic leadership and groundbreaking research, Prof. Jhanjhi has been pivotal in advancing research and education in computer science. Recognized globally, Prof. Jhanjhi has been ranked among the world's top 2% research scientists for three consecutive years (2022, 2023, and 2024). In Malaysia, he is ranked among the top three computer science researchers and was honored with the Outstanding Faculty Member award by MDEC Malaysia in 2022, as well as the Vice Chancellor's Best Research Citations Award from Taylor's University in 2023. His impressive academic portfolio includes over 60 research books edited or authored with prestigious publishers such as Springer, Elsevier, Taylor & Francis, Wiley, and IGI Global USA. His research has garnered more than 1000 points in impact factor, reflecting the depth and breadth of his contributions to the field. A dedicated mentor, Prof. Jhanjhi has supervised and co-supervised 38 postgraduate students to successful graduation and has served as an external examiner for over 60 Ph.D. and Master's theses globally. In addition to his academic accomplishments, Prof. Jhanjhi holds Associate Editor and Editorial Board positions with several high-ranking journals, including PeerJ Computer Science, CMC Computers, Materials & Continua, and Frontiers in Communication and Networks. He was also recognized as an Outstanding Associate Editor for IEEE ACCESS. His contributions to research and innovation are further demonstrated by his successful management of over 40 internationally funded research grants. A sought-after keynote speaker, Prof. Jhanjhi has delivered over 60 invited talks at international conferences and has chaired numerous sessions. His commitment to academic excellence and accreditation extends to his involvement with ABET, NCAAA, and NCEAC over the past decade.",
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
        about: "Dr. Shashi Kant Gupta, Post-Doctoral Fellow and Researcher, Computer Science and Engineering, Eudoxia Research University, USA in collaboration with Eudoxia Research Centre, India. ORCID: 0000-0001-6587-5607. He is currently working as an Adjunct Research Faculty, Centre for Research Impact & Outcome, Chitkara University Institute of Engineering and Technology. Chitkara University, Rajpura, 140401, Punjab, India. He is working as an Adjunct Faculty in the Department of PURE & APPLIED MATHEMATICS, Saveetha School of Engineering University, India. He is working as Honorary Adjunct Faculty, School of Computing, Maryam Abacha American University of Nigeria (MAAUN), Nigeria. He is working as an Honorary Senior Research Fellow, Department of Scientific Research, Innovation and Training of Scientific and Pedagogical Staff, University of Economics and Pedagogy, Karshi City, Uzbekistan. He is working as a Research Collaborator and Invited Visiting Senior Scientist at the Research Institute of IoT and Cybersecurity, Department of Electronic Engineering, National Kaohsiung University of Science and Technology, Taiwan. He has completed his Ph.D. (CSE) from Integral University, Lucknow, UP, India, & Worked as Assistant Professor in the Department of Computer Science and Engineering, ITM, Lucknow, U.P., India & Worked as Assistant Professor in the Department of Computer Science and Engineering, PSIT, Kanpur, U.P., India, Worked as Associate Professor, School of Computer Applications, BBD University, Lucknow, UP, India, Worked as Assistant Professor, Department of Computer Science and Engineering, Ambalika Institute of Management and Technology, Lucknow, UP, India. & Also worked as Senior Lecturer, Department of IT, MCSCET, Lucknow, UP, India. He is currently working as Founder and CEO of CREP PVT. LTD., Lucknow, UP, India. He is a member of Spectrum IEEE & Potentials Magazine IEEE since 2019 and many more international organizations for research activities. He is an Editor-in-chief of International Journal of Data Informatics and Intelligent computing (IJDIIC) also Editor-in-chief of International Journal of Emerging Technologies in Computer and Communication (LJETCC). Senior Editor in Global Research Journal form London Organization of Skill Development, London, United Kingdom. He has published many research papers in reputed international journals, conferences & seminars with SCOPUS and SCI indexing. He has got many awards from many International and national organizations. He has organized various Faculty Development Programs, Seminars, Workshops, and Short- Term Courses at University level. His main research work focuses on Cloud computing, Big Data Analytics, IoT and Computational Intelligence-based Education. He is currently working as a reviewer and editorial in various international journals. He is currently editor in many edited books of different publishers like CRC Press, Taylor and Francis group Publication, Routledge Publisher, Bentham Science Publishers, Springer Nature Publisher, Wiley Publisher etc. He has published many patents like Indian, Germany, UK etc in the field of CSE and IT. He has more than 12 years of teaching experience, 2 years of Industrial Experience and more than 2.5 years as CEO and Founder of a firm.",
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
  // Flatten all items from all sections into a single array
  const allSpeakers = sections.reduce((acc, section) => {
    return [...acc, ...section.items];
  }, []);

  return (
    <div className="container mx-auto p-4 pt-20 sm:pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Keynote Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSpeakers.map((item, idx) => (
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
  );
}

export default Advisory;