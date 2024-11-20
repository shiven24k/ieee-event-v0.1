import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProfileAbout({ speakers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the speaker data based on the ID
  const speaker = speakers.find(s => s.name === decodeURIComponent(id));

  if (!speaker) {
    return <div>Speaker not found</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-red-600 hover:text-red-700 flex items-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{speaker.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{speaker.institute}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-700">{speaker.about}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Biography</h2>
                <p className="text-gray-700">{speaker.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Location</h2>
                  <p className="text-gray-700">{speaker.location}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Position</h2>
                  <p className="text-gray-700">{speaker.jobTitle}</p>
                </div>
              </div>

              {speaker.skills && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {speaker.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-4 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;