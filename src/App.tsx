/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import RulesView from './components/RulesView';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'rules':
        return <RulesView />;
      case 'home':
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d12] text-f3f4f6 selection:bg-rose-500/20 selection:text-rose-300">
      
      {/* Dynamic Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Core View Area with smooth entry transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}

