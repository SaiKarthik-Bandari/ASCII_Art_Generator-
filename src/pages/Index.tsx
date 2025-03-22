
import React from 'react';
import Header from '../components/Header';
import AsciiGenerator from '../components/AsciiGenerator';
import { Github } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-apple-lightgray to-white">
      <div className="max-w-5xl mx-auto py-8 px-4 md:py-16">
        {/* Header section */}
        <Header />
        
        {/* Main content */}
        <main className="mt-12 mb-20">
          <AsciiGenerator />
        </main>
        
        {/* Footer section */}
        <footer className="mt-auto pt-10 pb-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Experience the perfect fusion of art and text. Create, customize, and share.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-apple-dark text-white hover:bg-apple-dark/90 transition-colors"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
