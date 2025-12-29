import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}

