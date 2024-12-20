import React from 'react';
import { GrowCard } from './GrowCard';
import { GROW_STAGES } from '../../constants/growStages';

export function DashboardScreen() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Personal Development Journey</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GROW_STAGES.map((stage) => (
            <GrowCard key={stage.title} {...stage} />
          ))}
        </div>
      </div>
    </div>
  );
}