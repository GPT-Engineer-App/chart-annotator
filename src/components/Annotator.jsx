import React, { useState } from 'react';

const Annotator = ({ image, onAnnotate }) => {
  const [annotations, setAnnotations] = useState([]);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newAnnotation = { x, y };
    setAnnotations([...annotations, newAnnotation]);
    onAnnotate([...annotations, newAnnotation]);
  };

  return (
    <div className="relative">
      <img src={image} alt="To be annotated" onClick={handleImageClick} className="max-w-full h-auto" />
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className="absolute bg-red-500 rounded-full"
          style={{
            width: '10px',
            height: '10px',
            left: `${annotation.x - 5}px`,
            top: `${annotation.y - 5}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Annotator;