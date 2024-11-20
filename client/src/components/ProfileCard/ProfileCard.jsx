import React, { useState } from 'react';
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

function ProfileCard({ name, title, imageSrc, speakerData }) {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] relative flex flex-col">
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="overflow-y-auto p-6 custom-scrollbar">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-xl">
                  <Avatar
                    src={imageSrc}
                    alt={name}
                    fallback={name.charAt(0)}
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
                  <p className="text-gray-600 mt-2">{title}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Biography</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {speakerData.bio}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{speakerData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{speakerData.jobTitle}</span>
                  </div>
                  {speakerData.hobbies && (
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{speakerData.hobbies}</span>
                    </div>
                  )}
                </div>

                {speakerData.skills && (
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {speakerData.skills.map((skill, index) => (
                        <Badge key={index}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {speakerData.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4 h-[600px] flex flex-col">
      <div className="flex-shrink-0 h-96 w-full">
        <img
          className="w-full h-full object-cover object-center"
          src={imageSrc}
          alt={name}
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{title}</p>
        <div className="mt-auto">
          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;