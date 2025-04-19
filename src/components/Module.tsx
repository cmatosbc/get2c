import React from 'react';
import Component from './Component';
import { ModuleType } from '../types/flowchart';

interface ModuleProps {
  data: ModuleType;
}

const getModuleStyles = (type: string) => {
  switch (type) {
    case 'frontend':
      return 'from-blue-500/20 to-blue-600/10 border-blue-500/30';
    case 'backend':
      return 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30';
    case 'external':
      return 'from-amber-500/20 to-amber-600/10 border-amber-500/30';
    case 'processing':
      return 'from-purple-500/20 to-purple-600/10 border-purple-500/30';
    case 'storage':
      return 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30';
    case 'infrastructure':
      return 'from-red-500/20 to-red-600/10 border-red-500/30';
    default:
      return 'from-gray-500/20 to-gray-600/10 border-gray-500/30';
  }
};

const Module: React.FC<ModuleProps> = ({ data }) => {
  const moduleStyles = getModuleStyles(data.type);

  return (
    <div 
      className={`relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-b ${moduleStyles} 
                  border shadow-lg min-w-[320px] max-w-md`}
    >
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-600/50">
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