import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { 
  ClipboardCheck, 
  FileCheck, 
  FileText, 
  Shield,
  Cloud,
  Download 
} from 'lucide-react';

const steps = [
  {
    id: 'data-validation',
    title: 'Data Validation',
    description: 'Pre-certification checks:\n• Carbon metrics completeness\n• Historical data verification\n• Industry benchmarks comparison\n• Compliance with EU standards',
    icon: <ClipboardCheck className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'business-rules',
    title: 'Business Rules',
    description: 'Certification criteria:\n• Carbon reduction targets met\n• Minimum data quality score\n• Industry-specific thresholds\n• Compliance requirements satisfied',
    icon: <FileCheck className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'document-generation',
    title: 'Document Generation',
    description: 'Certificate creation:\n• Dynamic PDF generation\n• Official template application\n• QR code for verification\n• Unique certificate ID',
    icon: <FileText className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'digital-signing',
    title: 'Digital Signing',
    description: 'Security measures:\n• Digital signature application\n• Blockchain registration\n• Timestamp validation\n• Tamper-proof sealing',
    icon: <Shield className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'secure-storage',
    title: 'Secure Storage',
    description: 'Document management:\n• Encrypted cloud storage\n• Version control\n• Retention policies\n• Backup procedures',
    icon: <Cloud className="w-6 h-6 text-green-400" />
  },
  {
    id: 'member-access',
    title: 'Member Access',
    description: 'Certificate delivery:\n• Secure member portal\n• Email notifications\n• Download tracking\n• Sharing controls',
    icon: <Download className="w-6 h-6 text-red-400" />
  }
];

const CertificateGenerationFlow: FC = () => {
  return (
    <BaseFlow
      title="Certificate Generation Process"
      description="Understand how carbon commitment certificates are generated, secured, and delivered to members. This flow outlines our rigorous certification process and security measures."
      steps={steps}
    />
  );
};

export default CertificateGenerationFlow;
