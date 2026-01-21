import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const pattern = genRandomPattern();

  return (
    <div
      className={cn(
        `
        group relative overflow-hidden rounded-2xl bg-background p-6

        /* inner gray depth (reference style) */
        shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.04)]

        /* interaction (synced with How-It-Works) */
        transition-all duration-300 ease-out
        hover:-translate-y-1

        /* border + indigo glow */
        border border-transparent
        hover:border-indigo-600/30
        hover:shadow-[0_25px_45px_-15px_rgba(79,70,229,0.45)]
        `,
        className
      )}
      {...props}
    >
      {/* grid overlay */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/0">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="absolute inset-0 h-full w-full fill-foreground/5 stroke-foreground/20 mix-blend-overlay"
          />
        </div>
      </div>

      {/* icon with synced hover halo */}
      <div
        className="
          relative inline-flex items-center justify-center
          transition-all duration-300
          group-hover:rounded-md
          group-hover:shadow-[0_0_0_6px_rgba(79,70,229,0.08)]
        "
      >
        <feature.icon
          className="text-foreground size-6"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>

      {/* title */}
      <h3 className="mt-8 text-base font-semibold transition-colors group-hover:text-indigo-600">
        {feature.title}
      </h3>

      {/* description */}
      <p className="text-muted-foreground relative z-10 mt-2 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

/* ---------------- grid pattern ---------------- */

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], i) => (
            <rect
              key={i}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}
