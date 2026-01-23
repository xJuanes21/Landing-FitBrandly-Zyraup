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
    <div className={`flex gap-3 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3">
          <motion.div
            className="glass rounded-lg px-4 py-3 min-w-[70px] text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.span
              key={unit.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="block text-2xl font-bold text-[#00E5FF]"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            <span className="text-xs text-[#F5F5F5] opacity-70">
              {unit.label}
            </span>
          </motion.div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl text-[#00E5FF] font-bold">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
