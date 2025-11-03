interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
}

export function ProgressBar({ progress, label, showPercentage = true, animated = true }: ProgressBarProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">{label}</span>
          {showPercentage && (
            <span className="text-[var(--tt-evergreen)]">{progress}%</span>
          )}
        </div>
      )}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-sky-blue)] rounded-full ${
            animated ? 'animate-trail-progress' : ''
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
