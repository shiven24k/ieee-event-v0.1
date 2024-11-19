import React from 'react';
import { Globe, Briefcase, Heart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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

const AboutMe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const speakerData = location.state?.speakerData;

  React.useEffect(() => {
    if (!speakerData) {
      navigate('/keynote-speakers');
    }
  }, [speakerData, navigate]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!speakerData) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  return (
    <div className="mt-10 min-h-screen">
      <main className="container mx-auto px-4 py-24">
        <div className="grid gap-24">
          <section className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-xl">
              <Avatar
                src={speakerData.img}
                alt={speakerData.name}
                fallback={speakerData.name.charAt(0)}
                className="absolute h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">{speakerData.name}</h1>
              <p className="text-lg text-muted-foreground">
                {speakerData.bio || `Distinguished speaker at ${speakerData.institute}`}
              </p>
            </div>
          </section>
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Profile</h2>
            <p className="max-w-8xl text-muted-foreground">
              {speakerData.about || `Distinguished faculty member at ${speakerData.institute}`}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-500" />
                <span>{speakerData.location || speakerData.institute}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-500" />
                <span>{speakerData.jobTitle || speakerData.institute}</span>
              </div>
              {speakerData.hobbies && (
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gray-500" />
                  <span>{speakerData.hobbies}</span>
                </div>
              )}
            </div>
            {speakerData.skills && (
              <div className="space-x-2">
                {speakerData.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            )}
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;