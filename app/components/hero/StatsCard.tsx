interface StatsCardProps {
  value: string;
  label: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-white/10 shadow-sm">
      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}
