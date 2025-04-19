export type DataFormat = 'JSON' | 'XML' | 'JSONstat' | 'CSV' | 'Binary' | 'Protobuf' | 'Avro' | 'JWT' | 'SDMX' | 'PDF' | 'YAML' | 'Metrics';
export type Protocol = 'REST' | 'WebSocket' | 'internal' | 'gRPC' | 'GraphQL' | 'MQTT' | 'AMQP';
export type ConnectionType = 
  | 'data_ingestion' 
  | 'data_processing' 
  | 'data_storage' 
  | 'data_retrieval' 
  | 'api_call' 
  | 'event_stream' 
  | 'security_flow' 
  | 'monitoring'
  | 'sync_flow'
  | 'async_flow';

export type Frequency = 'real-time' | 'daily' | 'weekly' | 'monthly' | 'batch' | 'on_demand' | 'streaming';
export type SystemType = 
  | 'frontend' 
  | 'backend' 
  | 'storage' 
  | 'processing' 
  | 'external' 
  | 'security' 
  | 'monitoring' 
  | 'integration';

export interface Performance {
  latency?: 'low' | 'medium' | 'high';
  throughput?: 'low' | 'medium' | 'high';
  reliability?: 'low' | 'medium' | 'high';
  availability?: number; // percentage
  scalability?: 'horizontal' | 'vertical' | 'none';
}

export interface SecurityConfig {
  authentication: string | string[];
  encryption?: string | boolean;
  dataPrivacy?: string;
  rateLimit?: string;
  audit?: {
    logging?: boolean;
    tracking?: boolean;
    retention?: string;
    userTracking?: boolean;
  };
  oauth?: boolean;
  mfa?: boolean;
  rbac?: boolean;
  networkPolicies?: boolean;
  podSecurity?: boolean;
  secretsManagement?: string;
  accessControl?: boolean;
  auditLogging?: boolean;
  ddosProtection?: boolean;
}

export interface ValidationConfig {
  maxRetries?: number;
  timeout?: number;
  inputValidation?: boolean;
  schemaValidation?: boolean;
  dataQualityChecks?: boolean;
  businessRules?: string[];
  schema?: string;
  thresholdChecks?: boolean;
  industryCompliance?: boolean;
  clientSide?: boolean;
  serverSide?: boolean;
  sectorValidation?: boolean;
  sourceVerification?: boolean;
  anomalyDetection?: boolean;
  memberStatus?: boolean;
}

export interface RetryPolicy {
  maxRetries: number;
  backoffType: string;
}

export interface Connection {
  from?: string;
  to: string;
  label?: string;
  description?: string;
  protocol?: string;
  dataFormat?: DataFormat;
  frequency?: string;
  security?: SecurityConfig;
  validation?: ValidationConfig;
  retryPolicy?: RetryPolicy;
}

export interface Component extends Performance {
  id: string;
  moduleId: string;
  name: string;
  description?: string;
  technology?: string;
  version?: string;
  inputFormats?: DataFormat[];
  outputFormat?: DataFormat;
  security?: SecurityConfig;
  scalability?: 'horizontal' | 'vertical' | 'none';
  features?: string[];
  connections: Connection[];
  owner?: string;
  status?: 'active' | 'deprecated' | 'planned';
  resources?: {
    cpu?: 'low' | 'medium' | 'high';
    memory?: 'low' | 'medium' | 'high';
    storage?: 'low' | 'medium' | 'high';
    network?: 'low' | 'medium' | 'high';
  };
  dependencies?: string[]; // IDs of other components
  healthCheck?: {
    endpoint?: string;
    interval?: number;
    timeout?: number;
  };
}

export interface ModuleType {
  id: string;
  type: SystemType;
  title: string;
  components: Component[];
  version?: string;
  owner?: string;
  status?: 'active' | 'deprecated' | 'planned';
  deployment?: {
    environment?: 'development' | 'staging' | 'production';
    region?: string;
    replicas?: number;
    autoScaling?: boolean;
  };
  monitoring?: {
    metrics?: string[];
    alerts?: string[];
    logging?: 'basic' | 'detailed' | 'debug';
  };
  security?: SecurityConfig;
  submodules?: ModuleType[]; // For nested modules
  tags?: string[];
  documentation?: string;
}