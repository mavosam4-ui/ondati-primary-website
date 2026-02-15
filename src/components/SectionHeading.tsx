interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-secondary ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default SectionHeading;
