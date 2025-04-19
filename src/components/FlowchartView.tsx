import React, { useState } from 'react';
import Module from './Module';
import { flowchartData } from '../data/flowchartData';
import Controls from './Controls';

const FlowchartView = () => {
  const [scale, setScale] = useState(1);
  
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2.0));
  };
  
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };
  
  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="flowchart-container relative min-h-screen">
      <Controls 
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        scale={scale}
      />
      
      <div className="flowchart-canvas overflow-x-auto py-8">
        <div 
          className="flowchart-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-300 ease-in-out mx-auto max-w-7xl px-4"
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'center top',
            minHeight: '100vh'
          }}
        >
          {flowchartData.map((module) => (
            <Module
              key={module.id}
              data={module}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowchartView;