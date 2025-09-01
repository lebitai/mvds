import React from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
type Props = { open:boolean; onOpenChange:(v:boolean)=>void; title?:string; children?:React.ReactNode }
export function Dialog({ open, onOpenChange, title, children }: Props) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(()=> setMounted(true),[])
  if(!mounted) return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 bg-black/20" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            transition={{duration:0.2, ease:[0.4,0,0.2,1]}} onClick={()=>onOpenChange(false)} />
          <motion.div className="fixed inset-0 grid place-items-center p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.div className="w-full max-w-md rounded-lg border border-lebit bg-lebit-bg p-4 shadow-lebit"
              initial={{y:8,opacity:0}} animate={{y:0,opacity:1}} exit={{y:8,opacity:0}} transition={{duration:0.2, ease:[0.4,0,0.2,1]}}
              role="dialog" aria-modal="true" aria-labelledby={title ? 'dialog-title' : undefined}>
              {title && <h2 id="dialog-title" className="text-[16px] font-bold mb-2">{title}</h2>}
              <div className="text-[14px]">{children}</div>
              <div className="mt-4 flex justify-end">
                <button className="h-[36px] px-3 rounded-md border border-lebit hover:bg-gray-50/60" onClick={()=>onOpenChange(false)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
