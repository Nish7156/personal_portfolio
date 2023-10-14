// visibility.js
import { useEffect } from 'react';

export const usePageVisibility = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('User left the app');
        // You can perform actions when the user leaves the app
      } else {
        console.log('User came back to the app');
        // You can perform actions when the user comes back to the app
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
