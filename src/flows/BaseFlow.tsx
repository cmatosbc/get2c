import React from 'react';
import { CornerDownLeft } from 'lucide-react';

export interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface BaseFlowProps {
  title: string;
  description: string;
  steps: FlowStep[];
}

const BaseFlow: React.FC<BaseFlowProps> = ({ title, description, steps }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-teal-400 mb-4 tracking-tight">{title}</h1>
        <p className="text-xl mb-8 font-light text-slate-300">{description}</p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4 p-6 bg-teal-900/20 rounded-lg border border-teal-800/30">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900/50 border border-teal-800/30 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-light text-teal-400 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseFlow;
