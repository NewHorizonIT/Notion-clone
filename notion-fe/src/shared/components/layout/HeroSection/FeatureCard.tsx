export type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
};

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="p-3 rounded-full bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
