/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DocContent } from './components/DocContent';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const { dir } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'authentication', 'transactions', 'station-data', 'health', 'best-practices'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans" dir={dir}>
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main className={`transition-all duration-300 ${dir === 'rtl' ? 'md:pr-72' : 'md:pl-72'}`}>
        <div className="px-4 py-12 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <DocContent />
          <footer className="mt-16 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500 dark:text-zinc-400">
            تطوير : م.وليد منور
          </footer>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

