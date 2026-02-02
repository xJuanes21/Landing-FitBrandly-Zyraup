"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  icon: Icon,
  error,
  id,
  value,
  ...props
}) => {
  return (
    <div className="group relative w-full pt-6">
      <div className="relative flex items-center">
        {/* Icon */}
        <div className="absolute left-0 text-white/40 group-focus-within:text-[#00e5ff] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          {...props}
          id={id}
          value={value}
          className={`
            peer w-full bg-transparent border-b-2 py-2 pl-8 pr-2 text-white outline-none transition-all duration-300
            ${error ? "border-red-500" : "border-[#515151] focus:border-[#00e5ff]"}
          `}
          placeholder=" "
        />

        {/* Label (Floating) */}
        <label
          htmlFor={id}
          className={`
            absolute left-8 pointer-events-none transition-all duration-300
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#00e5ff]
            ${value ? "-top-4 text-sm text-[#00e5ff]" : ""}
          `}
        >
          {label}
        </label>

        {/* Bottom Bar Effect */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#00e5ff] transition-all duration-300 peer-focus:left-0 peer-focus:w-full" />

        {/* Highlight Effect */}
        <div className="absolute inset-0 -z-10 h-full w-full opacity-0 peer-focus:animate-input-highlight pointer-events-none" />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

interface FloatingTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const FloatingTextArea: React.FC<FloatingTextAreaProps> = ({
  label,
  icon: Icon,
  error,
  id,
  value,
  ...props
}) => {
  return (
    <div className="group relative w-full pt-6">
      <div className="relative flex items-start">
        {/* Icon */}
        <div className="absolute left-0 mt-3 text-white/40 group-focus-within:text-[#00e5ff] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* TextArea */}
        <textarea
          {...props}
          id={id}
          value={value}
          className={`
            peer w-full bg-transparent border-b-2 py-2 pl-8 pr-2 text-white outline-none transition-all duration-300 resize-none
            ${error ? "border-red-500" : "border-[#515151] focus:border-[#00e5ff]"}
          `}
          placeholder=" "
        />

        {/* Label (Floating) */}
        <label
          htmlFor={id}
          className={`
            absolute left-8 pointer-events-none transition-all duration-300
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#00e5ff]
            ${value ? "-top-4 text-sm text-[#00e5ff]" : ""}
          `}
        >
          {label}
        </label>

        {/* Bottom Bar Effect */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#00e5ff] transition-all duration-300 peer-focus:left-0 peer-focus:w-full" />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
