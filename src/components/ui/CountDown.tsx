"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountDownProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown({
  targetDate,
  className = "",
}: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div
      className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex items-center gap-3">
            <motion.div
              className="relative rounded-2xl px-3 py-4 sm:px-5 min-w-[70px] sm:min-w-[85px] text-center bg-black/40 border border-[#0ea5e9]/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "0 0 10px rgba(14, 165, 233, 0.2)",
                  "0 0 25px rgba(14, 165, 233, 0.4)",
                  "0 0 10px rgba(14, 165, 233, 0.2)",
                ],
              }}
              transition={{
                delay: index * 0.1,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="block text-2xl sm:text-3xl font-black text-[#0ea5e9] drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#94a3b8]">
                {unit.label}
              </span>
            </motion.div>
            {index < timeUnits.length - 1 && (
              <span className="hidden sm:block text-3xl text-[#0ea5e9] font-black opacity-50 animate-pulse">
                :
              </span>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
