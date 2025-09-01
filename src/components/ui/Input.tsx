import React from 'react'
import { cn } from '../../lib/cn'
type Props = React.InputHTMLAttributes<HTMLInputElement>
export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full h-[36px] rounded-md border px-3 text-[14px] transition-[border-color,background] duration-fast ease-standard',
        'border-lebit bg-lebit-bg text-lebit-primary placeholder-lebit-secondary',
        'focus-visible:outline-lebit-focus focus-visible:outline-offset-2',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'
