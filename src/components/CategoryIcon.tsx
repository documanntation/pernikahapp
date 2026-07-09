import React from 'react';
import { 
  FileCheck, 
  Shield, 
  UserCheck, 
  Heart, 
  Sliders, 
  Baby, 
  Sparkles, 
  BookOpen, 
  Brain, 
  FileText,
  HelpCircle,
  Scale,
  Wallet,
  Activity,
  Home
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export default function CategoryIcon({ name, className = "w-5 h-5" }: CategoryIconProps) {
  switch (name) {
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Sliders':
      return <Sliders className={className} />;
    case 'Baby':
      return <Baby className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Home':
      return <Home className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}
