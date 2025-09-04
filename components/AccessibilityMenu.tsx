
'use client';

import { useState, useEffect } from 'react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [contrast, setContrast] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size') || 'normal';
    const savedContrast = localStorage.getItem('accessibility-contrast') || 'normal';
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';

    setFontSize(savedFontSize);
    setContrast(savedContrast);
    setReducedMotion(savedReducedMotion);

    // Apply saved settings
    applyFontSize(savedFontSize);
    applyContrast(savedContrast);
    applyReducedMotion(savedReducedMotion);
  }, []);

  const applyFontSize = (size: string) => {
    document.documentElement.classList.remove('text-sm', 'text-lg', 'text-xl');
    if (size === 'large') document.documentElement.classList.add('text-lg');
    if (size === 'extra-large') document.documentElement.classList.add('text-xl');
    localStorage.setItem('accessibility-font-size', size);
  };

  const applyContrast = (contrastLevel: string) => {
    document.documentElement.classList.remove('high-contrast');
    if (contrastLevel === 'high') document.documentElement.classList.add('high-contrast');
    localStorage.setItem('accessibility-contrast', contrastLevel);
  };

  const applyReducedMotion = (reduced: boolean) => {
    if (reduced) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.classList.remove('reduce-motion');
    }
    localStorage.setItem('accessibility-reduced-motion', reduced.toString());
  };

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    applyFontSize(size);
  };

  const handleContrastChange = (contrastLevel: string) => {
    setContrast(contrastLevel);
    applyContrast(contrastLevel);
  };

  const handleReducedMotionChange = (reduced: boolean) => {
    setReducedMotion(reduced);
    applyReducedMotion(reduced);
  };

  const resetSettings = () => {
    setFontSize('normal');
    setContrast('normal');
    setReducedMotion(false);
    applyFontSize('normal');
    applyContrast('normal');
    applyReducedMotion(false);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Open accessibility menu"
        title="Accessibility Options"
      >
        <i className="ri-wheelchair-line text-xl"></i>
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-black/95 backdrop-blur-sm border border-purple-500/20 rounded-xl shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-lg">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Close accessibility menu"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Text Size</label>
              <div className="space-y-2">
                {[
                  { value: 'normal', label: 'Normal' },
                  { value: 'large', label: 'Large' },
                  { value: 'extra-large', label: 'Extra Large' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleFontSizeChange(option.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      fontSize === option.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Contrast</label>
              <div className="space-y-2">
                {[
                  { value: 'normal', label: 'Normal Contrast' },
                  { value: 'high', label: 'High Contrast' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleContrastChange(option.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      contrast === option.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reduced Motion */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Motion</label>
              <button
                onClick={() => handleReducedMotionChange(!reducedMotion)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  reducedMotion
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>Reduce Motion</span>
                  <i className={`ri-${reducedMotion ? 'check' : 'close'}-line`}></i>
                </div>
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
