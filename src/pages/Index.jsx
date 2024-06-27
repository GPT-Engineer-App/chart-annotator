import React, { useState } from 'react';
import ChartControls from '../components/ChartControls';
import ImageUploader from '../components/ImageUploader';
import Annotator from '../components/Annotator';
import ChartRenderer from '../components/ChartRenderer';

const Index = () => {
  const [image, setImage] = useState(null);
  const [chartType, setChartType] = useState('line');
  const [chartTitle, setChartTitle] = useState('');
  const [chartData, setChartData] = useState([]);
  const [annotations, setAnnotations] = useState([]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Annotate and Render Chart</h1>
      <ImageUploader onImageUpload={setImage} />
      {image && <Annotator image={image} onAnnotate={setAnnotations} />}
      <ChartControls
        chartType={chartType}
        setChartType={setChartType}
        chartTitle={chartTitle}
        setChartTitle={setChartTitle}
        chartData={chartData}
        setChartData={setChartData}
      />
      {annotations.length > 0 && (
        <ChartRenderer
          data={annotations}
          chartType={chartType}
          chartTitle={chartTitle}
          chartData={chartData}
        />
      )}
    </div>
  );
};

export default Index;