import React from 'react';
import { ArrowRight } from 'lucide-react';

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
        <h1 className="text-3xl font-bold text-slate-100 mb-4">{title}</h1>
        <p className="text-slate-400 mb-8">{description}</p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-200 mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseFlow;
