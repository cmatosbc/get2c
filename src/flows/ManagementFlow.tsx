import { Users, UserCheck, ClipboardList, History } from 'lucide-react';
import BaseFlow from './BaseFlow';

const steps = [
  {
    id: 'roles',
    title: 'Role Management',
    description: 'Comprehensive role-based access control with custom permissions and hierarchical structure.',
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'verification',
    title: 'Member Verification',
    description: 'Automated verification processes for new members with document validation and compliance checks.',
    icon: <UserCheck className="w-6 h-6 text-green-400" />
  },
  {
    id: 'compliance',
    title: 'Compliance Tracking',
    description: 'Monitor and track member compliance with carbon reduction commitments and reporting requirements.',
    icon: <ClipboardList className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'audit',
    title: 'Audit Trails',
    description: 'Detailed audit logs of all administrative actions and member activities for accountability.',
    icon: <History className="w-6 h-6 text-purple-400" />
  }
];

const ManagementFlow = () => {
  return (
    <BaseFlow
      title="Association Management"
      description="Comprehensive tools for managing member relationships, roles, and compliance tracking within the carbon commitment platform."
      steps={steps}
    />
  );
};

export default ManagementFlow;
