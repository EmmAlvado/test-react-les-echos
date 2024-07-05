import React from 'react';

interface GridComponentProps {
  items: React.ReactNode[];
}

const GridComponent: React.FC<GridComponentProps> = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div key={index} className="grid-item">{item}</div>
      ))}
    </div>
  );
};

export default GridComponent;
