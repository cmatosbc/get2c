import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { FileSpreadsheet, Database, Calculator, FileCheck } from 'lucide-react';

const steps = [
  {
    id: 'data-sources',
    title: 'External Data Sources',
    description: 'Industry data is automatically collected from trusted sources like DGEG, INE, and Eurostat to provide context and benchmarks.',
    icon: <FileSpreadsheet className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'data-entry',
    title: 'Member Data Entry',
    description: 'Members submit their carbon-related data through user-friendly forms with built-in validation and file upload capabilities.',
    icon: <Database className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'processing',
    title: 'Data Processing',
    description: 'Advanced algorithms process and validate the data, checking for completeness, accuracy, and compliance with industry standards.',
    icon: <Calculator className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'certificate',
    title: 'Certificate Generation',
    description: 'Once validated, the system generates secure, verifiable carbon commitment certificates for compliant members.',
    icon: <FileCheck className="w-6 h-6 text-yellow-400" />
  }
];

const MemberDataFlow: FC = () => {
  return (
    <BaseFlow
      title="Member Data Journey"
      description="Follow the path of member data from collection through processing to certificate generation. This simplified view shows how we ensure data quality and compliance at every step."
      steps={steps}
    />
  );
};

export default MemberDataFlow;
