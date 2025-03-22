
import React, { useState, useEffect } from 'react';
import { getAsciiStyles, defaultStyle } from '../utils/asciiConverters';
import StyleSelector from './StyleSelector';
import AsciiDisplay from './AsciiDisplay';
import { Sparkles } from 'lucide-react';

const AsciiGenerator: React.FC = () => {
  const [inputText, setInputText] = useState('Hello world');
  const [selectedStyle, setSelectedStyle] = useState('cute');
  const [generatedAscii, setGeneratedAscii] = useState('');

  // Get the converter function for the selected style
  const getConverter = () => {
    const style = getAsciiStyles().find(s => s.id === selectedStyle);
    return style?.converter || defaultStyle;
  };

  // Generate ASCII art whenever input text or style changes
  useEffect(() => {
    const converter = getConverter();
    setGeneratedAscii(converter(inputText));
  }, [inputText, selectedStyle]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="space-y-8">
        {/* Input Section */}
        <div className="w-full space-y-2 animate-fade-in">
          <div className="flex items-center justify-between">
            <label htmlFor="text-input" className="text-sm font-medium text-muted-foreground">
              Enter your text
            </label>
            <div className="text-xs text-muted-foreground">
              {inputText.length} characters
            </div>
          </div>
          
          <div className="relative">
            <input
              id="text-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all duration-200 shadow-sm"
              placeholder="Type something..."
              autoComplete="off"
            />
            <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40" />
          </div>
        </div>

        {/* Style Selector */}
        <StyleSelector 
          selectedStyle={selectedStyle} 
          onStyleChange={setSelectedStyle} 
        />

        {/* ASCII Display */}
        <AsciiDisplay asciiArt={generatedAscii} />
      </div>
    </div>
  );
};

export default AsciiGenerator;
