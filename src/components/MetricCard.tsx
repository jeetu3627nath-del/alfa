import type { Metric } from '../data/diagnosis'

type Props = {
  metric: Metric
}

export function MetricCard({ metric }: Props) {
  return (
    <div className="card metric-card">
      <p className="eyebrow">{metric.label}</p>
      <h3 className="metric-card__value">{metric.value}</h3>
      <p className="metric-card__detail">{metric.detail}</p>
    </div>
  )
}

