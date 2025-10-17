"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuModal from "./components/MenuModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 py-4 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl text-gray-900">
            Ayush Mehta&apos;s Submission
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl shadow-lg transition-colors duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open Menu
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <MenuModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
