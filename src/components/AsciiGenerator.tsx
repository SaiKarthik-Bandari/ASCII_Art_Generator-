
import React, { useState, useEffect } from 'react';
import { getAsciiStyles, defaultStyle } from '../utils/asciiConverters';
import StyleSelector from './StyleSelector';
import AsciiDisplay from './AsciiDisplay';
import { Text, Wand2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8">
        {/* Input Section */}
        <div className="w-full space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Text className="h-4 w-4 text-apple-blue" />
              <label htmlFor="text-input" className="text-sm font-medium text-black">
                Your Text
              </label>
            </div>
            <div className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-black">
              {inputText.length} characters
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-apple-blue to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Input
                id="text-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:border-apple-blue transition-all duration-200 shadow-lg text-black"
                placeholder="Type something..."
                autoComplete="off"
              />
              <Wand2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-apple-blue animate-pulse" />
            </div>
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
