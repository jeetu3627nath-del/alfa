export type SmartObjective = {
  goal: string
  metric: string
  deadline: string
  owner: string
  actions: { title: string; detail: string }[]
  risks: string[]
  successSignals: string[]
}

export const smartStep: SmartObjective = {
  goal: 'Запуск пилота AI-движка гипер-персонализации в Q1 2026',
  metric: 'CR кросс-продаж +2 п.п. на пилотном сегменте (100k MAU)',
  deadline: '31 марта 2026',
  owner: 'Director AI & Transformation',
  actions: [
    {
      title: 'Данные и события',
      detail: 'Собрать поток транзакций + geo-события, договориться о DQ SLA',
    },
    {
      title: 'Модель и правила',
      detail: 'MVP-движок: сегментация, контекстные правила, A/B план',
    },
    {
      title: 'Интеграции',
      detail: 'Витрина офферов + пуш-шлюз, SDK для главного экрана',
    },
    {
      title: 'Эффект',
      detail: 'Дешборд CR/engagement, weekly ретроспектива с продуктами',
    },
  ],
  risks: [
    'Неполные события (нет geo или категорий MCC)',
    'Тонкая маржа на офферах → риск перетрат',
    'Опасение клиентов из-за сверх-таргета → нужен контроль частоты',
  ],
  successSignals: [
    'CR растет на пилоте, стабильный uplift в A/B',
    'Негативные обращения по спаму ≤ прошлой базы',
    'Доля релевантных офферов в кликах > 70%',
  ],
}

