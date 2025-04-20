import React from 'react';
import Component from './Component';
import { ModuleType } from '../types/flowchart';

interface ModuleProps {
  data: ModuleType;
}

const getModuleStyles = (type: string) => {
  // All modules now use teal theme for consistency
  return 'from-teal-900/20 to-teal-900/10 border-teal-800/30';
};

const Module: React.FC<ModuleProps> = ({ data }) => {
  const moduleStyles = getModuleStyles(data.type);

  return (
    <div 
      className={`relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-b ${moduleStyles} 
                  border shadow-lg min-w-[320px] max-w-md`}
    >
      <h2 className="text-xl font-light text-teal-400 mb-4 pb-2 border-b border-teal-800/30">
        {data.title}
      </h2>
      
      <div className="space-y-4">
        {data.components.map((component) => (
          <Component 
            key={component.id} 
            data={component} 
            moduleType={data.type} 
          />
        ))}
      </div>
    </div>
  );
};

export default Module;