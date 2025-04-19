import React, { useState } from 'react';
import { Component as ComponentType } from '../types/flowchart';
import { 
  Activity, Database, Server, Globe, 
  Monitor, Lock, Network, Zap,
  ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';

interface ComponentProps {
  data: ComponentType;
  moduleType: string;
}

const getIcon = (moduleType: string) => {
  switch (moduleType) {
    case 'external':
      return <Globe className="w-5 h-5" />;
    case 'processing':
      return <Activity className="w-5 h-5" />;
    case 'storage':
      return <Database className="w-5 h-5" />;
    case 'backend':
      return <Server className="w-5 h-5" />;
    case 'frontend':
      return <Monitor className="w-5 h-5" />;
    default:
      return <Server className="w-5 h-5" />;
  }
};

const Component: React.FC<ComponentProps> = ({ data, moduleType }) => {
  const [showConnections, setShowConnections] = useState(false);
  const icon = getIcon(moduleType);

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 p-4 
                    hover:bg-slate-800 transition-all duration-300 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-700/50 rounded">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-slate-400">{data.moduleId}</span>
              {data.name}
            </h3>
            <p className="text-sm text-slate-400">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {data.technology && (
          <div className="text-slate-300">
            <span className="text-slate-400">Tech:</span> {data.technology}
          </div>
        )}
        {data.version && (
          <div className="text-slate-300">
            <span className="text-slate-400">Version:</span> {data.version}
          </div>
        )}
        {data.security && (
          <div className="flex items-center gap-1 text-slate-300">
            <Lock className="w-3 h-3" />
            {data.security.authentication}
          </div>
        )}
        {data.scalability && (
          <div className="flex items-center gap-1 text-slate-300">
            <Activity className="w-3 h-3" />
            {data.scalability}
          </div>
        )}
      </div>

      {/* Connections */}
      {data.connections && data.connections.length > 0 && (
        <div>
          <button
            onClick={() => setShowConnections(!showConnections)}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300"
          >
            {showConnections ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            {data.connections.length} Connection{data.connections.length !== 1 ? 's' : ''}
          </button>

          {showConnections && (
            <div className="mt-2 space-y-2">
              {data.connections.map((conn, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 text-sm p-2 bg-slate-700/30 rounded"
                >
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">To: {conn.to}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{conn.protocol}</span>
                    </div>
                    <p className="text-xs text-slate-400">{conn.description}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {conn.security && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Lock className="w-3 h-3" />
                          {conn.security.authentication}
                        </span>
                      )}
                      {conn.frequency && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Zap className="w-3 h-3" />
                          {conn.frequency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Component;