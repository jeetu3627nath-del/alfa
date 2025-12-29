import { mobileHtml } from '../data/mobileHtml'

export function MobileStatic() {
  return (
    <iframe
      title="mobile-bank"
      className="mobile-iframe"
      srcDoc={mobileHtml}
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

