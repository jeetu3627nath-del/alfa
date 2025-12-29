import type { Initiative } from '../data/roadmap'
import { Badge } from './Badge'

const themeMap: Record<string, string> = {
  ux: 'UX',
  loyalty: 'Лояльность',
  credit: 'Кредитование',
  infra: 'Инфраструктура',
  access: 'Доступ',
  api: 'API',
  payments: 'Платежи',
  compliance: 'Комплаенс',
}

type GenericInitiative = {
  id: string
  title: string
  essence: string
  solutions: string[]
  effect: string
  theme?: string
}

type Props = {
  initiative: Initiative | GenericInitiative
}

export function InitiativeCard({ initiative }: Props) {
  const badge = themeMap[initiative.theme ?? ''] ?? 'Инициатива'

  return (
    <div className="card initiative-card">
      <div className="initiative-card__top">
        <Badge tone="neutral">{badge}</Badge>
        <span className="initiative-card__id">#{initiative.id}</span>
      </div>
      <h3 className="initiative-card__title">{initiative.title}</h3>
      <p className="initiative-card__essence">{initiative.essence}</p>
      {initiative.solutions.length ? (
        <ul className="initiative-card__list">
          {initiative.solutions.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      <div className="initiative-card__effect">
        <span className="eyebrow">Эффект</span>
        <p>{initiative.effect}</p>
      </div>
    </div>
  )
}

