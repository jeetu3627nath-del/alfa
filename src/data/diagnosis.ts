export type Metric = {
  label: string
  value: string
  detail: string
}

export type SegmentProblem = {
  segment: string
  severity: 'critical' | 'high' | 'medium'
  statusLabel: string
  problem: string
  facts: string[]
}

export const headerMetrics: Metric[] = [
  {
    label: 'Снижение прогноза базы',
    value: '190 млн → 180 млн',
    detail: 'Потеря темпа роста и давление на долю рынка',
  },
  {
    label: 'Драйвер оттока (UX)',
    value: '18% уходят',
    detail: 'Сложный интерфейс и шум супераппа → 18% уходящих',
  },
  {
    label: 'Ценовой разрыв (депозиты)',
    value: '-2.0 п.п.',
    detail: '16.5% против 18.5% у лидеров рынка (Газпромбанк, МТС)',
  },
]

export const segmentProblems: SegmentProblem[] = [
  {
    segment: 'Массовый клиент',
    severity: 'critical',
    statusLabel: 'Critical',
    problem: 'Девальвация лояльности',
    facts: [
      'Мало категорий, мало партнеров',
      '«Барабан» вместо гарантированной выгоды',
    ],
  },
  {
    segment: 'Инвесторы',
    severity: 'critical',
    statusLabel: 'Critical',
    problem: 'Снижение доверия из-за сбоев',
    facts: [
      'Крупный сбой 12.09 (9 часов простоя)',
      'Сбои вывода средств 1, 10, 11 ноября',
      'Фантомные балансы 17.11',
    ],
  },
  {
    segment: 'Заемщики',
    severity: 'high',
    statusLabel: 'High',
    problem: 'Обманутые ожидания по грейсу',
    facts: [
      'Штрафы ФАС за ненадлежащую рекламу',
      'Пересчет % за весь срок при ошибке в 1 день (до 60%)',
      '«Год без процентов» фактически 60 дней',
    ],
  },
  {
    segment: 'Вкладчики',
    severity: 'medium',
    statusLabel: 'Medium',
    problem: 'Ценовой проигрыш',
    facts: [
      'Ставка 16.5% против 18.5% у конкурентов',
      'Потеря 20 000₽ в год с 1 млн депозита',
    ],
  },
  {
    segment: 'Все группы',
    severity: 'medium',
    statusLabel: 'Medium',
    problem: 'Длинный путь к цели',
    facts: [
      'Много кликов и шум супераппа, сложный интерфейс',
      'Барьер доступа на iOS',
    ],
  },
]

