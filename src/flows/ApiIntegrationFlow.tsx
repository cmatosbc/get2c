import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { 
  Globe, 
  Server, 
  Shield, 
  Clock,
  Database,
  BarChart2 
} from 'lucide-react';

const steps = [
  {
    id: 'external-apis',
    title: 'External APIs',
    description: 'Integration with data providers:\n• DGEG API: OAuth2 authentication\n• INE API: API key authentication\n• Eurostat API: Public API access\n• Rate limiting & caching strategy',
    icon: <Globe className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description: 'Unified API management:\n• Request routing & load balancing\n• Rate limiting & throttling\n• Response caching\n• Error handling & retries',
    icon: <Server className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'security',
    title: 'Security Layer',
    description: 'API security measures:\n• JWT authentication\n• Request validation\n• TLS encryption\n• Access control & auditing',
    icon: <Shield className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'scheduling',
    title: 'Data Scheduling',
    description: 'Automated data collection:\n• Configurable schedules\n• Real-time webhooks\n• Failure recovery\n• Monitoring & alerts',
    icon: <Clock className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'storage',
    title: 'Data Storage',
    description: 'Multi-tier storage strategy:\n• TimescaleDB: Time-series data\n• Redis: Real-time caching\n• S3: Document storage\n• Data retention policies',
    icon: <Database className="w-6 h-6 text-green-400" />
  },
  {
    id: 'api-consumption',
    title: 'API Consumption',
    description: 'Dashboard integration:\n• GraphQL API for analytics\n• REST API for CRUD operations\n• WebSocket for real-time updates\n• API documentation & SDKs',
    icon: <BarChart2 className="w-6 h-6 text-red-400" />
  }
];

const ApiIntegrationFlow: FC = () => {
  return (
    <BaseFlow
      title="API Integration Strategy"
      description="Understand how our platform integrates with external data sources and provides secure, efficient access to processed data. This technical view shows our API architecture and data flow management."
      steps={steps}
    />
  );
};

export default ApiIntegrationFlow;
