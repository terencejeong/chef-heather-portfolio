import { useState, useEffect, useCallback } from 'react';

export const useViewport = () => {
  // Initialize state with undefined width so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState(undefined);
  // Handler to call on window resize
  const handleResize = useCallback(() => {
    // Set window width/height to state
    setWindowSize(window.innerWidth);
  }, [windowSize]);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return [windowSize];
};
