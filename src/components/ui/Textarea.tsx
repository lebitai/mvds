import React from 'react'
import { cn } from '../../lib/cn'
type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>
export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, rows=4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'w-full rounded-md border px-3 py-2 text-[14px] transition-[border-color,background] duration-fast ease-standard',
        'border-lebit bg-lebit-bg text-lebit-primary placeholder-lebit-secondary',
        'focus-visible:outline-lebit-focus focus-visible:outline-offset-2',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
