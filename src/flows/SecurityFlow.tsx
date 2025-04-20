import { Shield, Lock, FileCheck, Key } from 'lucide-react';
import BaseFlow from './BaseFlow';

const steps = [
  {
    id: 'access',
    title: 'Access Control',
    description: 'Advanced RBAC system with multi-factor authentication and session management.',
    icon: <Lock className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'encryption',
    title: 'Data Encryption',
    description: 'End-to-end encryption for sensitive data with secure key management and rotation.',
    icon: <Key className="w-6 h-6 text-green-400" />
  },
  {
    id: 'compliance',
    title: 'Compliance Framework',
    description: 'Comprehensive compliance monitoring with automated checks and regulatory alignment.',
    icon: <FileCheck className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'protection',
    title: 'Threat Protection',
    description: 'Advanced security measures including intrusion detection and DDoS protection.',
    icon: <Shield className="w-6 h-6 text-purple-400" />
  }
];

const SecurityFlow = () => {
  return (
    <BaseFlow
      title="Security & Compliance"
      description="Robust security infrastructure ensuring data protection, regulatory compliance, and secure access control across the platform."
      steps={steps}
    />
  );
};

export default SecurityFlow;
