import React, { useState } from 'react';
import { Connection as ConnectionType } from '../types/flowchart';
import { 
  Activity, Clock, CheckCircle, Lock, 
  RefreshCw, Zap, Network, AlertCircle 
} from 'lucide-react';

interface ConnectionProps {
  data: ConnectionType;
  moduleType: string;
}

const getConnectionStyle = (type?: string) => {
  switch (type) {
    case 'data_ingestion':
      return 'stroke-blue-500/70 hover:stroke-blue-500';
    case 'data_processing':
      return 'stroke-green-500/70 hover:stroke-green-500';
    case 'data_storage':
      return 'stroke-purple-500/70 hover:stroke-purple-500';
    case 'data_retrieval':
      return 'stroke-amber-500/70 hover:stroke-amber-500';
    case 'api_call':
      return 'stroke-indigo-500/70 hover:stroke-indigo-500';
    case 'event_stream':
      return 'stroke-red-500/70 hover:stroke-red-500';
    case 'security_flow':
      return 'stroke-emerald-500/70 hover:stroke-emerald-500';
    case 'monitoring':
      return 'stroke-cyan-500/70 hover:stroke-cyan-500';
    default:
      return 'stroke-gray-500/70 hover:stroke-gray-500';
  }
};

const getFrequencyIcon = (frequency?: string) => {
  switch (frequency) {
    case 'real-time':
      return <Zap className="w-3 h-3" />;
    case 'streaming':
      return <Activity className="w-3 h-3" />;
    case 'batch':
      return <RefreshCw className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

const Connection: React.FC<ConnectionProps> = ({ data, moduleType }) => {
  const [showDetails, setShowDetails] = useState(false);
  const connectionStyle = getConnectionStyle(data.type);
  const frequencyIcon = getFrequencyIcon(data.frequency);

  // Default path - can be customized based on module positions later
  const pathData = "M0,0 C50,0 50,50 100,50";

  return (
    <div 
      className="connection group relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        fill="none"
        className="overflow-visible"
      >
        <defs>
          <marker
            id={`arrowhead-${data.from}-${data.to}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              className={connectionStyle.replace('stroke-', 'fill-')}
            />
          </marker>
        </defs>

        <path
          d={pathData}
          className={`${connectionStyle} transition-all duration-300`}
          strokeWidth={1.5}
          fill="none"
          markerEnd={`url(#arrowhead-${data.from}-${data.to})`}
        />
      </svg>

      {/* Connection Label */}
      {data.label && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       text-xs text-slate-300 bg-slate-800/80 backdrop-blur-sm px-2 py-0.5 rounded 
                       flex items-center gap-1 whitespace-nowrap cursor-pointer">
          {frequencyIcon}
          <span>{data.label}</span>
        </div>
      )}

      {/* Hover Tooltip */}
      {showDetails && (
        <div className="absolute z-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2
                       text-xs bg-slate-900/95 backdrop-blur-sm rounded shadow-xl 
                       border border-slate-700 p-2 min-w-[200px] pointer-events-none">
          <div className="space-y-2">
            {/* Description */}
            {data.description && (
              <p className="text-slate-300">{data.description}</p>
            )}

            {/* Protocol & Format */}
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1">
                <Network className="w-3 h-3" />
                {data.protocol}
              </span>
              {data.dataFormat && (
                <span>({data.dataFormat})</span>
              )}
            </div>

            {/* Performance */}
            {(data.latency || data.throughput) && (
              <div className="flex gap-3 text-slate-400">
                {data.latency && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {data.latency}
                  </span>
                )}
                {data.throughput && (
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    {data.throughput}
                  </span>
                )}
              </div>
            )}

            {/* Security */}
            {data.security && (
              <div className="flex items-center gap-2 text-slate-400">
                <Lock className="w-3 h-3" />
                {data.security.authentication}
              </div>
            )}

            {/* Validation */}
            {data.validation && (
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-3 h-3" />
                Validated
              </div>
            )}

            {/* Retry Policy */}
            {data.retryPolicy && (
              <div className="text-slate-400 flex items-center gap-1">
                <RefreshCw className="w-3 h-3" />
                Retries: {data.retryPolicy.maxRetries} ({data.retryPolicy.backoffType})
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Connection;