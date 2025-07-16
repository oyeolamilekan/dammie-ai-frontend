
import React from 'react';
import { Code, Brain, Coins } from 'lucide-react';

const TechStack = () => {
  const aiPartners = [
    { name: 'AI SDK', description: 'AI orchestration and integration', link: "https://ai-sdk.dev/" },
    { name: 'OpenAI', description: 'Advanced AI technologies', link: "https://openai.com/" }
  ];

  const cryptoPartners = [
    { name: 'Quidax', description: 'Crypto infrastructure provider', link: "https://docs.quidax.io/" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-geometric hero-text text-3xl md:text-4xl text-black mb-4 uppercase">
            Powered By
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with trusted partners for reliable AI and crypto services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-center">
          {/* AI Partners */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-geometric font-bold text-xl mb-6 uppercase">AI Stack</h3>
            <div className="space-y-4 flex-1">
              {aiPartners.map((partner, index) => (
                <div key={index} className="text-left">
                  <a href={partner.link}>
                    <h4 className="font-geometric font-semibold text-lg">{partner.name}</h4>
                    <p className="text-muted-foreground text-sm">{partner.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Crypto Partners */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-geometric font-bold text-xl mb-6 uppercase">Crypto Stack</h3>
            <div className="space-y-4 flex-1">
              {cryptoPartners.map((partner, index) => (
                <div key={index} className="text-left">
                  <a href={partner.link}>
                    <h4 className="font-geometric font-semibold text-lg">{partner.name}</h4>
                    <p className="text-muted-foreground text-sm">{partner.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Source Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-muted-foreground transition-colors font-geometric font-semibold uppercase"
          >
            <Code className="w-5 h-5" />
            View Frontend Source Code
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-muted-foreground transition-colors font-geometric font-semibold uppercase"
          >
            <Code className="w-5 h-5" />
            View Backend Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;