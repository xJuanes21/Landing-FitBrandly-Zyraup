import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    // Base styles controlled by CSS classes where possible, but we can add utility structure if needed.
    // The user provided CSS classes: .btn-primary, .btn-secondary, .btn-ghost.
    // We will use these class names.

    const variantsMap = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      ghost: "btn-ghost",
    };

    const variantClass = variantsMap[variant];

    if (href) {
      return (
        <a
          href={href}
          className={cn(variantClass, className)}
          {...(props as any)}
        >
          {props.children}
        </a>
      );
    }

    return (
      <button ref={ref} className={cn(variantClass, className)} {...props} />
    );
  },
);
Button.displayName = "Button";
