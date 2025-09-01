import React from 'react'
import { Check } from 'lucide-react'
type Props = React.InputHTMLAttributes<HTMLInputElement>
export function Checkbox({ className, ...props }: Props) {
  const [checked, setChecked] = React.useState(!!props.checked)
  React.useEffect(()=>{ if(props.checked!==undefined) setChecked(!!props.checked)},[props.checked])
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <input type="checkbox" className="peer sr-only" checked={checked}
        onChange={(e)=>{ setChecked(e.target.checked); props.onChange?.(e) }} {...props} />
      <span aria-hidden
        className="grid place-items-center size-[18px] rounded-[6px] border border-lebit
                   transition-colors duration-fast ease-standard
                   peer-checked:bg-brand-500 peer-checked:border-brand-500 text-white">
        <Check size={14} strokeWidth={2} className="opacity-0 peer-checked:opacity-100 transition-opacity duration-fast"/>
      </span>
      {props.title && <span className="text-[14px] text-lebit-primary">{props.title}</span>}
    </label>
  )
}
