import type { AiProject } from '../data/aiPortfolio'
import { Badge } from './Badge'

type Props = {
  project: AiProject
}

export function AiProjectCard({ project }: Props) {
  return (
    <div className="card ai-card">
      <div className="ai-card__header">
        <div className="ai-card__icon-wrap">
          <span className="ai-card__icon" aria-hidden>
            {project.icon}
          </span>
          <span className="pill pill--ai">AI</span>
        </div>
        <div>
          <p className="eyebrow">AI & Transformation</p>
          <h3 className="ai-card__title">{project.title}</h3>
        </div>
      </div>
      <p className="ai-card__problem">{project.problem}</p>
      <ul className="ai-card__list">
        {project.solutions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="ai-card__kpi">
        <span className="eyebrow">KPI</span>
        <div className="ai-card__badges">
          {project.kpi.map((kpi) => (
            <Badge key={kpi} tone="medium">
              {kpi}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

