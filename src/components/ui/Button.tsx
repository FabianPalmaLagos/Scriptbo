import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all disabled:opacity-50 disabled:pointer-events-none';

        const variants = {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            ghost: 'text-slate-400 hover:text-white hover:bg-white/5 rounded-lg',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-xs',
            md: 'px-4 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {icon && (
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

// Icon Button
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    size?: 'sm' | 'md' | 'lg';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, icon, size = 'md', ...props }, ref) => {
        const sizes = {
            sm: 'p-1.5',
            md: 'p-2',
            lg: 'p-3',
        };

        const iconSizes = {
            sm: 'text-[16px]',
            md: 'text-[20px]',
            lg: 'text-[24px]',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'rounded-lg bg-[hsl(252,29%,14%)] hover:bg-white/10 text-slate-400 hover:text-[hsl(165,100%,38%)] transition-colors',
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className={cn('material-symbols-outlined', iconSizes[size])}>{icon}</span>
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';

export default Button;
