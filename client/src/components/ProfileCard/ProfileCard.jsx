import React from 'react';

const ProfileCard = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col m-4 sm:m-10 pb-6 sm:pb-10">
      {/* <div className="inline-block relative shrink-0 rounded-[.95rem]">
        <img className="object-cover rounded-[.65rem] w-[8em] h-[8em] sm:w-[10em] sm:h-[10em]" src={imageSrc} alt={name} />
      </div> */}
      <div className="text-center mt-4">
        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1rem] sm:text-[1.25rem] transition-colors duration-200 ease-in-out">
          {name}
        </a>
        <span className="block font-medium text-sm sm:text-base">{title}</span>
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