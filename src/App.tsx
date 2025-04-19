import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlowchartView from './components/FlowchartView';
import Header from './components/Header';
import MemberDataFlow from './flows/MemberDataFlow';
import CertificateFlow from './flows/CertificateFlow';
import DataIntegrationFlow from './flows/DataIntegrationFlow';
import ApiIntegrationFlow from './flows/ApiIntegrationFlow';
import CertificateGenerationFlow from './flows/CertificateGenerationFlow';
import CertificationLogicFlow from './flows/CertificationLogicFlow';
import Roadmap from './pages/Roadmap';
import AnalyticsFlow from './flows/AnalyticsFlow';
import ExperienceFlow from './flows/ExperienceFlow';
import ManagementFlow from './flows/ManagementFlow';
import SecurityFlow from './flows/SecurityFlow';

const App: FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<FlowchartView />} />
            <Route path="/flows/member-data" element={<MemberDataFlow />} />
            <Route path="/flows/certificate" element={<CertificateFlow />} />
            <Route path="/flows/certificate-generation" element={<CertificateGenerationFlow />} />
            <Route path="/flows/certification-logic" element={<CertificationLogicFlow />} />
            <Route path="/flows/data-integration" element={<DataIntegrationFlow />} />
            <Route path="/flows/api-integration" element={<ApiIntegrationFlow />} />
            <Route path="/flows/analytics" element={<AnalyticsFlow />} />
            <Route path="/flows/experience" element={<ExperienceFlow />} />
            <Route path="/flows/management" element={<ManagementFlow />} />
            <Route path="/flows/security" element={<SecurityFlow />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/docs" element={<div className="p-8 text-center">Documentation - Coming Soon</div>} />
            <Route path="/contact" element={<div className="p-8 text-center">Contact - Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;