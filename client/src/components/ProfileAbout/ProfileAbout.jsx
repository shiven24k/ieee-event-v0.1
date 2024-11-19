import React from 'react';
import { Globe, Briefcase, Heart } from 'lucide-react';

const Avatar = ({ src, alt, fallback, className }) => (
  <div className={`relative inline-block rounded-full overflow-hidden bg-gray-200 ${className}`}>
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-gray-600 text-2xl font-semibold">
        {fallback}
      </div>
    )}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
    {children}
  </span>
);

const AboutMe = ({ name, location, jobTitle, hobbies, bio, skills, socialLinks, avatarSrc, avatarFallback }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <Avatar 
                className="w-32 h-32 md:w-48 md:h-48"
                src={avatarSrc}
                alt={name}
                fallback={avatarFallback}
              />
            </div>
            
            <div className="flex-grow space-y-4">
              <h1 className="text-3xl font-bold">{name}</h1>
              
              <p className="text-gray-600">
                {bio}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gray-500" />
                  <span>{jobTitle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gray-500" />
                  <span>{hobbies}</span>
                </div>
              </div>
              
              <div className="space-x-2">
                {skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="text-blue-500 hover:text-blue-600">
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutMe.defaultProps = {
  name: 'Jane Doe',
  location: 'San Francisco, CA',
  jobTitle: 'Senior Web Developer at Tech Innovators Inc.',
  hobbies: 'Hiking, Cooking, Photography',
  bio: "Hi there! I'm Jane, a passionate web developer with a love for creating beautiful and functional websites. When I'm not coding, you can find me exploring nature trails or experimenting with new recipes in the kitchen.",
  skills: ['React', 'Node.js', 'TypeScript', 'UI/UX Design'],
  socialLinks: [
    { platform: 'Twitter', url: '#' },
    { platform: 'LinkedIn', url: '#' },
    { platform: 'GitHub', url: '#' }
  ],
  avatarSrc: '/api/placeholder/192/192',
  avatarFallback: 'JD'
};

export default AboutMe;