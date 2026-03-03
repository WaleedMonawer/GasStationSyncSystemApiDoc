import { Menu, X, BookOpen, Server, Shield, Activity, Languages } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/translations';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const sections = [
  { id: 'overview', icon: BookOpen, key: 'overview' },
  { id: 'authentication', icon: Shield, key: 'authentication' },
  { id: 'transactions', icon: Activity, key: 'transactions' },
  { id: 'station-data', icon: Server, key: 'stationData' },
  { id: 'health', icon: Activity, key: 'health' },
  { id: 'best-practices', icon: BookOpen, key: 'bestPractices' },
] as const;

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, dir } = useLanguage();
  const t = content[language].sidebar;

  // Close sidebar on navigation on mobile
  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleDownloadSpec = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const spec = {
      openapi: "3.0.0",
      info: {
        title: "Gas Station Sync API",
        version: "1.0.0",
        description: "API for syncing gas station transaction data to the central system."
      },
      servers: [
        {
          url: "http://localhost/GasSyncApp/api/webhook",
          description: "Local Development Server"
        }
      ],
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "X-API-Token"
          }
        }
      },
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      paths: {
        "/transactions": {
          post: {
            summary: "Submit Transactions",
            description: "Sends transaction data to the sync system for processing.",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      transactionType: { type: "string", example: "Sales" },
                      dataSet: { 
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            SNO: { type: "string" },
                            SITE_ID: { type: "string" },
                            TRANSACTION_DATE: { type: "string" },
                            AMOUNT: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        success: { type: "boolean" },
                        message: { type: "string" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/station-system-data": {
          post: {
            summary: "Update Station Data",
            description: "Sends station configuration data (pumps, nozzles, etc).",
            responses: {
              "200": { description: "Data saved successfully" }
            }
          }
        },
        "/health": {
          get: {
            summary: "Health Check",
            responses: {
              "200": { description: "Service is healthy" }
            }
          }
        }
      }
    };

    const blob = new Blob([JSON.stringify(spec, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gas-station-api-spec.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 z-50 p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 md:hidden ${dir === 'rtl' ? 'left-4' : 'right-4'}`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Container */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: dir === 'rtl' ? 280 : -280 }}
            animate={{ x: 0 }}
            exit={{ x: dir === 'rtl' ? 280 : -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 ${dir === 'rtl' ? 'right-0 border-l' : 'left-0 border-r'} z-40 w-72 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 transform md:transform-none md:translate-x-0 ${
              isOpen ? 'translate-x-0 shadow-2xl' : (dir === 'rtl' ? 'translate-x-full' : '-translate-x-full')
            } md:block`}
          >
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-lg text-zinc-900 dark:text-white">{t.title}</h1>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-zinc-500">{t.version}</p>
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-xs font-medium"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    {language === 'en' ? 'العربية' : 'English'}
                  </button>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  const title = t.sections[section.key];
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNav(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300'
                          : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-400'}`} />
                      {title}
                    </button>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={handleDownloadSpec}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  {t.download}
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

