import React from 'react';
import { Calendar, Smartphone, Blocks } from 'lucide-react';

const roadmapItems = [
  {
    id: 'mobile',
    icon: <Smartphone className="w-6 h-6 text-green-400" />,
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
    icon: <Blocks className="w-6 h-6 text-amber-400" />,
    title: 'Enhanced Blockchain Features',
    timeline: 'Q2 2026',
    status: 'Proposed',
    description: 'Advanced certificate verification and tracking',
    features: [
      'Smart contracts for automated compliance',
      'NFT-based certificate ownership',
      'Cross-chain integration capabilities'
    ]
  }
];

const Roadmap = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">Platform Roadmap</h1>
      <p className="text-gray-400">Upcoming features and enhancements for the Tech2C Platform</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roadmapItems.map((item) => (
        <div
          key={item.id}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-700/50 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-gray-400">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {item.timeline}
                </span>
                <span className="text-sm px-2 py-0.5 rounded-full bg-slate-700 text-gray-300">
                  {item.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Roadmap;
