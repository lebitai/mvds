import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, AlertCircle, Info } from 'lucide-react'
type ToastItem = { id:number; title:string; variant?:'default'|'success'|'warning'|'danger' }
type Ctx = { toast:(t:Omit<ToastItem,'id'>)=>void }
const ToastContext = React.createContext<Ctx|null>(null)
export function ToastProvider({ children }:{children:React.ReactNode}) {
  const [items, setItems] = React.useState<ToastItem[]>([])
  const idRef = React.useRef(1)
  const toast = React.useCallback((t:Omit<ToastItem,'id'>) => {
    const item = { id:idRef.current++, ...t }
    setItems(prev=>[...prev, item])
    setTimeout(()=> setItems(prev=>prev.filter(i=>i.id!==item.id)), 4000)
  }, [])
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence initial={false}>
          {items.map(i=>(
            <motion.div key={i.id} initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
              transition={{duration:0.2, ease:[0.4,0,0.2,1]}}
              className={
                'min-w-[220px] rounded-md border p-3 text-[14px] shadow-lebit flex items-center gap-2 ' +
                (i.variant==='success' ? 'border-green-500/30 bg-green-50 text-green-800' :
                 i.variant==='warning' ? 'border-amber-500/30 bg-amber-50 text-amber-800' :
                 i.variant==='danger' ? 'border-red-500/30 bg-red-50 text-red-800' :
                 'border-lebit bg-lebit-bg text-lebit-primary')
              }>
              {i.variant === 'success' && <CheckCircle size={16} />}
              {i.variant === 'warning' && <AlertTriangle size={16} />}
              {i.variant === 'danger' && <AlertCircle size={16} />}
              {i.variant === 'default' && <Info size={16} />}
              {!i.variant && <Info size={16} />}
              {i.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
export function useToast(){
  const ctx = React.useContext(ToastContext)
  if(!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
