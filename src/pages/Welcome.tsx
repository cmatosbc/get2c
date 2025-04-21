import { Link } from 'react-router-dom';
import { Activity, GitBranch, Network, FileStack, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

const Welcome = () => {
  const [showFlows, setShowFlows] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-teal-400 mb-6 tracking-tight">Welcome</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-2xl mb-8 font-light text-slate-100">
            This is the presentation of the Tech2C Challenge. Welcome - it's a pleasure to have you here.
          </p>

          <p className="mb-6 text-slate-300 font-light">
            On the menus listed on the upper right corner you will find (although the navigation is also possible from clicking the items below):
          </p>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-8">
            <Link to="/diagram" className="block p-6 bg-teal-900/20 rounded-lg border border-teal-800/30 hover:bg-teal-900/30 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="h-6 w-6 text-teal-400" />
                <h2 className="text-lg font-light text-teal-400 group-hover:text-teal-300 transition-colors">Full App Technical Diagram</h2>
              </div>
              <p className="text-slate-300 font-light">The entire project subdivided into seven stages, listing all technologies and technical specifications to be used in each step.</p>
            </Link>

            <div className="relative">
              <button 
                onClick={() => setShowFlows(!showFlows)}
                className="w-full text-left block p-6 bg-teal-900/20 rounded-lg border border-teal-800/30 hover:bg-teal-900/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Network className="h-6 w-6 text-teal-400" />
                  <div className="relative">
                    <h2 className="text-lg font-light text-teal-400 group-hover:text-teal-300 transition-colors flex items-center gap-2">
                      Simplified Flows
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFlows ? 'rotate-180' : ''}`} />
                    </h2>

                    {showFlows && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-900 border border-teal-800/30 rounded-md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
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
                </div>
                <p className="text-slate-300 font-light">Detailed specifications of each particular stage, including the data and interaction flows that will happen in the final app.</p>
              </button>
            </div>

            <Link to="/roadmap" className="block p-6 bg-teal-900/20 rounded-lg border border-teal-800/30 hover:bg-teal-900/30 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="h-6 w-6 text-teal-400" />
                <h2 className="text-lg font-light text-teal-400 group-hover:text-teal-300 transition-colors">Future Roadmap</h2>
              </div>
              <p className="text-slate-300 font-light">The pathway of the project, including the sequences and general tasks that will be used by the dev team during the creation of the app.</p>
            </Link>

            <Link to="/justification" className="block p-6 bg-teal-900/20 rounded-lg border border-teal-800/30 hover:bg-teal-900/30 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <FileStack className="h-6 w-6 text-teal-400" />
                <h2 className="text-lg font-light text-teal-400 group-hover:text-teal-300 transition-colors">Justification</h2>
              </div>
              <p className="text-slate-300 font-light">The justification of both the technical choices as well as the development choices behind the structure of this project.</p>
            </Link>

            <Link to="/contact" className="block p-6 bg-teal-900/20 rounded-lg border border-teal-800/30 hover:bg-teal-900/30 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="h-6 w-6 text-teal-400" />
                <h2 className="text-lg font-light text-teal-400 group-hover:text-teal-300 transition-colors">Contact</h2>
              </div>
              <p className="text-slate-300 font-light">My contact information, so that you can easily submit any doubts, questions or request further clarification.</p>
            </Link>
          </div>

          <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <HelpCircle className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" />
              <p className="text-lg font-light text-teal-400">
                  Welcome - Enjoy the journey!
                </p>
            </div>
            <p className="mb-4 text-slate-300 font-light">
                As we are dealing with a Tech Lead position, I preferred to expose my ideas on the challenge in a simple React app - which can be accessed from the Github repo as code but also as a running app, deployed through Github Pages.I would appreciate the opportunity to walk you through this site so that we can deep-dive into all the aspects of this initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
