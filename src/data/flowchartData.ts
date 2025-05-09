import { ModuleType } from '../types/flowchart';

export const flowchartData: ModuleType[] = [
  {
    id: 'external',
    type: 'external',
    title: '1. External Data Sources',
    components: [
      {
        id: 'dgeg-api',
        moduleId: '1A',
        name: 'DGEG API',
        description: 'Annual energy reports and carbon data',
        inputFormats: ['XML', 'JSON'],
        outputFormat: 'JSON',
        technology: 'REST API',
        availability: 99.9,
        connections: [
          {
            to: '2A',
            description: 'Annual energy reports extraction',
            protocol: 'REST',
            dataFormat: 'JSON',
            frequency: '24/day',
            security: {
              authentication: 'OAuth2',
              encryption: 'TLS 1.3',
              rateLimit: '1000/day',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 30000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      },
      {
        id: 'eurostat-api',
        moduleId: '1B',
        name: 'Eurostat API',
        description: 'EU industry benchmarks and standards',
        inputFormats: ['SDMX', 'JSONStat'],
        outputFormat: 'JSON',
        technology: 'REST API',
        availability: 99.9,
        connections: [
          {
            to: '2A',
            description: 'EU carbon benchmarks extraction',
            protocol: 'SOAP',
            dataFormat: 'XML',
            frequency: '1/hour',
            security: {
              authentication: 'Client Certificate',
              encryption: 'TLS 1.2',
              rateLimit: '100/hour',
              audit: {
                logging: true,
                retention: '5 years',
                accessControl: 'certificate-based'
              },
              headers: {
                'X-Content-Type-Options': 'nosniff',
                'Strict-Transport-Security': 'max-age=31536000'
              }
            },
            validation: {
              maxRetries: 5,
              timeout: 60000,
              schemaValidation: true,
              sourceVerification: true,
              xmlValidation: {
                dtdValidation: true,
                xsdValidation: true
              }
            }
          }
        ]
      },
      {
        id: 'ine-api',
        moduleId: '1C',
        name: 'INE API',
        description: 'Portuguese industry statistics',
        inputFormats: ['CSV', 'JSON'],
        outputFormat: 'JSON',
        technology: 'REST API',
        availability: 99.9,
        connections: [
          {
            to: '2A',
            description: 'Industry sector statistics',
            protocol: 'REST',
            dataFormat: 'JSON',
            frequency: '24/day',
            security: {
              authentication: 'OAuth2',
              encryption: 'TLS 1.3',
              rateLimit: '1000/day',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 30000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      },
      {
        id: 'member-portal',
        moduleId: '1D',
        name: 'Member Data Portal',
        description: 'Company manual data input',
        inputFormats: ['CSV', 'JSON', 'XLSX'],
        outputFormat: 'JSON',
        technology: 'React Form',
        availability: 99.99,
        connections: [
          {
            to: '2B',
            description: 'Company carbon data submission',
            protocol: 'REST',
            dataFormat: 'JSON',
            frequency: 'on-demand',
            security: {
              authentication: 'JWT',
              encryption: 'TLS 1.3',
              rateLimit: '100/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 10000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ingestion',
    type: 'processing',
    title: '2. Data Ingestion',
    components: [
      {
        id: 'data-collector',
        moduleId: '2A',
        name: 'Data Collector',
        description: 'Scheduled data extraction',
        inputFormats: ['XML', 'SDMX', 'CSV', 'JSON'],
        outputFormat: 'JSON',
        technology: 'Python/Apache Airflow',
        scalability: 'horizontal',
        features: [
          'Automated scheduling',
          'Source monitoring',
          'Error handling'
        ],
        connections: [
          {
            to: '2B',
            description: 'Raw data validation',
            protocol: 'internal',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            },
            validation: {
              schemaValidation: true,
              dataQualityChecks: true,
              sourceVerification: true
            }
          }
        ]
      },
      {
        id: 'data-validator',
        moduleId: '2B',
        name: 'Association Data Validator',
        description: 'Industry-specific validation',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'Python/Pydantic',
        scalability: 'horizontal',
        features: [
          'Industry standards check',
          'Member data validation',
          'Compliance rules'
        ],
        connections: [
          {
            to: '3A',
            description: 'Validated industry data',
            protocol: 'gRPC',
            dataFormat: 'Avro',
            frequency: 'streaming',
            security: {
              authentication: 'mTLS',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '90 days',
                accessControl: 'service-mesh'
              },
              grpcSecurity: {
                deadlineSeconds: 30,
                keepalive: true,
                compression: true
              }
            },
            validation: {
              schemaValidation: true,
              dataQualityChecks: true,
              avroValidation: {
                schemaEvolution: true,
                backwardCompatibility: true
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'processing',
    type: 'processing',
    title: '3. Data Processing',
    components: [
      {
        id: 'etl-service',
        moduleId: '3A',
        name: 'Industry ETL Service',
        description: 'Industry-specific transformations',
        inputFormats: ['JSON', 'Protocol Buffers'],
        outputFormat: 'JSON',
        technology: 'Python/Pandas',
        scalability: 'horizontal',
        features: [
          'Sector-based normalization',
          'Historical trending',
          'Benchmark comparison'
        ],
        connections: [
          {
            to: '3B',
            description: 'Industry metrics calculation',
            protocol: 'internal',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            },
            validation: {
              dataQualityChecks: true,
              sectorValidation: true,
              anomalyDetection: true
            }
          }
        ]
      },
      {
        id: 'carbon-calculator',
        moduleId: '3B',
        name: 'Association Carbon Calculator',
        description: 'Industry-specific carbon metrics',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'Python/NumPy',
        scalability: 'horizontal',
        features: [
          'Sector-based calculations',
          'Member comparisons',
          'Target tracking'
        ],
        connections: [
          {
            to: '3C',
            description: 'Association certificate check',
            protocol: 'internal',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            },
            validation: {
              thresholdChecks: true,
              industryCompliance: true,
              memberStatus: true
            }
          }
        ]
      },
      {
        id: 'cert-generator',
        moduleId: '3C',
        name: 'Association Certificate Generator',
        description: 'Official carbon commitment certificates',
        inputFormats: ['JSON'],
        outputFormat: ['PDF', 'JSON'],
        technology: 'Python/ReportLab',
        scalability: 'horizontal',
        features: [
          'Digital signatures',
          'Member verification',
          'Compliance tracking'
        ],
        businessRules: [
          'Member in good standing',
          'Data completeness check',
          'Carbon reduction targets met',
          'Industry compliance verified'
        ],
        connections: [
          {
            to: '4A',
            description: 'Store member certificates',
            protocol: 'SQL',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'Database Auth',
              encryption: 'TLS 1.3',
              audit: {
                logging: true,
                retention: '7 years',
                userTracking: true
              }
            }
          },
          {
            to: '4C',
            description: 'Archive official certificates',
            protocol: 'S3',
            dataFormat: 'PDF',
            frequency: 'streaming',
            security: {
              authentication: 'AWS IAM',
              encryption: 'AES-256',
              audit: {
                logging: true,
                retention: '7 years'
              }
            }
          }
        ]
      },
      {
        id: 'auth-service',
        moduleId: '3D',
        name: 'Authentication Service',
        description: 'Supabase Authentication with built-in user management, OAuth providers, and role-based access control.',
        technology: 'Supabase Auth',
        inputFormats: ['JSON'],
        outputFormat: 'JWT',
        security: {
          authentication: 'API Key',
          encryption: 'TLS 1.3',
          rateLimit: '1000/minute'
        },
        features: [
          'Social OAuth providers',
          'Email/password auth',
          'Magic link signin',
          'Role-based access',
          'JWT tokens',
          'Session management'
        ],
        connections: [
          {
            to: '5C',
            label: 'User session',
            protocol: 'HTTP/REST',
            dataFormat: 'JWT'
          },
          {
            to: '4A',
            label: 'Auth token',
            protocol: 'HTTP/REST',
            dataFormat: 'JWT'
          }
        ]
      }
    ]
  },
  {
    id: 'storage',
    type: 'storage',
    title: '4. Data Storage',
    components: [
      {
        id: 'timescale-db',
        moduleId: '4A',
        name: 'Member TimescaleDB',
        description: 'Member time-series data',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'TimescaleDB',
        scalability: 'vertical',
        features: [
          'Time-series optimization',
          'Member data partitioning',
          'Historical analytics'
        ],
        retention: {
          hotData: '1 year',
          warmData: '3 years',
          coldData: '7 years'
        },
        connections: []
      },
      {
        id: 'redis-cache',
        moduleId: '4B',
        name: 'Analytics Cache',
        description: 'Fast analytics queries',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'Redis',
        scalability: 'horizontal',
        features: [
          'Query caching',
          'Real-time analytics',
          'Member dashboards'
        ],
        cachePolicy: {
          ttl: '1 hour',
          strategy: 'LRU'
        },
        connections: []
      },
      {
        id: 'certificate-store',
        moduleId: '4C',
        name: 'Certificate Storage',
        description: 'Secure certificate archive',
        inputFormats: ['PDF', 'JSON'],
        outputFormat: ['PDF', 'JSON'],
        technology: 'AWS S3',
        scalability: 'horizontal',
        features: [
          'Versioning',
          'Legal compliance',
          'Audit trail'
        ],
        security: {
          encryption: 'AES-256',
          access: 'IAM Roles',
          audit: 'CloudTrail'
        },
        connections: []
      }
    ]
  },
  {
    id: 'api',
    type: 'backend',
    title: '5. API Services',
    components: [
      {
        id: 'api-gateway',
        moduleId: '5A',
        name: 'Association API Gateway',
        description: 'Main API gateway',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'Node.js/Express',
        scalability: 'horizontal',
        features: [
          'Rate limiting',
          'Member authentication',
          'Request validation'
        ],
        security: {
          authentication: ['JWT', 'API Key'],
          encryption: 'TLS 1.3',
          rateLimit: '1000/minute',
          ddosProtection: true
        },
        connections: [
          {
            to: '4A',
            description: 'Member data queries',
            protocol: 'SQL',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            }
          },
          {
            to: '4B',
            description: 'Analytics caching',
            protocol: 'Redis',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            }
          }
        ]
      },
      {
        id: 'graphql-server',
        moduleId: '5B',
        name: 'Analytics GraphQL',
        description: 'Member analytics API',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'Apollo Server',
        scalability: 'horizontal',
        features: [
          'Member comparisons',
          'Industry analytics',
          'Target tracking'
        ],
        connections: [
          {
            to: '4A',
            description: 'Analytics queries',
            protocol: 'SQL',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              }
            }
          }
        ]
      },
      {
        id: 'auth-service',
        moduleId: '5C',
        name: 'Member Auth Service',
        description: 'Supabase Authentication with built-in user management, OAuth providers, and role-based access control.',
        technology: 'Supabase Auth',
        inputFormats: ['JSON'],
        outputFormat: 'JWT',
        security: {
          authentication: 'Supabase Auth',
          encryption: 'TLS 1.3',
          audit: {
            logging: true,
            retention: '7 years',
            userTracking: true
          }
        },
        features: [
          'Social OAuth providers',
          'Email/password auth',
          'Magic link signin',
          'Role-based access',
          'JWT tokens',
          'Session management'
        ],
        connections: []
      }
    ]
  },
  {
    id: 'frontend',
    type: 'frontend',
    title: '6. Member Portal',
    components: [
      {
        id: 'member-dashboard',
        moduleId: '6A',
        name: 'Member Dashboard',
        description: 'Member analytics view',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'React 18',
        features: [
          'Carbon metrics',
          'Industry comparisons',
          'Target tracking'
        ],
        connections: [
          {
            to: '5A',
            description: 'Member data and metrics',
            protocol: 'REST',
            dataFormat: 'Protobuf',
            frequency: '60/minute',
            security: {
              authentication: 'Session Cookie',
              encryption: 'TLS 1.3',
              rateLimit: '300/minute',
              audit: {
                logging: true,
                retention: '30 days',
                userTracking: true
              },
              headers: {
                'X-XSS-Protection': '1; mode=block',
                'Content-Security-Policy': "default-src 'self'",
                'Cache-Control': 'no-store'
              },
              csrf: {
                enabled: true,
                tokenValidation: true
              }
            },
            validation: {
              maxRetries: 2,
              timeout: 5000,
              dataQualityChecks: true,
              graphqlValidation: {
                depthLimit: 5,
                costAnalysis: true,
                queryComplexity: true
              }
            }
          },
          {
            to: '5B',
            description: 'Analytics queries',
            protocol: 'GraphQL',
            dataFormat: 'Protobuf',
            frequency: '60/minute',
            security: {
              authentication: 'Session Cookie',
              encryption: 'TLS 1.3',
              rateLimit: '300/minute',
              audit: {
                logging: true,
                retention: '30 days',
                userTracking: true
              },
              headers: {
                'X-XSS-Protection': '1; mode=block',
                'Content-Security-Policy': "default-src 'self'",
                'Cache-Control': 'no-store'
              },
              csrf: {
                enabled: true,
                tokenValidation: true
              }
            },
            validation: {
              maxRetries: 2,
              timeout: 5000,
              dataQualityChecks: true,
              graphqlValidation: {
                depthLimit: 5,
                costAnalysis: true,
                queryComplexity: true
              }
            }
          }
        ]
      },
      {
        id: 'data-entry',
        moduleId: '6B',
        name: 'Data Entry Portal',
        description: 'Member data submission',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'React 18',
        features: [
          'Form validation',
          'File uploads',
          'Progress tracking'
        ],
        connections: [
          {
            to: '5A',
            description: 'Submit member data',
            protocol: 'REST',
            dataFormat: 'Protobuf',
            frequency: 'on-demand',
            security: {
              authentication: 'JWT',
              encryption: 'TLS 1.3',
              rateLimit: '100/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 10000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      },
      {
        id: 'certificate-portal',
        moduleId: '6C',
        name: 'Certificate Portal',
        description: 'Certificate management',
        inputFormats: ['JSON'],
        outputFormat: ['JSON', 'PDF'],
        technology: 'React 18',
        features: [
          'Certificate status',
          'Download center',
          'History view'
        ],
        connections: [
          {
            to: '5A',
            description: 'Certificate operations',
            protocol: 'REST',
            dataFormat: 'Protobuf',
            frequency: 'on-demand',
            security: {
              authentication: 'JWT',
              encryption: 'TLS 1.3',
              rateLimit: '100/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 10000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      },
      {
        id: 'admin-portal',
        moduleId: '6D',
        name: 'Association Admin',
        description: 'Association management',
        inputFormats: ['JSON'],
        outputFormat: 'JSON',
        technology: 'React 18',
        features: [
          'Member management',
          'Analytics dashboard',
          'System settings'
        ],
        connections: [
          {
            to: '5A',
            description: 'Admin operations',
            protocol: 'REST',
            dataFormat: 'Protobuf',
            frequency: 'on-demand',
            security: {
              authentication: 'JWT',
              encryption: 'TLS 1.3',
              rateLimit: '100/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 10000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          },
          {
            to: '5C',
            description: 'Member management',
            protocol: 'REST',
            dataFormat: 'Protobuf',
            frequency: 'on-demand',
            security: {
              authentication: 'JWT',
              encryption: 'TLS 1.3',
              rateLimit: '100/minute',
              audit: {
                logging: true,
                retention: '1 year',
                accessControl: 'role-based'
              },
              headers: {
                'Content-Security-Policy': "default-src 'self'",
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
              }
            },
            validation: {
              maxRetries: 3,
              timeout: 10000,
              schemaValidation: true,
              sanitization: {
                input: true,
                output: true
              },
              dataQualityChecks: {
                completeness: true,
                consistency: true,
                accuracy: true
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'infrastructure',
    type: 'infrastructure',
    title: '7. Infrastructure & DevOps',
    components: [
      {
        id: 'kubernetes',
        moduleId: '7A',
        name: 'Kubernetes Cluster',
        description: 'Container orchestration',
        inputFormats: ['YAML', 'JSON'],
        outputFormat: ['Metrics', 'Logs'],
        technology: 'K8s/AWS EKS',
        scalability: 'horizontal',
        features: [
          'Auto-scaling',
          'Load balancing',
          'Service mesh'
        ],
        configuration: {
          regions: ['eu-west-1'],
          highAvailability: true,
          disasterRecovery: true
        },
        security: {
          authentication: 'Service Account',
          networkPolicies: true,
          podSecurity: true,
          secretsManagement: 'AWS Secrets Manager'
        },
        connections: [
          {
            to: '7B',
            description: 'Infrastructure metrics',
            protocol: 'Prometheus',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '15 days',
                metricsScraping: true
              },
              prometheusAuth: {
                basicAuth: true,
                tlsClient: true
              }
            },
            validation: {
              metricValidation: {
                rangeChecks: true,
                typeValidation: true,
                labelConsistency: true
              },
              alerting: {
                thresholds: true,
                anomalyDetection: true
              }
            }
          },
          {
            to: '7C',
            description: 'System logs',
            protocol: 'Fluentd',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '30 days',
                accessControl: 'role-based'
              }
            },
            validation: {
              logValidation: {
                formatChecks: true,
                timestampCheck: true,
                logLevelChecks: true
              }
            }
          }
        ]
      },
      {
        id: 'monitoring',
        moduleId: '7B',
        name: 'Monitoring Stack',
        description: 'System monitoring',
        inputFormats: ['Metrics', 'Logs'],
        outputFormat: ['Metrics', 'Alerts'],
        technology: 'Prometheus/Grafana',
        scalability: 'horizontal',
        features: [
          'Real-time metrics',
          'Custom dashboards',
          'Alert management'
        ],
        monitoring: {
          metrics: [
            'CPU/Memory usage',
            'API latency',
            'Error rates',
            'Member activity'
          ],
          alerts: [
            'Service health',
            'Performance degradation',
            'Security incidents'
          ]
        },
        connections: [
          {
            to: '7D',
            description: 'System alerts',
            protocol: 'HTTP',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'API Key',
              encryption: 'TLS 1.3',
              rateLimit: '5000/minute',
              audit: {
                logging: true,
                retention: '30 days',
                accessControl: 'role-based'
              }
            },
            validation: {
              alertValidation: {
                thresholdChecks: true,
                anomalyDetection: true,
                notificationChecks: true
              }
            }
          }
        ]
      },
      {
        id: 'logging',
        moduleId: '7C',
        name: 'Logging System',
        description: 'Centralized logging',
        inputFormats: ['JSON'],
        outputFormat: ['JSON'],
        technology: 'ELK Stack',
        scalability: 'horizontal',
        features: [
          'Log aggregation',
          'Search & analysis',
          'Audit trails'
        ],
        retention: {
          hot: '2 weeks',
          warm: '3 months',
          cold: '7 years'
        },
        security: {
          authentication: 'Internal Auth',
          encryption: true,
          accessControl: true,
          audit: {
            logging: true,
            tracking: true,
            retention: '7 years'
          }
        },
        connections: []
      },
      {
        id: 'ci-cd',
        moduleId: '7D',
        name: 'CI/CD Pipeline',
        description: 'Automated deployment',
        inputFormats: ['Git'],
        outputFormat: ['Containers'],
        technology: 'GitHub Actions/ArgoCD',
        scalability: 'horizontal',
        features: [
          'Automated testing',
          'Container builds',
          'GitOps deployments'
        ],
        pipeline: {
          stages: [
            'Code validation',
            'Security scanning',
            'Integration tests',
            'Staging deployment',
            'Production deployment'
          ],
          environments: [
            'development',
            'staging',
            'production'
          ]
        },
        security: {
          signedCommits: true,
          containerScanning: true,
          secretsScanning: true
        },
        connections: [
          {
            to: '7A',
            description: 'Deploy applications',
            protocol: 'Kubernetes API',
            dataFormat: 'Protobuf',
            frequency: 'streaming',
            security: {
              authentication: 'Service Account',
              encryption: 'TLS 1.3'
            }
          }
        ]
      }
    ]
  }
];