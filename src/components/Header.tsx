
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-sm text-apple-blue text-sm font-medium border border-white/30 shadow-sm animate-pulse-subtle">
            <Sparkles className="h-4 w-4 mr-2 text-apple-blue" />
            Transform Text
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-apple-blue to-purple-600 bg-clip-text text-transparent animate-slide-down shimmer" style={{ animationDelay: '100ms' }}>
            ASCII Art Generator
          </h1>
          
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl animate-slide-down glass-morphism py-3 px-5 rounded-lg" style={{ animationDelay: '200ms' }}>
            Create beautiful ASCII art with a simple text input. Choose from multiple styles and customize your creation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
