import { smartStep } from '../data/smart'
import { Badge } from './Badge'

export function SmartCard() {
  return (
    <div className="card smart-card">
      <div className="smart-card__header">
        <Badge tone="high">SMART</Badge>
        <div>
          <p className="eyebrow">Первый шаг</p>
          <h3 className="smart-card__title">{smartStep.goal}</h3>
        </div>
      </div>

      <div className="smart-card__grid">
        <div>
          <p className="eyebrow">Метрика</p>
          <p>{smartStep.metric}</p>
        </div>
        <div>
          <p className="eyebrow">Дедлайн</p>
          <p>{smartStep.deadline}</p>
        </div>
        <div>
          <p className="eyebrow">Owner</p>
          <p>{smartStep.owner}</p>
        </div>
      </div>

      <div className="smart-card__block">
        <p className="eyebrow">Шаги</p>
        <ul>
          {smartStep.actions.map((action) => (
            <li key={action.title}>
              <span className="smart-card__item-title">{action.title}:</span>{' '}
              {action.detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="smart-card__block smart-card__block--split">
        <div>
          <p className="eyebrow">Риски / Допущения</p>
          <ul>
            {smartStep.risks.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Сигналы успеха</p>
          <ul>
            {smartStep.successSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

