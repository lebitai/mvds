import React from 'react'
import { cn } from '../../lib/cn'
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'|'secondary'|'ghost'|'destructive'
  size?: 'sm'|'md'|'lg'
}
const sizeMap = { sm:'h-[32px] px-3 text-[14px]', md:'h-[36px] px-3.5 text-[14px]', lg:'h-[40px] px-4 text-[14px]' }
const variantMap = {
  primary:'bg-brand-500 text-white border-transparent hover:bg-brand-600 transition-colors duration-fast',
  secondary:'bg-lebit-bg text-lebit-primary border-lebit hover:bg-gray-50/60 dark:hover:bg-gray-800/50 transition-colors duration-fast',
  ghost:'bg-transparent text-lebit-primary border-transparent hover:bg-gray-50/60 dark:hover:bg-gray-800/50 transition-colors duration-fast',
  destructive:'bg-red-500 text-white border-transparent hover:bg-red-600 transition-all duration-fast'
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant='primary', size='md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center gap-2 rounded-md border active:translate-y-px',
        'focus-visible:outline-[var(--focus-ring)] focus-visible:outline-[--focus-color] focus-visible:outline-offset-2',
        sizeMap[size], variantMap[variant], className
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'
