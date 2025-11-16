'use client';

import React from 'react';

interface GlassBackgroundProps {
  variant?: 'default' | 'minimal' | 'intense';
  children?: React.ReactNode;
  className?: string;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const getOrbStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          orbs: [
            { size: '300px', top: '10%', left: '5%', delay: '0s', class: 'gradient-orb-primary' },
            { size: '250px', bottom: '15%', right: '10%', delay: '2s', class: 'gradient-orb-secondary' },
          ],
          opacity: 'opacity-30 dark:opacity-20',
        };
      case 'intense':
        return {
          orbs: [
            { size: '500px', top: '5%', left: '10%', delay: '0s', class: 'gradient-orb-primary' },
            { size: '400px', top: '40%', right: '5%', delay: '1s', class: 'gradient-orb-secondary' },
            { size: '350px', bottom: '10%', left: '20%', delay: '2s', class: 'gradient-orb-accent' },
            { size: '300px', bottom: '20%', right: '15%', delay: '3s', class: 'gradient-orb-primary' },
          ],
          opacity: 'opacity-50 dark:opacity-35',
        };
      default:
        return {
          orbs: [
            { size: '400px', top: '10%', left: '10%', delay: '0s', class: 'gradient-orb-primary' },
            { size: '350px', top: '50%', right: '5%', delay: '1s', class: 'gradient-orb-secondary' },
            { size: '300px', bottom: '10%', left: '30%', delay: '2s', class: 'gradient-orb-accent' },
          ],
          opacity: 'opacity-40 dark:opacity-25',
        };
    }
  };

  const { orbs, opacity } = getOrbStyles();

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95 -z-20" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={`gradient-orb ${orb.class} ${opacity} animate-float-slow`}
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              animationDelay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay (subtle) */}
      <div
        className="absolute inset-0 -z-10 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};
