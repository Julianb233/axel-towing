interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 text-brand-blue bg-blue-50 border border-blue-100">
          {badge}
        </span>
      )}
      <h1 className="text-3xl lg:text-4xl font-bold font-display text-gray-900">{title}</h1>
      {subtitle && <p className="mt-2 text-lg max-w-2xl text-gray-500">{subtitle}</p>}
    </div>
  );
}
