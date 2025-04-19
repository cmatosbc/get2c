import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  scale: number;
}

const Controls: React.FC<ControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onResetZoom,
  scale,
}) => {
  return (
    <div className="controls fixed bottom-8 right-8 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm p-2 rounded-lg border border-slate-700 shadow-lg z-50">
      <button
        onClick={onZoomOut}
        className="p-2 hover:bg-slate-700/50 rounded transition-colors text-slate-200 hover:text-white"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5" />
      </button>
      
      <div className="px-2 min-w-[3rem] text-center text-slate-200">
        {Math.round(scale * 100)}%
      </div>
      
      <button
        onClick={onZoomIn}
        className="p-2 hover:bg-slate-700/50 rounded transition-colors text-slate-200 hover:text-white"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      
      <div className="w-px h-6 bg-slate-700" />
      
      <button
        onClick={onResetZoom}
        className="p-2 hover:bg-slate-700/50 rounded transition-colors text-slate-200 hover:text-white"
        title="Reset Zoom"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Controls;