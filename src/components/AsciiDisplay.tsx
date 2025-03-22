
import React, { useState } from 'react';
import { Copy, CheckCircle, Download } from 'lucide-react';

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
    <div className="w-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl animate-scale-in">
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <h3 className="text-sm font-medium text-white flex items-center">
          <span className="h-2 w-2 rounded-full bg-red-500 mr-1.5"></span>
          <span className="h-2 w-2 rounded-full bg-yellow-500 mr-1.5"></span>
          <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
          Generated ASCII Art
        </h3>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
              copied 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          
          <button
            className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Download"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            <span>Save</span>
          </button>
        </div>
      </div>
      
      <div className="relative bg-black/90 text-green-500 p-6 overflow-auto max-h-[300px] group">
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
