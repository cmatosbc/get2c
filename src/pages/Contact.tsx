import React from 'react';
import { Github, MessageSquare, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Github className="w-6 h-6 text-teal-400" />,
      title: 'GitHub Repository',
      value: 'github.com/cmatosbc/get2c',
      link: 'https://github.com/cmatosbc/get2c',
      description: 'Check out our source code for this presentation'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
      title: 'WhatsApp',
      value: '+351 924 272 400',
      link: 'https://wa.me/351924272400',
      description: 'Available for quick responses and discussions'
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-400" />,
      title: 'Email',
      value: 'carlosarturmatos1977@gmail.com',
      link: 'mailto:carlosarturmatos1977@gmail.com',
      description: 'For formal communication and detailed discussions'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-teal-400 mb-4 tracking-tight">Contact Us</h1>
        <p className="text-xl mb-8 font-light text-slate-300">
          Get in touch with me through any of these channels.
        </p>

        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal-900/20 rounded-lg border border-teal-800/30 p-6 hover:bg-teal-900/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900/50 border border-teal-800/30 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-light text-teal-400 mb-1">{item.title}</h2>
                  <p className="text-lg font-light text-slate-400">{item.value}</p>
                  <p className="text-sm font-light text-slate-500 mt-1">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;