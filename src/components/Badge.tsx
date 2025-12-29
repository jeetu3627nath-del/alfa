type Props = {
  tone?: 'critical' | 'high' | 'medium' | 'neutral'
  children: string
}

export function Badge({ tone = 'neutral', children }: Props) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}

