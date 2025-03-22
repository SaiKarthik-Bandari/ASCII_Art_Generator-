
import React from 'react';
import { getAsciiStyles } from '../utils/asciiConverters';
import { Heart, Terminal, Zap, Sparkles } from 'lucide-react';

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (styleId: string) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onStyleChange }) => {
  const styles = getAsciiStyles();
  
  // Icon mapping for styles
  const styleIcons = {
    cute: Heart,
    geek: Terminal,
    dynamic: Zap,
    fairy: Sparkles
  };
  
  return (
    <div className="w-full">
      <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-apple-blue"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
        <span className="ml-1">Choose a Style</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {styles.map((style) => {
          const IconComponent = styleIcons[style.id as keyof typeof styleIcons];
          
          return (
            <button
              key={style.id}
              className={`relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 ${
                selectedStyle === style.id 
                  ? 'bg-gradient-to-br from-apple-blue to-purple-600 text-white shadow-lg border border-white/20' 
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/10'
              }`}
              onClick={() => onStyleChange(style.id)}
              aria-selected={selectedStyle === style.id}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedStyle === style.id ? 'bg-white/20' : 'bg-apple-blue/10'
                }`}>
                  <IconComponent 
                    className={`h-5 w-5 ${
                      selectedStyle === style.id ? 'text-white animate-pulse' : 'text-apple-blue'
                    }`} 
                  />
                </div>
                <span className="font-medium text-sm">{style.name}</span>
              </div>
              
              {selectedStyle === style.id && (
                <div className="absolute -inset-1 bg-gradient-to-r from-apple-blue via-purple-600 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 z-0"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
