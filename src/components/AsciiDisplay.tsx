
import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

interface AsciiDisplayProps {
  asciiArt: string;
}

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ asciiArt }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    if (!asciiArt) return;
    
    navigator.clipboard.writeText(asciiArt)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm animate-scale-in">
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <h3 className="text-sm font-medium">Generated ASCII Art</h3>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 mr-1 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1 text-gray-500" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="relative bg-black text-green-500 p-6 overflow-auto max-h-[300px] group">
        {asciiArt ? (
          <pre className="ascii-text text-xs">{asciiArt}</pre>
        ) : (
          <div className="flex items-center justify-center h-[200px] text-gray-400">
            <p>Your ASCII art will appear here</p>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AsciiDisplay;
