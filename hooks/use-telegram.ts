import { useEffect } from "react";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void;
        ready: () => void;
        isClosingConfirmationEnabled: boolean;
        enableClosingConfirmation: () => void;
        disableClosingConfirmation: () => void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
        BackButton: {
          isVisible: boolean;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
      };
    };
  }
}

export function useTelegramWebApp() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      
      // Disable closing confirmation to allow programmatic closing
      if (window.Telegram.WebApp.disableClosingConfirmation) {
        window.Telegram.WebApp.disableClosingConfirmation();
      }
    }
  }, []);

  const closeMiniApp = () => {
    if (window.Telegram?.WebApp) {
      try {
        // Force close without confirmation
        window.Telegram.WebApp.close();
      } catch (error) {
        console.warn('Failed to close WebApp:', error);
        
        // Fallback: Try to navigate away or use alternative method
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'close_webapp' }, '*');
        }
      }
    }
  };

  const isAvailable = typeof window !== 'undefined' && window.Telegram?.WebApp;

  return {
    closeMiniApp,
    isAvailable,
    webApp: isAvailable ? window.Telegram.WebApp : null
  };
}