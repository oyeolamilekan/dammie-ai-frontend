import WebApp from "@twa-dev/sdk";

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

  const closeMiniApp = () => {
    if (typeof window !== "undefined") {
      WebApp.close();
    } else {
      console.warn("Telegram WebApp environment not detected.");
    }
  };

  const isAvailable = typeof window !== 'undefined' && window.Telegram?.WebApp;

  return {
    closeMiniApp,
    isAvailable,
    webApp: isAvailable ? window.Telegram.WebApp : null
  };
}