
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, DollarSign, Zap, Shield, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white pattern-grid overflow-hidden">
      {/* Static Icons */}
      <div className="absolute top-20 left-10 opacity-30">
        <MessageCircle className="w-12 h-12 text-black" />
      </div>
      <div className="absolute top-32 right-16 opacity-30">
        <DollarSign className="w-10 h-10 text-black" />
      </div>
      <div className="absolute top-64 left-20 opacity-30">
        <Zap className="w-8 h-8 text-black" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-30">
        <Shield className="w-10 h-10 text-black" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="font-geometric hero-text text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight uppercase">
            BUY & SELL
            <br />
            <span className="text-black">CRYPTO</span>
            <br />
            VIA CHAT
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            The easiest way to trade cryptocurrency. Just send a message and get instant access to Bitcoin, Ethereum, and more.
          </p>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-geometric font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Play className="mr-2 w-5 h-5" />
              WATCH DEMO
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-geometric font-bold text-lg mb-2 uppercase">CHAT TO TRADE</h3>
              <p className="text-muted-foreground text-sm">Send a message, get crypto. It&lsquo;s that simple.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-geometric font-bold text-lg mb-2 uppercase">INSTANT</h3>
              <p className="text-muted-foreground text-sm">Transactions completed in minutes, not hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-geometric font-bold text-lg mb-2 uppercase">SECURE</h3>
              <p className="text-muted-foreground text-sm">Bank-level security for all your transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;