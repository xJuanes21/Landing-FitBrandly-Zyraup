import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseCountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function useCountUp({ end, suffix = '', duration = 2000 }: UseCountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(percentage * end);
        
        setCount(currentCount);

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        } else {
            setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return { formattedCount: `${count}${suffix}`, ref };
}
