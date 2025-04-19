import React, { FC } from 'react';
import { UserPlus, Layout, Bell, Zap } from 'lucide-react';
import BaseFlow from './BaseFlow';

const steps = [
  {
    id: 'onboarding',
    title: 'Smart Onboarding',
    description: 'Streamlined member onboarding with guided setup, data import tools, and automated verification.',
    icon: <UserPlus className="w-6 h-6 text-green-400" />
  },
  {
    id: 'dashboard',
    title: 'Personalized Dashboard',
    description: 'Customizable interface showing relevant metrics, tasks, and insights tailored to each member.',
    icon: <Layout className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'notifications',
    title: 'Smart Notifications',
    description: 'Proactive alerts for important events, deadlines, and opportunities for carbon reduction.',
    icon: <Bell className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Automated workflows for data submission, validation, and certificate renewal processes.',
    icon: <Zap className="w-6 h-6 text-purple-400" />
  }
];

const ExperienceFlow: FC = () => {
  return (
    <BaseFlow
      title="Member Experience"
      description="Enhanced user experience through smart onboarding, personalized dashboards, and automated processes to streamline member interactions."
      steps={steps}
    />
  );
};

export default ExperienceFlow;
