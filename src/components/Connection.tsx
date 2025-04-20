import React, { useState } from 'react';
import { Connection as ConnectionType } from '../types/flowchart';
import { 
  Activity, Clock, CheckCircle, Lock, 
  RefreshCw, Zap, Network, AlertCircle,
  Shield, Database, FileCheck, Archive,
  FileWarning, UserCheck, Settings
} from 'lucide-react';

interface ConnectionProps {
  data: ConnectionType;
  moduleType: string;
}

const getConnectionStyle = (type?: string) => {
  return 'stroke-teal-500/70 hover:stroke-teal-400';
};

const getFrequencyIcon = (frequency?: string) => {
  switch (frequency?.toLowerCase()) {
    case 'real-time':
      return <Zap className="w-3 h-3 text-teal-400" />;
    case 'streaming':
      return <Activity className="w-3 h-3 text-teal-400" />;
    case 'on-demand':
      return <Clock className="w-3 h-3 text-teal-400" />;
    default:
      return <RefreshCw className="w-3 h-3 text-teal-400" />;
  }
};

const Connection: React.FC<ConnectionProps> = ({ data, moduleType }) => {
  const [showDetails, setShowDetails] = useState(true);
  const connectionStyle = getConnectionStyle(data.type);
  const frequencyIcon = getFrequencyIcon(data.frequency);

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

      {/* Simple Label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     flex flex-col items-center">
        {/* First line: To: <ID>•<Protocol> */}
        <div className="text-xs text-slate-300 bg-teal-900/20 backdrop-blur-sm px-2 py-0.5 rounded-t 
                       border border-b-0 border-teal-800/30 font-light">
          To: {data.to}•{data.protocol}
        </div>
        
        {/* Second line: Description */}
        <div className="text-xs text-slate-300 bg-teal-900/20 backdrop-blur-sm px-2 py-0.5
                       border-x border-teal-800/30 font-light max-w-[150px] truncate">
          {data.description}
        </div>
        
        {/* Third line: Auth + Frequency */}
        <div className="text-xs text-slate-300 bg-teal-900/20 backdrop-blur-sm px-2 py-0.5 rounded-b
                       border border-t-0 border-teal-800/30 flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-teal-400" />
          <span className="font-light">{data.security.authentication}</span>
          <span className="w-px h-3 bg-teal-800/30" />
          {frequencyIcon}
          <span className="font-light">{data.frequency}</span>
        </div>
      </div>

      {/* Detailed Tooltip */}
        <div className="absolute z-50 w-80 bg-teal-900/20 backdrop-blur-md border border-teal-800/30 
                       rounded-lg p-4 shadow-xl -translate-y-full -translate-x-1/2 left-1/2 bottom-full mb-2">
          <div className="space-y-4">
            {/* Basic Info */}
            <div>
              <h4 className="text-xs font-light text-teal-400 mb-2 flex items-center gap-1.5">
                <Network className="w-3 h-3" /> Connection Details
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-teal-400" />
                  <span className="text-slate-300 font-light">Format: {data.dataFormat}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {frequencyIcon}
                  <span className="text-slate-300 font-light">Frequency: {data.frequency}</span>
                </div>
              </div>
            </div>

            {/* Security Section */}
            {data.security && (
              <div className="border-t border-teal-800/30 pt-3">
                <h4 className="text-xs font-light text-teal-400 mb-2 flex items-center gap-1.5">
                  <Shield className="w-3 h-3" /> Security
                </h4>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span className="text-slate-300 font-light">Auth: {data.security.authentication}</span>
                  </div>
                  {data.security.encryption && (
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">{data.security.encryption}</span>
                    </div>
                  )}
                  {data.security.rateLimit && (
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">Rate limit: {data.security.rateLimit}</span>
                    </div>
                  )}
                  {data.security.audit && (
                    <div className="flex items-center gap-1.5">
                      <Archive className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">
                        Audit: {data.security.audit.retention}
                        {data.security.audit.accessControl && ` • ${data.security.audit.accessControl}`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Validation Section */}
            {data.validation && (
              <div className="border-t border-teal-800/30 pt-3">
                <h4 className="text-xs font-light text-teal-400 mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-3 h-3" /> Validation
                </h4>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {data.validation.maxRetries && (
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">Max retries: {data.validation.maxRetries}</span>
                    </div>
                  )}
                  {data.validation.timeout && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">Timeout: {data.validation.timeout}ms</span>
                    </div>
                  )}
                  {data.validation.schemaValidation && (
                    <div className="flex items-center gap-1.5">
                      <FileWarning className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">Schema validation enabled</span>
                    </div>
                  )}
                  {data.validation.dataQualityChecks && (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">
                        Quality checks enabled
                        {typeof data.validation.dataQualityChecks === 'object' && (
                          <>
                            {data.validation.dataQualityChecks.completeness && ' • Completeness'}
                            {data.validation.dataQualityChecks.consistency && ' • Consistency'}
                            {data.validation.dataQualityChecks.accuracy && ' • Accuracy'}
                          </>
                        )}
                      </span>
                    </div>
                  )}
                  {data.validation.sourceVerification && (
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-3 h-3 text-teal-400" />
                      <span className="text-slate-300 font-light">Source verification enabled</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Connection;