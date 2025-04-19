import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { CheckCircle, BarChart2, FileCheck, Shield } from 'lucide-react';

const steps = [
  {
    id: 'validation',
    title: 'Data Validation',
    description: 'Member data undergoes comprehensive validation checks to ensure accuracy, completeness, and compliance with industry standards.',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />
  },
  {
    id: 'calculation',
    title: 'Carbon Metrics',
    description: 'Advanced algorithms calculate key carbon metrics, comparing them against industry benchmarks and historical data.',
    icon: <BarChart2 className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'generation',
    title: 'Certificate Creation',
    description: 'Digital certificates are generated with unique identifiers, digital signatures, and blockchain verification.',
    icon: <FileCheck className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'storage',
    title: 'Secure Storage',
    description: 'Certificates are securely stored with encryption, access controls, and a complete audit trail for compliance.',
    icon: <Shield className="w-6 h-6 text-purple-400" />
  }
];

const CertificateFlow: FC = () => {
  return (
    <BaseFlow
      title="Certificate Lifecycle"
      description="Understanding how carbon commitment certificates are created, verified, and managed. This view explains the security and validation measures that ensure certificate integrity."
      steps={steps}
    />
  );
};

export default CertificateFlow;
