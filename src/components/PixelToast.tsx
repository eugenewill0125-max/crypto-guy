import { useEffect } from 'react';

interface PixelToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function PixelToast({ message, type, onClose }: PixelToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? '#5a8a3c' : type === 'error' ? '#a84632' : '#2a2a2a';
  const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pointer-events-none pt-8">
      <div
        className="pointer-events-auto border-4 border-black px-6 py-3 flex items-center gap-3 animate-toast-in"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-white text-sm">{icon}</span>
        <span className="text-white text-xs">{message}</span>
      </div>
    </div>
  );
}
