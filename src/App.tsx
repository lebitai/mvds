import React from 'react'
import { Button } from './components/ui/Button'
import { Input } from './components/ui/Input'
import { Textarea } from './components/ui/Textarea'
import { Checkbox } from './components/ui/Checkbox'
import { Radio } from './components/ui/Radio'
import { Switch } from './components/ui/Switch'
import { Dialog } from './components/ui/Dialog'
import { useToast } from './components/ui/Toast'
import { ArrowRight, AlertCircle, Sun, Moon } from 'lucide-react'

export default function App(){
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [theme, setTheme] = React.useState<'light'|'dark'>(() => (document.documentElement.getAttribute('data-theme') as 'light'|'dark') || 'light')
  const [selectedPlan, setSelectedPlan] = React.useState<string>('')
  const { toast } = useToast()

  React.useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    document.body.style.backgroundColor = 'var(--bg)'
    document.body.style.color = 'var(--content-primary)'
  },[theme])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 dark:bg-gray-900/40 border-b border-lebit">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-brand-500" />
            <b>Lebit · MVDS</b>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={()=>setTheme(theme==='light'?'dark':'light')}>
              {theme==='light' ? <Sun size={16}/> : <Moon size={16}/>}
              {theme==='light' ? 'Light' : 'Dark'}
            </Button>
            <Button onClick={()=>setDialogOpen(true)}>
              Open Dialog
              <ArrowRight size={16}/>
            </Button>
            <Button variant="secondary" onClick={()=>toast({ title:'Default toast' })}>
              Toast <AlertCircle size={16}/>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
        <section>
          <h1 className="text-[20px] font-bold mb-2">Buttons</h1>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <p className="mt-3 text-[14px] text-lebit-secondary">
            Middle 圆角（8px）与 1.5px 轮廓，动效时长 fast(120ms)。
          </p>
        </section>

        <section>
          <h1 className="text-[20px] font-bold mb-2">Inputs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[14px] text-lebit-secondary">Email</label>
              <Input placeholder="you@lebit.ai" />
            </div>
            <div className="space-y-2">
              <label className="text-[14px] text-lebit-secondary">Notes</label>
              <Textarea placeholder="Type something..." />
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-[20px] font-bold mb-2">Selections</h1>
          <div className="flex flex-wrap items-center gap-4">
            <Checkbox title="Accept terms" />
            <Radio name="plan" value="basic" title="Basic" 
              checked={selectedPlan === 'basic'}
              onChange={(e) => setSelectedPlan(e.target.value)} />
            <Radio name="plan" value="pro" title="Pro"
              checked={selectedPlan === 'pro'} 
              onChange={(e) => setSelectedPlan(e.target.value)} />
            <Switch label="Enable sync" />
          </div>
        </section>

        <section>
          <h1 className="text-[20px] font-bold mb-2">Toast</h1>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={()=>toast({ title:'Saved successfully', variant:'success' })}>Success</Button>
            <Button variant="secondary" onClick={()=>toast({ title:'Heads up: verify email', variant:'warning' })}>Warning</Button>
            <Button variant="secondary" onClick={()=>toast({ title:'Something went wrong', variant:'danger' })}>Danger</Button>
            <Button variant="secondary" onClick={()=>toast({ title:'Default toast' })}>Default</Button>
          </div>
        </section>

        <section>
          <h1 className="text-[20px] font-bold mb-2">Cards (Middle radius & outline)</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({length:3}).map((_, i)=>(
              <div key={i} className="rounded-md border border-lebit p-4 bg-lebit-bg shadow-lebit">
                <div className="text-[14px] text-lebit-secondary">Card {i+1}</div>
                <div className="mt-2 text-[14px]">Middle 8px radius · 1.5px outline.</div>
                <div className="mt-3"><Button size="sm" variant="secondary">Action</Button></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Lebit Dialog">
        This is a minimal motion-ready dialog following Lebit tokens.
      </Dialog>
    </div>
  )
}
