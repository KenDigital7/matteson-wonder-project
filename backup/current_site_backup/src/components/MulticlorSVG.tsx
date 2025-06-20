interface MulticolorSVGProps {
  src: string;
  alt: string;
  fallbackIcon?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const MulticolorSVG = ({ 
  src, 
  alt, 
  fallbackIcon, 
  className = '', 
  size = 'md' 
}: MulticolorSVGProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img 
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Fallback to Flaticon if multicolor SVG fails to load
          if (fallbackIcon) {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }
        }}
      />
      {fallbackIcon && (
        <i 
          className={`${fallbackIcon} ${sizeClasses[size].replace('w-', 'text-').replace(' h-', '')} text-primary`}
          style={{ display: 'none' }}
        />
      )}
    </div>
  );
};

export default MulticolorSVG; 