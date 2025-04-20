import { useState } from 'react';
import { Activity, ChevronDown, Menu, X } from 'lucide-react';
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-teal-800/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-teal-400" />
            <Link to="/" className="text-xl font-light bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
              Tech2C Association Platform
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 rounded-md hover:bg-teal-900/30"
          >
            {showMobileMenu ? (
              <X className="h-6 w-6 text-teal-400" />
            ) : (
              <Menu className="h-6 w-6 text-teal-400" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            <Link 
              to="/diagram" 
              className="py-1.5 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
            >
              Technical Diagram
            </Link>
            <div className="relative">
              <button 
                className="py-1.5 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30 flex items-center gap-2"
                onClick={() => setShowFlows(!showFlows)}
              >
                Simplified Flows
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFlows ? 'rotate-180' : ''}`} />
              </button>
              
              {showFlows && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-slate-900 border border-teal-800/30 rounded-md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  {flowOptions.map((flow) => (
                    <Link
                      key={flow.id}
                      to={flow.path}
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-teal-900/30 font-light"
                      onClick={() => setShowFlows(false)}
                    >
                      {flow.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/roadmap" 
              className="py-1.5 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
            >
              Roadmap
            </Link>
            <Link 
              to="/justification" 
              className="py-1.5 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
            >
              Justification
            </Link>
            <Link 
              to="/contact" 
              className="py-1.5 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {showMobileMenu && (
          <nav className="lg:hidden mt-4 border-t border-teal-800/30 pt-4 flex flex-col gap-2">
            <Link 
              to="/diagram" 
              className="py-2 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
              onClick={() => setShowMobileMenu(false)}
            >
              Technical Diagram
            </Link>
            <div className="relative">
              <button 
                className="w-full py-2 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30 flex items-center justify-between"
                onClick={() => setShowFlows(!showFlows)}
              >
                Simplified Flows
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFlows ? 'rotate-180' : ''}`} />
              </button>
              
              {showFlows && (
                <div className="mt-1 w-full bg-slate-900 border border-teal-800/30 rounded-md shadow-lg py-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {flowOptions.map((flow) => (
                    <Link
                      key={flow.id}
                      to={flow.path}
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-teal-900/30 font-light"
                      onClick={() => {
                        setShowFlows(false);
                        setShowMobileMenu(false);
                      }}
                    >
                      {flow.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/roadmap" 
              className="py-2 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
              onClick={() => setShowMobileMenu(false)}
            >
              Roadmap
            </Link>
            <Link 
              to="/justification" 
              className="py-2 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
              onClick={() => setShowMobileMenu(false)}
            >
              Justification
            </Link>
            <Link 
              to="/contact" 
              className="py-2 px-3 rounded-md bg-teal-900/20 hover:bg-teal-900/30 transition-colors text-sm font-light text-slate-200 border border-teal-800/30"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;