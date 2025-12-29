import type { SegmentProblem } from '../data/diagnosis'
import type { B2bSegmentProblem } from '../data/b2b'

type Props = {
  item: SegmentProblem | B2bSegmentProblem
}

export function DiagnosisCard({ item }: Props) {
  const isAllGroups = item.segment === 'Все группы'

  return (
    <div className={`card diagnosis-card ${isAllGroups ? 'diagnosis-card--full' : ''}`}>
      <div className="diagnosis-card__top">
        <span className="pill">{item.segment}</span>
      </div>
      <h3 className="initiative-card__title">{item.problem}</h3>
      <ul className="initiative-card__list">
        {item.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

