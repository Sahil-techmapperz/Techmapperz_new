// components/QuoteModal.js
'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteRequestForm from './QuoteRequestForm';

const QuoteModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl"
          >
            <QuoteRequestForm closeForm={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
