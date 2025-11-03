import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface TrailCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  icon?: ReactNode;
}

export function TrailCard({ title, description, image, onClick, icon }: TrailCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        {icon && (
          <div className="mb-4 text-[var(--tt-evergreen)]">
            {icon}
          </div>
        )}
        <h3 className="mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-[var(--tt-evergreen)] hover:text-[var(--tt-sun-amber)] transition-colors group/btn"
        >
          <span>Learn More</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
