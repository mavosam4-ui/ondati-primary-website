import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface QuickLinkCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  delay?: number;
}

const QuickLinkCard = ({
  icon: Icon,
  title,
  description,
  to,
  delay = 0,
}: QuickLinkCardProps) => {
  return (
    <Link
      to={to}
      className="group bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

export default QuickLinkCard;
