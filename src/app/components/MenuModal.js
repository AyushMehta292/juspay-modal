"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { menuData } from "../data/menuData";
import {
  BookOpen,
  Rocket,
  Settings,
  Globe,
  Smartphone,
  Shield,
  Key,
  Lock,
  CreditCard,
  CheckCircle,
  QrCode,
  Building,
  FileText,
  Zap,
  RefreshCw,
  Calendar,
  RotateCcw,
  Link,
  Plus,
  Palette,
  HelpCircle,
  MessageCircle,
  Wrench,
  XCircle,
  Phone,
  Home,
  ArrowLeft,
  ChevronRight
} from "lucide-react";

export default function MenuModal({ isOpen, onClose }) {
  const [navigationHistory, setNavigationHistory] = useState([menuData]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);

  const currentData = navigationHistory[currentIndex];
  const direction = currentIndex > previousIndex ? 1 : -1;
  const modalRef = useRef(null);

  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      BookOpen,
      Rocket,
      Settings,
      Globe,
      Smartphone,
      Shield,
      Key,
      Lock,
      CreditCard,
      CheckCircle,
      QrCode,
      Building,
      FileText,
      Zap,
      RefreshCw,
      Calendar,
      RotateCcw,
      Link,
      Plus,
      Palette,
      HelpCircle,
      MessageCircle,
      Wrench,
      XCircle,
      Phone,
      Home,
      ArrowLeft,
      ChevronRight
    };
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  // Measure modal height on mount and navigation changes
  useEffect(() => {
    if (modalRef.current) {
      setModalHeight(modalRef.current.offsetHeight);
    }
  }, [currentIndex, isOpen]);

  // Drag to dismiss functionality
  const handleDragStart = (clientY) => {
    setIsDragging(true);
    setDragOffset(clientY);
  };

  const handleDragMove = (clientY) => {
    if (!isDragging) return;

    const deltaY = clientY - dragOffset;
    if (deltaY > 0) { // Only allow downward drag
      const dragDistance = Math.min(deltaY, modalHeight * 0.8);
      setDragOffset(clientY);

      // Close modal if dragged more than 50% of modal height
      if (dragDistance > modalHeight * 0.5) {
        handleDragEnd();
        onClose();
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  // Touch and mouse event handlers
  const handleTouchStart = (e) => {
    if (e.target.closest('.modal-content')) {
      handleDragStart(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isDragging) {
      handleDragMove(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('.modal-content')) {
      handleDragStart(e.clientY);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleDragMove(e.clientY);
    }
  }, [isDragging, handleDragMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Add global mouse event listeners for drag functionality
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      setPreviousIndex(currentIndex);
      setIsInitialLoad(false); // Enable animations after first navigation
      setNavigationHistory(prev => [...prev.slice(0, currentIndex + 1), item]);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleBackClick = () => {
    if (currentIndex > 0) {
      setPreviousIndex(currentIndex);
      setIsInitialLoad(false); // Enable animations after first navigation
      setCurrentIndex(prev => prev - 1);
    }
  };



  const canGoBack = currentIndex > 0;
  const hasChildren = currentData.children && currentData.children.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "100%", opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.2,
          ease: "linear",
          opacity: { duration: 0.2 }
        }}
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto shadow-2xl mt-auto modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <motion.div
          key={`modal-content-${currentIndex}`}
          layout
          transition={{
            duration: 0.2,
            ease: "linear"
          }}
          className="p-4 sm:p-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              {canGoBack && (
                <motion.button
                  layout
                  onClick={handleBackClick}
                  className="p-2 hover:bg-gray-100 rounded-2xl transition-colors"
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  <ArrowLeft size={16} />
                </motion.button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                {currentIndex === 0 ? (
                  <Home size={20} />
                ) : (
                  getIcon(currentData.icon)
                )}
                <span className="truncate">
                  {currentIndex === 0 ? 'Home' : currentData.title}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          {/* <div className="mb-4">
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-2xl">
              {currentData.description}
            </p>
          </div> */}

          {/* Content */}
          <AnimatePresence mode="wait" custom={isInitialLoad ? 0 : direction}>
            <motion.div
              key={currentIndex}
              custom={isInitialLoad ? 0 : direction}
              initial={(dir) => {
                // No animation for initial load
                if (isInitialLoad || dir === 0) {
                  return { opacity: 1, x: 0 };
                }
                // Directional animation for navigation (contained within modal)
                return {
                  opacity: 0,
                  x: dir > 0 ? -30 : 30  // Forward: from left, Back: from right (within modal)
                };
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={(dir) => {
                // No animation for initial load
                if (isInitialLoad || dir === 0) {
                  return { opacity: 1, x: 0 };
                }
                // Directional animation for navigation (contained within modal)
                return {
                  opacity: 0,
                  x: dir > 0 ? 30 : -30   // Forward: exit to right, Back: exit to left (within modal)
                };
              }}
              transition={{
                duration: isInitialLoad ? 0 : 0.2,
                ease: "linear",
                layout: { duration: 0.2, ease: "linear" }
              }}
              className="space-y-3 overflow-y-auto"
            >
              {hasChildren ? (
                currentData.children.map((item, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      layout: { duration: 0.2, ease: "linear" }
                    }}
                    className="p-4 rounded-2xl cursor-pointer transition-all hover:shadow-md hover:bg-gray-50"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                          {getIcon(item.icon)}
                          <span className="flex-1">{item.title}</span>
                          {item.children && item.children.length > 0 && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-2xl">
                              {item.children.length}
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      {item.children && item.children.length > 0 && (
                        <ChevronRight className="text-blue-500 ml-2" size={16} />
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-gray-500 mb-2">
                    <FileText size={24} />
                  </div>
                  <p className="text-gray-600">No sub-sections available</p>
                  <p className="text-sm text-gray-500 mt-1">This is the final level</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}