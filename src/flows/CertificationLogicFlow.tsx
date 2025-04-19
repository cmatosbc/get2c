import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { 
  Scale, 
  Calculator, 
  BarChart2, 
  CheckSquare,
  Award,
  History 
} from 'lucide-react';

const steps = [
  {
    id: 'metrics-evaluation',
    title: 'Metrics Evaluation',
    description: 'Carbon performance analysis:\n• Annual carbon emissions\n• Reduction percentage\n• Energy efficiency metrics\n• Resource utilization',
    icon: <Scale className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'threshold-calculation',
    title: 'Threshold Calculation',
    description: 'Dynamic thresholds:\n• Industry-specific baselines\n• Company size adjustments\n• Regional factors\n• Historical performance',
    icon: <Calculator className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'benchmark-comparison',
    title: 'Benchmark Comparison',
    description: 'Performance benchmarking:\n• Industry averages\n• Best practices comparison\n• Peer group analysis\n• EU standards alignment',
    icon: <BarChart2 className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'compliance-verification',
    title: 'Compliance Verification',
    description: 'Regulatory checks:\n• EU regulations compliance\n• National standards\n• Industry requirements\n• Reporting obligations',
    icon: <CheckSquare className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'certification-decision',
    title: 'Certification Decision',
    description: 'Final assessment:\n• Scoring algorithm\n• Risk assessment\n• Expert review\n• Approval workflow',
    icon: <Award className="w-6 h-6 text-green-400" />
  },
  {
    id: 'validity-management',
    title: 'Validity Management',
    description: 'Certificate lifecycle:\n• Validity period\n• Renewal requirements\n• Revocation conditions\n• Status monitoring',
    icon: <History className="w-6 h-6 text-red-400" />
  }
];

const CertificationLogicFlow: FC = () => {
  return (
    <BaseFlow
      title="Certification Business Logic"
      description="Explore the business rules and decision-making process behind our carbon certification system. This flow details how we evaluate, validate, and manage certifications."
      steps={steps}
    />
  );
};

export default CertificationLogicFlow;
