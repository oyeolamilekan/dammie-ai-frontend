import { useEffect } from "react";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void;
        ready: () => void;
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
    }
  }, []);

  const closeMiniApp = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    }
  };

  const isAvailable = typeof window !== 'undefined' && window.Telegram?.WebApp;

  return {
    closeMiniApp,
    isAvailable,
    webApp: isAvailable ? window.Telegram.WebApp : null
  };
}