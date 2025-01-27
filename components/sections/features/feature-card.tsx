interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white/5 rounded-lg border border-border hover:border-yellow-500/50 transition-colors hover:shadow-sm hover:shadow-yellow-500 duration-300">
      <div className="p-2 rounded-lg bg-yellow-500/10">
        <Icon className="size-6 text-yellow-500" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
