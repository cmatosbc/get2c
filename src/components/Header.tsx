import React, { useState } from 'react';
import { Activity, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const flowOptions = [
  { id: 'member-data', name: 'Member Data Journey', path: '/flows/member-data' },
  { id: 'certificate', name: 'Certificate Lifecycle', path: '/flows/certificate' },
  { id: 'certificate-generation', name: 'Certificate Generation', path: '/flows/certificate-generation' },
  { id: 'certification-logic', name: 'Certification Logic', path: '/flows/certification-logic' },
  { id: 'data-integration', name: 'Data Integration & Processing', path: '/flows/data-integration' },
  { id: 'api-integration', name: 'API Integration Strategy', path: '/flows/api-integration' },
  { id: 'analytics', name: 'Analytics & Reporting', path: '/flows/analytics' },
  { id: 'experience', name: 'Member Experience', path: '/flows/experience' },
  { id: 'management', name: 'Association Management', path: '/flows/management' },
  { id: 'security', name: 'Security & Compliance', path: '/flows/security' }
];

const Header = () => {
  const [showFlows, setShowFlows] = useState(false);

  return (
    <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-emerald-400" />
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
            Carbon Platform Dataflow
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              className="py-1.5 px-3 rounded-md bg-slate-700/50 hover:bg-slate-700/75 transition-colors text-sm font-medium text-slate-200 border border-slate-600 flex items-center gap-2"
              onClick={() => setShowFlows(!showFlows)}
            >
              Simplified Flows
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {showFlows && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 z-50">
                {flowOptions.map((flow) => (
                  <Link
                    key={flow.id}
                    to={flow.path}
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700/50 transition-colors"
                    onClick={() => setShowFlows(false)}
                  >
                    {flow.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/roadmap" className="py-1.5 px-3 rounded-md bg-blue-500/20 hover:bg-blue-500/30 transition-colors text-sm font-medium text-blue-300 border border-blue-500/30">
            Future Roadmap
          </Link>
          
          <Link 
            to="/docs" 
            className="py-1.5 px-3 rounded-md bg-blue-500/20 hover:bg-blue-500/30 transition-colors text-sm font-medium text-blue-300 border border-blue-500/30"
          >
            View Docs
          </Link>
          <Link 
            to="/contact"
            className="py-1.5 px-3 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors text-sm font-medium text-emerald-300 border border-emerald-500/30"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;