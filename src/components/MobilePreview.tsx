type Props = {
  onAction?: (action: string) => void
}

export function MobilePreview({ onAction }: Props) {
  const handle = (action: string) => {
    onAction?.(action)
  }

  return (
    <div className="phone-card">
      <div className="phone-top">
        <div className="avatar">A</div>
        <div>
          <p className="eyebrow">Осознанность</p>
          <h3 className="phone-title">Мобильный банк</h3>
        </div>
      </div>

      <div className="card phone-balance">
        <p className="muted">Баланс</p>
        <div className="balance-value">182 500 ₽</div>
        <p className="muted">+12 300 ₽ к прошлому месяцу</p>
        <div className="pill pill--positive">Уведомления только по целям</div>
      </div>

      <div className="card">
        <div className="section-head">
          <span className="muted">Быстрые действия</span>
        </div>
        <div className="actions-grid">
          <div className="action-btn">Перевести</div>
          <div className="action-btn" onClick={() => handle('pay')}>
            Оплатить
          </div>
          <div className="action-btn" onClick={() => handle('subs')}>
            Подписки
          </div>
          <div className="action-btn" onClick={() => handle('goals')}>
            Цели
          </div>
        </div>
      </div>

      <div className="card card-strong">
        <p className="muted">Инсайты</p>
        <div className="kpi-grid">
          <div className="kpi">
            <span className="pill">UX</span>
            <strong>−18% churn</strong>
            <p className="muted">Главный экран без шума</p>
          </div>
          <div className="kpi">
            <span className="pill pill--positive">AI</span>
            <strong>+2 п.п. CR</strong>
            <p className="muted">Персональные офферы</p>
          </div>
          <div className="kpi">
            <span className="pill pill--danger">SLA</span>
            <strong>99.95%</strong>
            <p className="muted">Core аптайм</p>
          </div>
        </div>
      </div>
    </div>
  )
}

