import React from 'react';
import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';

interface GrowCardProps {
  title: string;
  description: string;
  color: string;
  iconColor: string;
  path: string;
  Icon: ComponentType<{ className?: string }>;
}

export function GrowCard({ 
  title, 
  description, 
  color, 
  iconColor,
  path, 
  Icon 
}: GrowCardProps) {
  return (
    <Link 
      to={path}
      className={`${color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-8 h-8 ${iconColor}`} />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
}