import { useEffect, useRef } from 'react'
import { mobileHtml } from '../data/mobileHtml'

export function MobileStatic() {
  const ref = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const iframe = ref.current
    if (!iframe) return

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document
        if (!doc) return
        const height = doc.documentElement.scrollHeight
        if (height) {
          iframe.style.height = `${height}px`
        }
        // Безопасно отключаем переходы по якорям внутри макета
        doc.querySelectorAll<HTMLAnchorElement>('a[href="#"]').forEach((a) => {
          a.addEventListener('click', (e) => e.preventDefault())
        })
      } catch {
        // ignore cross-origin issues (should not happen with srcDoc)
      }
    }

    iframe.addEventListener('load', handleLoad)
    return () => {
      iframe.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <iframe
      ref={ref}
      title="mobile-bank"
      className="mobile-iframe"
      srcDoc={mobileHtml}
      sandbox="allow-same-origin allow-scripts allow-forms allow-modals allow-popups"
    />
  )
}

