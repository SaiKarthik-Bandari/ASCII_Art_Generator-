
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
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Choose a Style</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {styles.map((style) => {
          const IconComponent = styleIcons[style.id as keyof typeof styleIcons];
          
          return (
            <button
              key={style.id}
              className={`relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 ${
                selectedStyle === style.id 
                  ? 'bg-apple-blue text-white shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white text-apple-dark border border-gray-200'
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
                      selectedStyle === style.id ? 'text-white' : 'text-apple-blue'
                    }`} 
                  />
                </div>
                <span className="font-medium text-sm">{style.name}</span>
              </div>
              
              {selectedStyle === style.id && (
                <span className="absolute inset-0 z-0 bg-gradient-to-tr from-apple-blue to-blue-400 opacity-80" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
