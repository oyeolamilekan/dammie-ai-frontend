import WebApp from "@twa-dev/sdk";

export function useTelegramWebApp() {

  const closeMiniApp = () => {
    if (typeof window !== "undefined") {
      WebApp.close();
    } else {
      console.warn("Telegram WebApp environment not detected.");
    }
  };

  return {
    closeMiniApp,
  };
}