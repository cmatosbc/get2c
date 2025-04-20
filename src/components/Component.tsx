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
      return <Globe className="w-5 h-5 text-teal-400" />;
    case 'processing':
      return <Activity className="w-5 h-5 text-teal-400" />;
    case 'storage':
      return <Database className="w-5 h-5 text-teal-400" />;
    case 'backend':
      return <Server className="w-5 h-5 text-teal-400" />;
    case 'frontend':
      return <Monitor className="w-5 h-5 text-teal-400" />;
    default:
      return <Server className="w-5 h-5 text-teal-400" />;
  }
};

const Component: React.FC<ComponentProps> = ({ data, moduleType }) => {
  const [showConnections, setShowConnections] = useState(false);
  const icon = getIcon(moduleType);

  return (
    <div className="bg-teal-900/20 backdrop-blur-sm rounded-lg border border-teal-800/30 p-4 
                    hover:bg-teal-900/30 transition-all duration-300 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-900/50 rounded border border-teal-800/30">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-light flex items-center gap-2">
              <span className="text-teal-400">{data.moduleId}</span>
              <span className="text-slate-300">{data.name}</span>
            </h3>
            <p className="text-sm text-slate-400 font-light">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {data.technology && (
          <div className="text-slate-300">
            <span className="text-teal-400">Tech:</span> {data.technology}
          </div>
        )}
        {data.version && (
          <div className="text-slate-300">
            <span className="text-teal-400">Version:</span> {data.version}
          </div>
        )}
        {data.security && (
          <div className="flex items-center gap-1 text-slate-300">
            <Lock className="w-3 h-3 text-teal-400" />
            {data.security.authentication}
          </div>
        )}
        {data.scalability && (
          <div className="flex items-center gap-1 text-slate-300">
            <Activity className="w-3 h-3 text-teal-400" />
            {data.scalability}
          </div>
        )}
      </div>

      {/* Connections */}
      {data.connections && data.connections.length > 0 && (
        <div>
          <button
            onClick={() => setShowConnections(!showConnections)}
            className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-500"
          >
            {showConnections ? (
              <ChevronUp className="w-4 h-4 text-teal-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-teal-400" />
            )}
            {data.connections.length} Connection{data.connections.length !== 1 ? 's' : ''}
          </button>

          {showConnections && (
            <div className="mt-2 space-y-2">
              {data.connections.map((conn, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 text-sm p-2 bg-teal-900/30 rounded border border-teal-800/30"
                >
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-400">To: {conn.to}</span>
                      <span className="text-teal-400">•</span>
                      <span className="text-teal-400">{conn.protocol}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-light">{conn.description}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {conn.security && (
                        <span className="flex items-center gap-1 text-xs text-teal-400">
                          <Lock className="w-3 h-3 text-teal-400" />
                          {conn.security.authentication}
                        </span>
                      )}
                      {conn.frequency && (
                        <span className="flex items-center gap-1 text-xs text-teal-400">
                          <Zap className="w-3 h-3 text-teal-400" />
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