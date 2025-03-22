
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-medium animate-slide-down">
            Transform Text <ChevronRight className="h-3 w-3 ml-1" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-down" style={{ animationDelay: '100ms' }}>
            ASCII Art Generator
          </h1>
          
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl animate-slide-down" style={{ animationDelay: '200ms' }}>
            Create beautiful ASCII art with a simple text input. Choose from multiple styles and customize your creation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
