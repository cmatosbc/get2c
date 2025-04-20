import React from 'react';
import { Database, Code, Network, Server, Cloud, Shield } from 'lucide-react';

const techJustifications = [
  {
    id: 'data-ingestion',
    icon: <Cloud className="w-6 h-6 text-teal-400" />,
    title: 'Data Ingestion Layer',
    tech: 'Python + Apache Airflow + Pydantic',
    businessValue: 'Before anything, although most of the user-centered app is planned to be in JS/TS, data processing and manipulation at this extent asks for a more adequated language. On top of its acknowledgeable benefits to data processing, Python is one of the most popular programming languages worldwide, making it easy to find skilled developers at competitive rates. Apache Airflow, in combination with Python, works like an intelligent scheduler and supervisor - imagine having a highly reliable manager who ensures all data collection tasks happen on time, retries if there are failures, and provides clear visibility into what\'s happening. On specialized libraries, Pydantic acts as a strict quality control system, catching data errors before they can cause problems downstream - like having an expert inspector checking every piece of information for accuracy. These open-source tools significantly reduce licensing costs while providing enterprise-grade reliability.',
    justification: [
      'Python: Selected for its robust data processing libraries and extensive ecosystem. Critical for handling diverse data formats from multiple sources (DGEG, Eurostat, INE). For its speed and flexibility, Python may deal with different and heterogeneous data formats and sources, parse files more efficiently and making it easier to deal with serverless and cloud-native environments.',
      'Apache Airflow: Ensures reliable, scheduled data extraction with built-in monitoring and retry mechanisms. DAG-based workflows provide clear visibility into ETL processes. Airflow helps you automate and manage your data processes in a visual and reliable way, without requiring deep coding knowledge.',
      'Pydantic: Implements strict type validation at runtime, crucial for maintaining data integrity across different API sources. Seamlessly integrates with FastAPI for API validation.'
    ]
  },
  {
    id: 'processing',
    icon: <Server className="w-6 h-6 text-teal-400" />,
    title: 'Processing Layer',
    tech: 'Python + Pandas + NumPy + ReportLab',
    businessValue: 'Think of this as your organization\'s brain - it processes all the raw data into meaningful insights and creates official certificates. NumPy is like a high-speed calculator on steroids - it can process millions of numbers in milliseconds, which is essential for quick and accurate carbon calculations. Using widely-adopted Python libraries reduces development costs and risks, while the massive community ensures long-term maintainability. The extensive talent pool in data science and Python development ensures competitive hiring options. These tools are also used by major tech companies and research institutions worldwide, proving their reliability for critical business operations.',
    justification: [
      'Pandas: Chosen for efficient data manipulation and analysis. Its DataFrame structure perfectly matches our need to process time-series carbon data with complex transformations. Finally, it is also one of the most popular libraries in the world, making it easy to find skilled developers at competitive rates.',
      'NumPy: Provides high-performance numerical computations essential for carbon metrics. Vectorized operations significantly improve processing speed for large datasets. NumPy is like a super-powered spreadsheet specifically designed for these kinds of tasks, but instead of just displaying numbers, it lets you perform complex calculations on them very quickly.',
      'ReportLab: Enterprise-grade PDF generation with digital signature support. Crucial for creating legally-compliant carbon certificates with professional formatting.'
    ]
  },
  {
    id: 'storage',
    icon: <Database className="w-6 h-6 text-teal-400" />,
    title: 'Data Storage',
    tech: 'TimescaleDB + Redis + S3',
    businessValue: 'Similar to a highly organized digital filing system that combines instant access with secure long-term storage. TimescaleDB and Redis are open-source solutions with strong community support, eliminating expensive proprietary database licenses. These modern, cloud-native technologies attract top talent interested in working with cutting-edge tools.',
    justification: [
      'TimescaleDB: Optimized for time-series data with automatic partitioning and efficient querying. Perfect for storing historical carbon metrics with minimal query latency. This plugin is like comparing a regular filing cabinet to one that is specifically designed for chronological documents. The regular cabinet can hold the documents, but the time-series optimized one has special sections and indexing that make it much faster to find all documents from a specific period or to see how things have evolved over time.',
      'Redis: In-memory caching reduces database load and provides sub-millisecond response times. Key for real-time dashboard updates and session management. Nonetheless, Redis is open-source, well documented and might be useful not just for caching, but also for pub/sub routines and dealing quickly with sophisticated data structures.',
      'S3-compatible storage: Ensures durability (11 9s) and availability (4 9s) for critical certificate storage. Supports versioning and lifecycle policies for compliance. To the point: storing these on your local computer or even a traditional server can have limitations in terms of space, reliability (what if your computer crashes?), and accessibility (can you easily get to your files from anywhere?). S3 may tackle these issues while providing a cost-effective, scalable, and secure solution.'
    ]
  },
  {
    id: 'auth',
    icon: <Shield className="w-6 h-6 text-teal-400" />,
    title: 'Authentication',
    tech: 'Supabase Auth',
    businessValue: 'Works like a sophisticated security system for a building - ensuring only authorized people can access specific areas. Supabase Auth provides enterprise-grade security at a fraction of the cost of building custom solutions. As a modern platform, it attracts developers who value working with current technologies and best practices.',
    justification: [
      'Built-in security best practices: Implements OAuth2, JWT, and secure session management. Reduces security vulnerabilities common in custom auth implementations.',
      'Comprehensive user management: Provides role-based access control essential for different association member types. Includes audit logging for compliance.',
      'Developer productivity: Offers ready-to-use React hooks and TypeScript types. Significantly reduces development time while maintaining security standards.'
    ]
  },
  {
    id: 'api',
    icon: <Network className="w-6 h-6 text-teal-400" />,
    title: 'API Layer',
    tech: 'REST + gRPC + Protobuf + GraphQL',
    businessValue: 'A REST approach to external possibilities of consumption makes it easier to read, deal with and manage. However, a GraphQL end is also considered especially having in mind an eventual move into mobile apps. The other protocols, while initially selected to internal data flows, can potentially be exposed, adding security, performance and modernity to the whole system.',
    justification: [
      'REST: Chosen for external API compatibility and broad client support. Perfect for member-facing endpoints with standard HTTP semantics.',
      'gRPC: Internal service communication with type safety and excellent performance. Bi-directional streaming enables real-time metric updates.',
      'Protocol Buffers: Schema-driven serialization reduces payload size by 30-40% compared to JSON. Ensures backward compatibility for API evolution.',
      'GraphQL: Enables efficient data fetching and dynamic queries, reducing the need for multiple API calls and improving performance. Using Apollo Server, the implementation gets simpler and predictable, also aligning with the Typescript and React stack.'
    ]
  },
  {
    id: 'frontend',
    icon: <Code className="w-6 h-6 text-teal-400" />,
    title: 'Frontend',
    tech: 'React + TypeScript + Tailwind',
    businessValue: 'This is the user interface - like a well-designed dashboard in a modern car. React is backed by Meta (Facebook) and has one of the largest developer communities worldwide, making it easy to find talented developers at various experience levels and price points. The modern stack ensures the application stays relevant and maintainable for years to come.',
    justification: [
      'Tailwind: A utility-first CSS framework that makes it easier to build custom designs and maintain consistent styling. It provides a set of pre-defined classes that can be combined to create unique styles without writing custom CSS. Imposes a natural standard, avoiding elements, pages or components that will stand off from the planned design.',
      'React: Industry-standard library with excellent performance and component reusability. Virtual DOM ensures efficient updates for real-time data visualization.',
      'TypeScript: Solves most debugging issues commonly faced by JS apps and is the ideal syntax for creating advanced React components and elements.',
      'Modern stack: Leverages Vite for fast builds and hot module replacement. CSS-in-JS with Tailwind provides consistent, maintainable styling. Contrary to other bundlers and environments, Vite brings simplicity and speed to the frontend developments, while supporting any kind of feature.'
    ]
  }
];

const Justification: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-teal-400 mb-4 tracking-tight">Technical Justification</h1>
        <p className="text-xl mb-8 font-light text-slate-300">
          A comprehensive breakdown of our technical choices and their business value.
        </p>

        <div className="space-y-8">
          {techJustifications.map((item) => (
            <div key={item.id} className="bg-teal-900/20 rounded-lg border border-teal-800/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900/50 border border-teal-800/30 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-light text-teal-400 mb-1">{item.title}</h2>
                  <p className="text-lg font-light text-slate-400">{item.tech}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-light text-teal-300 mb-2">Business Value</h3>
                  <p className="text-slate-300 font-light leading-relaxed">{item.businessValue}</p>
                </div>

                <div>
                  <h3 className="text-lg font-light text-teal-300 mb-2">Technical Justification</h3>
                  <ul className="space-y-2">
                    {item.justification.map((point, index) => (
                      <li key={index} className="text-slate-300 font-light leading-relaxed pl-4 border-l-2 border-teal-800/30">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Justification;
