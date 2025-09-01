import React from 'react'
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  title?: string
}
export function Radio({ className, title, ...props }: Props) {
  const [checked, setChecked] = React.useState(!!props.checked)
  
  React.useEffect(() => {
    if (props.checked !== undefined) setChecked(!!props.checked)
  }, [props.checked])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    props.onChange?.(e)
  }
  
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <input 
        type="radio" 
        className="sr-only" 
        checked={checked}
        onChange={handleChange}
        {...props} 
      />
      <span 
        aria-hidden 
        className={`
          grid place-items-center size-[20px] rounded-full border transition-colors duration-fast ease-standard
          ${checked 
            ? 'border-brand-500 bg-white' 
            : 'border-lebit'
          }
        `}
      >
        <span 
          className={`
            size-[10px] rounded-full bg-brand-500 transition-opacity duration-fast ease-standard
            ${checked ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </span>
      {title && <span className="text-[14px] text-lebit-primary">{title}</span>}
    </label>
  )
}
