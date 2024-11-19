import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ name, title, imageSrc, speakerData }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profileabout`, {
      state: { speakerData }
    });
  };

  return (
    <div className="flex flex-col items-center m-4 sm:m-10 pb-6 sm:pb-10">
      <div className="inline-block relative shrink-0 rounded-[.95rem]">
        <img className="object-cover rounded-[.65rem] w-[8em] h-[8em] sm:w-[10em] sm:h-[10em]" src={imageSrc} alt={name} />
      </div>
      <div className="text-center mt-4">
  <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1rem] sm:text-[1.25rem] transition-colors duration-200 ease-in-out cursor-default">
    {name}
  </a>
  <span className="block font-medium text-sm sm:text-base">{title}</span>
</div>
      <div className="mt-4">
        <button 
          onClick={handleViewProfile}
          className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 ease-in-out"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  name: 'Dignitaries',
  title: 'Position Title',
  imageSrc: 'https://via.placeholder.com/150'
};

export default ProfileCard;