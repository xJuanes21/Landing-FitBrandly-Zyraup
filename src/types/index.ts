import { LucideIcon } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
  featured?: boolean;
}

export interface BrandLogo {
    id: string;
    icon: LucideIcon;
}

export interface TrustBadge {
    id: string;
    icon: LucideIcon;
    label: string;
}

export interface ProblemSolution {
    id: string;
    problem: string;
    solution: string;
    problemIcon: LucideIcon;
    solutionIcon: LucideIcon;
}
