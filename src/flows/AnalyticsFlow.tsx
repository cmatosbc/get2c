import React, { FC } from 'react';
import { BarChart2, LineChart, PieChart, TrendingUp } from 'lucide-react';
import BaseFlow from './BaseFlow';

const steps = [
  {
    id: 'metrics',
    title: 'Carbon Metrics Dashboard',
    description: 'Real-time visualization of carbon metrics, trends, and performance indicators across the platform.',
    icon: <BarChart2 className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'trends',
    title: 'Trend Analysis',
    description: 'Advanced analytics for identifying patterns, forecasting future metrics, and tracking progress over time.',
    icon: <TrendingUp className="w-6 h-6 text-green-400" />
  },
  {
    id: 'reports',
    title: 'Custom Reports',
    description: 'Generate customized reports with flexible parameters, export options, and scheduled delivery.',
    icon: <LineChart className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'insights',
    title: 'Business Intelligence',
    description: 'Deep insights into member performance, compliance rates, and industry benchmarks.',
    icon: <PieChart className="w-6 h-6 text-yellow-400" />
  }
];

const AnalyticsFlow: FC = () => {
  return (
    <BaseFlow
      title="Analytics & Reporting"
      description="Comprehensive analytics suite providing real-time insights, custom reporting, and trend analysis for carbon metrics and member performance."
      steps={steps}
    />
  );
};

export default AnalyticsFlow;
