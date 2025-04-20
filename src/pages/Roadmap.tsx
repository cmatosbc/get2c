import React from 'react';
import { Calendar, Smartphone, Blocks, Brain, Zap } from 'lucide-react';

const roadmapItems = [
  {
    id: 'mobile',
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
    title: 'Mobile Experience',
    timeline: 'Q1 2026',
    status: 'Planned',
    description: 'Native mobile applications for iOS and Android',
    features: [
      'Real-time carbon metrics viewing',
      'Push notifications for important events',
      'Offline data collection capabilities'
    ]
  },
  {
    id: 'blockchain',
    icon: <Blocks className="w-6 h-6 text-teal-400" />,
    title: 'Enhanced Blockchain Features',
    timeline: 'Q2 2026',
    status: 'Proposed',
    description: 'Advanced certificate verification and tracking',
    features: [
      'Smart contracts for automated compliance',
      'NFT-based certificate ownership',
      'Cross-chain integration capabilities'
    ]
  },
  {
    id: 'ai-insights',
    icon: <Brain className="w-6 h-6 text-teal-400" />,
    title: 'AI-Powered Insights',
    timeline: 'Q3 2026',
    status: 'Planning',
    description: 'Advanced analytics and predictive capabilities using machine learning',
    features: [
      'Carbon footprint prediction models',
      'Anomaly detection in emissions data',
      'AI-powered recommendations for reduction strategies'
    ]
  },
  {
    id: 'automation',
    icon: <Zap className="w-6 h-6 text-teal-400" />,
    title: 'Advanced Automation',
    timeline: 'Q1 2027',
    status: 'Concept',
    description: 'End-to-end automation for carbon reporting and certification processes',
    features: [
      'Automated data collection from IoT devices',
      'Smart contract-based verification',
      'Real-time reporting and compliance checks'
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-teal-400 mb-4 tracking-tight">Product Roadmap</h1>
        <p className="text-xl mb-8 font-light text-slate-300">
          Our vision for the future of carbon tracking and certification.
        </p>

        <div className="space-y-6">
          {roadmapItems.map((item) => (
            <div key={item.id} className="bg-teal-900/20 rounded-lg border border-teal-800/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900/50 border border-teal-800/30 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-light text-teal-400 mb-1">{item.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-light text-slate-400">{item.timeline}</span>
                    <span className="px-2 py-0.5 rounded text-sm font-light bg-teal-900/40 text-teal-300 border border-teal-800/30">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 font-light leading-relaxed mb-4">{item.description}</p>

              <div>
                <h3 className="text-lg font-light text-teal-300 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="text-slate-300 font-light leading-relaxed pl-4 border-l-2 border-teal-800/30">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
