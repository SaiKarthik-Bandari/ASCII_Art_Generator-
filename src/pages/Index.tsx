
import React from 'react';
import Header from '../components/Header';
import AsciiGenerator from '../components/AsciiGenerator';
import { Github, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-apple-blue/10 via-purple-500/10 to-pink-500/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

      <div className="relative z-10 max-w-5xl mx-auto py-12 px-4 md:py-20">
        {/* Header section */}
        <Header />
        
        {/* Main content */}
        <main className="mt-12 mb-20">
          <div className="glass-morphism p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-xl">
            <AsciiGenerator />
          </div>
        </main>
        
        {/* Footer section */}
        <footer className="mt-auto pt-10 pb-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full">
              Experience the perfect fusion of art and text. Create, customize, and share.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-apple-blue to-purple-600 text-white hover:shadow-lg hover:shadow-apple-blue/20 transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                <span>View on GitHub</span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center text-xs font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-black hover:bg-white/20 transition-all"
              >
                <Star className="w-3.5 h-3.5 mr-1.5" />
                <span>Star</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
