import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      <Check size={18} color="#00D084" />
      <span>{message}</span>
    </div>
  );
}
