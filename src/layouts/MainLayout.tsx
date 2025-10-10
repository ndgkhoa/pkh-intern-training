import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';

const Content = memo(() => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="container mx-auto flex-1 px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
});

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Main content */}
      <Content />

      {/* Footer */}
    </div>
  );
}
