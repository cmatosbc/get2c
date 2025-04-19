import { FC } from 'react';
import BaseFlow from './BaseFlow';
import { 
  Database, 
  FileSpreadsheet, 
  GitBranch, 
  RefreshCcw, 
  CheckCircle,
  BarChart2 
} from 'lucide-react';

const steps = [
  {
    id: 'extraction',
    title: 'Data Extraction',
    description: 'Automated extraction from multiple sources:\n• DGEG: Annual energy reports (XML/JSON)\n• INE: Statistical data (SDMX/JSON)\n• Eurostat: EU benchmarks (JSON-stat)\n• Member uploads: Manual data input (CSV/JSON)',
    icon: <Database className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'ingestion',
    title: 'Data Ingestion',
    description: 'Unified data ingestion pipeline:\n• Format normalization\n• Schema validation\n• Data quality checks\n• Error handling & retry logic',
    icon: <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'transformation',
    title: 'Data Transformation',
    description: 'ETL processing pipeline:\n• Data cleaning & standardization\n• Unit conversion & normalization\n• Industry classification mapping\n• Historical data integration',
    icon: <GitBranch className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'enrichment',
    title: 'Data Enrichment',
    description: 'Advanced data processing:\n• Carbon metrics calculation\n• Industry benchmarking\n• Trend analysis\n• Anomaly detection',
    icon: <RefreshCcw className="w-6 h-6 text-yellow-400" />
  },
  {
    id: 'validation',
    title: 'Data Validation',
    description: 'Quality assurance:\n• Business rules validation\n• Completeness checks\n• Cross-source verification\n• Compliance validation',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />
  },
  {
    id: 'visualization',
    title: 'Data Visualization',
    description: 'Dashboard integration:\n• Real-time metrics updates\n• Interactive visualizations\n• Custom member reports\n• Industry comparisons',
    icon: <BarChart2 className="w-6 h-6 text-red-400" />
  }
];

const DataIntegrationFlow: FC = () => {
  return (
    <BaseFlow
      title="Data Integration & Processing"
      description="Follow the journey of data from multiple sources through our ETL pipeline to interactive dashboards. This view explains how we integrate external data sources, process member inputs, and deliver actionable insights."
      steps={steps}
    />
  );
};

export default DataIntegrationFlow;
