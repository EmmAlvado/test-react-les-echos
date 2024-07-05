import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="title-with-underline">
      <div className="title-with-underline__text">
        {title}
        <span className="title-with-underline__underline"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
