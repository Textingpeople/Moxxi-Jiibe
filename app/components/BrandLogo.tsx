'use client';

import React from 'react';

// Category icon — renders a colored initials tile for a benefit category.
// Jiibe is not affiliated with or endorsed by any third-party brand, so no
// brand logos are fetched or displayed; this component replaces the former
// third-party logo lookup with a generic category tile.

const categoryLabels: Record<string, string> = {
  entertainment: 'Entertainment',
  food: 'Food & Dining',
  travel: 'Travel & Transportation',
  family: 'Family & Childcare',
  pets: 'Pets',
  wellness: 'Wellness & Fitness',
  learning: 'Learning',
  shopping: 'Shopping',
  home: 'Home & Lifestyle',
  commuter: 'Commuter',
  beauty: 'Beauty & Personal Care',
  sports: 'Sports & Recreation',
  tech: 'Tech & Productivity',
  giving: 'Charitable Giving',
  budgeting: 'Budgeting & Tax Tools',
};

const categoryColors: Record<string, string> = {
  entertainment: '#8b3a0f',
  food: '#6b4a0f',
  travel: '#1a4a6b',
  family: '#7a1f30',
  pets: '#1a5c58',
  wellness: '#1e5c35',
  learning: '#3d2f7a',
  shopping: '#6b4a0f',
  home: '#4a1f6b',
  commuter: '#1a4a6b',
  beauty: '#7a1f30',
  sports: '#1e5c35',
  tech: '#3d2f7a',
  giving: '#1a5c58',
  budgeting: '#6b4a0f',
};

interface CategoryIconProps {
  category: string;
  label?: string;
  size?: number;
  className?: string;
}

export function CategoryIcon({ category, label, size = 32, className = '' }: CategoryIconProps) {
  const key = category.toLowerCase();
  const display = label || categoryLabels[key] || category;
  const bgColor = categoryColors[key] || '#1a4731';

  return (
    <div
      className={`flex items-center justify-center rounded-xl text-white font-bold flex-shrink-0 ${className}`}
      style={{ width: size, height: size, background: bgColor, fontSize: size * 0.32 }}>
      {display.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default CategoryIcon;

