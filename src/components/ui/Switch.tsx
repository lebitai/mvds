import React from 'react'
import { motion } from 'framer-motion'
type Props = { checked?:boolean; onCheckedChange?:(v:boolean)=>void; disabled?:boolean; label?:string }
export function Switch({ checked:c, onCheckedChange, disabled, label }: Props) {
  const [checked, setChecked] = React.useState(!!c)
  React.useEffect(()=>{ if(c!==undefined) setChecked(!!c)},[c])
  const toggle = () => { if(disabled) return; const n=!checked; setChecked(n); onCheckedChange?.(n) }
  return (
    <button type="button" role="switch" aria-checked={checked} onClick={toggle} disabled={disabled} className="inline-flex items-center gap-2">
      <span className={`relative w-[42px] h-[26px] rounded-full transition-colors duration-fast ${checked?'bg-brand-500':'bg-gray-300'} ${disabled?'opacity-60':''}`}>
        <motion.span layout transition={{duration:0.12, ease:[0.4,0,0.2,1]}} className="absolute top-[3px] left-[3px] w-[20px] h-[20px] rounded-full bg-white shadow-lebit" style={{ x: checked ? 16 : 0 }}/>
      </span>
      {label && <span className="text-[14px] text-lebit-primary">{label}</span>}
    </button>
  )
}
