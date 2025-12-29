export const mobileHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Мобильный банк — осознанность</title>
    <style>
        :root {
            --bg: #0b1224;
            --card: rgba(255, 255, 255, 0.06);
            --card-strong: rgba(255, 255, 255, 0.12);
            --border: rgba(255, 255, 255, 0.12);
            --text: #e2e8f0;
            --muted: #94a3b8;
            --primary: #4f46e5;
            --primary-2: #22c55e;
            --warning: #f59e0b;
            --danger: #ef4444;
            --shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            font-family: 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.28), transparent 40%),
                        radial-gradient(circle at 80% 10%, rgba(34, 197, 94, 0.25), transparent 30%),
                        linear-gradient(160deg, #0b1224 0%, #0a0f1d 60%, #0c101f 100%);
            color: var(--text);
            min-height: 100vh;
            padding: 24px 12px 48px;
            letter-spacing: -0.01em;
        }

        .phone {
            max-width: 430px;
            margin: 0 auto;
            padding: 8px;
        }

        .status-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--muted);
            font-size: 13px;
            margin-bottom: 12px;
        }

        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .avatar {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: #e30611;
            display: grid;
            place-items: center;
            font-weight: 800;
            font-size: 18px;
            color: #ffffff;
            letter-spacing: -0.03em;
            box-shadow: var(--shadow);
        }

        .eyebrow {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-size: 12px;
            color: var(--muted);
        }

        h1 {
            margin: 4px 0 0;
            font-size: 24px;
            font-weight: 700;
        }

        h2 {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
        }

        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 18px;
            box-shadow: var(--shadow);
            backdrop-filter: blur(16px);
            margin-bottom: 14px;
        }

        .card-strong {
            background: var(--card-strong);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.12);
            color: #c7d2fe;
            font-size: 13px;
        }

        .pill.positive { background: rgba(34, 197, 94, 0.14); color: #bbf7d0; }
        .pill.danger { background: rgba(239, 68, 68, 0.14); color: #fecaca; }

        .balance-value {
            font-size: 34px;
            font-weight: 700;
            margin: 6px 0 2px;
        }

        .muted {
            color: var(--muted);
            font-size: 14px;
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .actions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 6px;
        }

        .action-btn {
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 12px;
            text-align: center;
            background: rgba(255, 255, 255, 0.04);
            color: var(--text);
            font-weight: 600;
            text-decoration: none;
            transition: transform 0.15s ease, border 0.15s ease;
            position: relative;
        }

        .action-btn:hover { transform: translateY(-2px); border-color: rgba(255, 255, 255, 0.2); }

        .action-subtext {
            position: absolute;
            right: 10px;
            bottom: 6px;
            font-size: 11px;
            color: var(--muted);
            font-weight: 600;
        }

        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 12px;
        }

        .ghost-btn {
            border: 1px solid var(--border);
            background: rgba(255, 255, 255, 0.04);
            color: var(--text);
            border-radius: 12px;
            padding: 8px 12px;
            font-weight: 600;
            cursor: pointer;
        }

        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .kpi {
            padding: 10px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            position: relative;
        }

        .kpi strong {
            display: block;
            font-size: 17px;
            margin-top: 6px;
        }

        .progress {
            width: 100%;
            height: 6px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            overflow: hidden;
            margin-top: 10px;
        }

        .progress .bar {
            height: 100%;
            border-radius: 999px;
            background: linear-gradient(90deg, #6366f1, #22c55e);
        }

        .progress .bar.warning { background: linear-gradient(90deg, #f59e0b, #ef4444); }

        .two-col {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .cta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.04);
        }

        .cta strong {
            font-size: 17px;
            font-weight: 700;
        }

        .cta .primary-line {
            font-size: 17px;
            font-weight: 700;
            color: var(--text);
        }

        .cta .secondary-line {
            font-size: 14px;
            font-weight: 600;
            color: var(--muted);
        }

        .tag {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.08);
        }

        .plus-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            border-radius: 8px;
            background: rgba(99, 102, 241, 0.18);
            color: #c7d2fe;
            font-weight: 800;
            font-size: 14px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        ul.insights {
            list-style: none;
            padding: 0;
            margin: 10px 0 0;
            display: grid;
            gap: 8px;
        }

        ul.insights li {
            padding: 0;
            background: transparent;
            border: none;
            border-radius: 0;
            font-size: 14px;
            line-height: 1.4;
        }

        .label {
            font-size: 13px;
            color: var(--muted);
        }

        .money-negative { color: #fca5a5; }
        .money-negative-strong { color: #c41e3a; }
        .money-positive { color: #bbf7d0; }
        .money-positive-strong { color: #34d399; font-weight: 700; }

        .full-width-btn {
            width: 100%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--border);
            background: rgba(255, 255, 255, 0.06);
            color: var(--text);
            font-weight: 700;
            font-size: 16px;
            text-decoration: none;
            transition: transform 0.15s ease, border 0.15s ease;
        }

        .full-width-btn:hover {
            transform: translateY(-1px);
            border-color: rgba(255, 255, 255, 0.2);
        }

        /* Modal */
        .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(6px);
            display: none;
            align-items: center;
            justify-content: center;
            padding: 16px;
            z-index: 2000;
        }

        .modal-backdrop.active {
            display: flex;
        }

        .modal {
            background: rgba(15, 19, 35, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            max-width: 420px;
            width: 100%;
            padding: 20px;
            box-shadow: var(--shadow);
            color: var(--text);
        }

        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 14px;
        }

        .modal-title {
            font-size: 18px;
            font-weight: 700;
            margin: 0;
        }

        .close-btn {
            border: none;
            background: rgba(255, 255, 255, 0.08);
            color: var(--text);
            width: 34px;
            height: 34px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 18px;
            line-height: 1;
        }

        .title-actions {
            display: inline-flex;
            gap: 8px;
            margin-left: 8px;
        }

        .title-icon {
            width: 28px;
            height: 28px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.08);
            color: var(--text);
            font-weight: 800;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .source-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }

        .source-item {
            display: grid;
            grid-template-columns: 1fr auto auto;
            align-items: center;
            gap: 12px;
            padding: 12px 14px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            font-size: 15px;
        }

        .source-name {
            font-weight: 600;
        }

        .source-date {
            color: var(--muted);
            font-weight: 600;
            font-size: 13px;
        }

        .source-amount {
            color: #bbf7d0;
            font-weight: 700;
        }

        /* Calendar modal */
        .calendar {
            display: grid;
            gap: 12px;
        }

        .calendar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 700;
            font-size: 16px;
        }

        .calendar-legend {
            display: flex;
            gap: 12px;
            font-size: 12px;
            color: var(--muted);
        }

        .legend-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 6px;
        }

        .dot-income { background: #34d399; }
        .dot-expense { background: #f87171; }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 8px;
        }

        .calendar-day {
            aspect-ratio: 1;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            font-weight: 600;
            color: var(--text);
        }

        .calendar-day .dot {
            position: absolute;
            bottom: 6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .calendar-day.income .dot { background: #34d399; }
        .calendar-day.expense .dot { background: #f87171; }
        .calendar-day.mixed .dot {
            background: linear-gradient(90deg, #f87171 0%, #34d399 100%);
        }

        /* Card select */
        .card-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }

        .card-item {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: center;
            padding: 12px 14px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
        }

        .card-name {
            font-weight: 700;
        }

        .card-number {
            font-family: 'SF Mono', 'Consolas', monospace;
            color: var(--muted);
            font-size: 14px;
        }

        .card-meta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .card-expiry {
            font-size: 13px;
            color: var(--muted);
            font-weight: 600;
        }

        .copy-btn {
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(255, 255, 255, 0.06);
            color: var(--text);
            padding: 6px 8px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 13px;
        }

        /* Simple list modal */
        .plain-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }

        .plain-list li a {
            display: block;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: rgba(255, 255, 255, 0.04);
            color: var(--text);
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.12s ease, border 0.12s ease;
        }

        .plain-list li a:hover {
            transform: translateY(-1px);
            border-color: rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 420px) {
            body { padding: 14px 8px 32px; }
            .card { padding: 16px; }
        }
    </style>
</head>
<body>
    <div class="phone">
        <div class="status-bar">
            <span>12:24</span>
            <span>LTE • 80%</span>
        </div>

        <div class="topbar">
            <div>
                <div class="eyebrow">контроль бюджета</div>
            </div>
            <div class="avatar">A</div>
        </div>

        <section class="card card-strong">
            <div class="row">
                <div>
                    <div class="eyebrow">остаток</div>
                    <div class="balance-value">12 500 ₽</div>
                </div>
            </div>

            <div class="actions-grid">
                <a class="action-btn pay-trigger" href="#" role="button">Оплата/СПБ</a>
                <a class="action-btn" href="#">Оплата QR</a>
                <a class="action-btn card-trigger" href="#" role="button">Выбор карты<span class="action-subtext">•••• 1234</span></a>
                <a class="action-btn" href="#">Альфа Пэй</a>
            </div>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Прогноз до конца месяца</h2>
            </div>
            <div class="kpi-grid">
                <div class="kpi kpi-trigger-income" role="button" tabindex="0">
                    <div class="plus-btn">+</div>
                    <div class="label">Прогноз<br>дохода</div>
                    <strong class="money-positive">20 000 ₽</strong>
                    <div class="progress"><div class="bar" style="width:55%"></div></div>
                </div>
                <div class="kpi kpi-trigger-expense" role="button" tabindex="0">
                    <div class="plus-btn">+</div>
                    <div class="label">Прогноз<br>расходов</div>
                    <strong class="money-negative">40 000 ₽</strong>
                    <div class="progress"><div class="bar warning" style="width:80%"></div></div>
                </div>
                <div class="kpi">
                    <div class="label">Прогноз остатка<br>после платежей</div>
                    <strong class="money-negative-strong">-7 500 ₽</strong>
                    <div class="progress"><div class="bar warning" style="width:65%"></div></div>
                </div>
            </div>
            <ul class="insights">
                <li>Два крупных списания через 4 дня: ЖКХ 5 000 ₽ и кредит 5 000 ₽.</li>
            </ul>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Календарь платежей</h2>
                <span class="pill">планирование</span>
            </div>
            <a class="full-width-btn calendar-trigger" href="#" role="button">+ Открыть календарь платежей</a>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Быстрые действия</h2>
            </div>
            <div class="two-col">
                <div class="cta">
                    <div>
                        <div class="primary-line">Овердрафт</div>
                        <div class="secondary-line">Доступно 20 000 ₽</div>
                    </div>
                </div>
                <div class="cta">
                    <div>
                        <div class="primary-line">Занять у друга</div>
                        <div class="secondary-line">Указать сумму</div>
                    </div>
                </div>
                <div class="cta">
                    <div>
                        <div class="primary-line">Оплатить ЖКХ</div>
                        <div class="secondary-line">5 000 ₽ · напомнить за сутки</div>
                    </div>
                </div>
                <div class="cta">
                    <div>
                        <div class="primary-line">Оплатить кредит</div>
                        <div class="secondary-line">5 000 ₽ · 12 янв</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Ежедневные плюсы</h2>
                <span class="pill positive">пассивный доход</span>
            </div>
            <div class="two-col">
                <div class="cta">
                    <div>
                        <div class="label">Проценты ежедневно</div>
                        <strong class="money-positive-strong">+ 150 ₽</strong>
                        <div class="muted">к концу месяца ≈ 4 500 ₽</div>
                    </div>
                    <span class="tag">Повысить</span>
                </div>
                <div class="cta">
                    <div>
                        <div class="label">Кэшбэк</div>
                        <strong class="money-positive-strong">+ 1 000 ₽</strong>
                        <div class="muted">за неделю</div>
                    </div>
                    <span class="tag">Категории</span>
                </div>
            </div>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Инсайты</h2>
                <span class="pill">важное</span>
            </div>
            <ul class="insights">
                <li><strong>Ключевая ставка</strong> повысилась на 2 п.п. до 22%.</li>
                <li><strong>Расчёт</strong>: ипотека или аренда?</li>
                <li><strong>Семейная ипотека</strong> продлена до 2026 со ставкой 7%.</li>
                <li><strong>Курс USD</strong> сегодня минимальный за 2025 год — 76 ₽.</li>
            </ul>
        </section>

        <section class="card">
            <div class="section-head">
                <h2>Мои привилегии</h2>
                <button class="ghost-btn">настроить</button>
            </div>
            <ul class="insights">
                <li><strong>Кафе и доставка — 5%</strong> · активна эта неделя.</li>
                <li><strong>Транспорт и такси — 7%</strong> · действует до 31 янв.</li>
                <li><strong>Супермаркеты — 3%</strong> · базовая категория.</li>
                <li><strong>Аптеки — 10%</strong> · промо до 15 янв.</li>
            </ul>
        </section>
    </div>

    <div class="modal-backdrop" id="income-modal" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="income-modal-title">
            <div class="modal-header">
                <h3 class="modal-title" id="income-modal-title">Источники дохода
                    <span class="title-actions"><span class="title-icon">+</span><span class="title-icon">−</span></span>
                </h3>
                <button class="close-btn" type="button" aria-label="Закрыть">×</button>
            </div>
            <ul class="source-list">
                <li class="source-item"><span class="source-name">Зарплата</span><span class="source-date">15 янв</span><span class="source-amount">+ 65 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Фриланс / подработка</span><span class="source-date">8 янв</span><span class="source-amount">+ 12 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Проценты на остаток</span><span class="source-date">29 янв</span><span class="source-amount">+ 4 500 ₽</span></li>
                <li class="source-item"><span class="source-name">Кэшбэк</span><span class="source-date">11 янв</span><span class="source-amount">+ 3 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Другое</span><span class="source-date">19 янв</span><span class="source-amount">+ 2 000 ₽</span></li>
            </ul>
        </div>
    </div>

    <div class="modal-backdrop" id="expense-modal" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="expense-modal-title">
            <div class="modal-header">
                <h3 class="modal-title" id="expense-modal-title">Источники расходов
                    <span class="title-actions"><span class="title-icon">+</span><span class="title-icon">−</span></span>
                </h3>
                <button class="close-btn" type="button" aria-label="Закрыть">×</button>
            </div>
            <ul class="source-list">
                <li class="source-item"><span class="source-name">ЖКХ</span><span class="source-date">5 янв</span><span class="source-amount money-negative-strong">- 5 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Кредит</span><span class="source-date">17 янв</span><span class="source-amount money-negative-strong">- 5 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Продукты</span><span class="source-date">10 янв</span><span class="source-amount money-negative-strong">- 15 000 ₽</span></li>
                <li class="source-item"><span class="source-name">Транспорт</span><span class="source-date">4 янв</span><span class="source-amount money-negative-strong">- 3 500 ₽</span></li>
                <li class="source-item"><span class="source-name">Подписки и сервисы</span><span class="source-date">22 янв</span><span class="source-amount money-negative-strong">- 2 000 ₽</span></li>
            </ul>
        </div>
    </div>

    <div class="modal-backdrop" id="calendar-modal" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="calendar-modal-title">
            <div class="modal-header">
                <h3 class="modal-title" id="calendar-modal-title">Календарь платежей</h3>
                <button class="close-btn" type="button" aria-label="Закрыть">×</button>
            </div>
            <div class="calendar">
                <div class="calendar-header">
                    <span>Январь 2025</span>
                    <div class="calendar-legend">
                        <span><span class="legend-dot dot-expense"></span>расходы</span>
                        <span><span class="legend-dot dot-income"></span>доходы</span>
                    </div>
                </div>
                <div class="calendar-grid">
                    <div class="calendar-day"></div>
                    <div class="calendar-day"></div>
                    <div class="calendar-day"><span>1</span></div>
                    <div class="calendar-day expense"><span>2</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>3</span></div>
                    <div class="calendar-day expense"><span>4</span><span class="dot"></span></div>
                    <div class="calendar-day expense"><span>5</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>6</span></div>
                    <div class="calendar-day"><span>7</span></div>
                    <div class="calendar-day income"><span>8</span><span class="dot"></span></div>
                    <div class="calendar-day expense"><span>9</span><span class="dot"></span></div>
                    <div class="calendar-day expense"><span>10</span><span class="dot"></span></div>
                    <div class="calendar-day income"><span>11</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>12</span></div>
                    <div class="calendar-day"><span>13</span></div>
                    <div class="calendar-day"><span>14</span></div>
                    <div class="calendar-day income"><span>15</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>16</span></div>
                    <div class="calendar-day expense"><span>17</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>18</span></div>
                    <div class="calendar-day income"><span>19</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>20</span></div>
                    <div class="calendar-day"><span>21</span></div>
                    <div class="calendar-day expense"><span>22</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>23</span></div>
                    <div class="calendar-day"><span>24</span></div>
                    <div class="calendar-day"><span>25</span></div>
                    <div class="calendar-day"><span>26</span></div>
                    <div class="calendar-day"><span>27</span></div>
                    <div class="calendar-day"><span>28</span></div>
                    <div class="calendar-day income"><span>29</span><span class="dot"></span></div>
                    <div class="calendar-day"><span>30</span></div>
                    <div class="calendar-day"><span>31</span></div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="card-modal" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="card-modal-title">
            <div class="modal-header">
                <h3 class="modal-title" id="card-modal-title">Выбор карты</h3>
                <button class="close-btn" type="button" aria-label="Закрыть">×</button>
            </div>
            <ul class="card-list">
                <li class="card-item">
                    <div>
                        <div class="card-name">Основная карта</div>
                        <div class="card-number">**** 1234</div>
                    </div>
                    <div class="card-meta">
                        <span class="card-expiry">12/27</span>
                        <button class="copy-btn" type="button" data-copy="**** 1234" aria-label="Скопировать номер карты">⧉</button>
                    </div>
                </li>
                <li class="card-item">
                    <div>
                        <div class="card-name">Кредитная</div>
                        <div class="card-number">**** 9876</div>
                    </div>
                    <div class="card-meta">
                        <span class="card-expiry">05/26</span>
                        <button class="copy-btn" type="button" data-copy="**** 9876" aria-label="Скопировать номер карты">⧉</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="modal-backdrop" id="pay-modal" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="pay-modal-title">
            <div class="modal-header">
                <h3 class="modal-title" id="pay-modal-title">Оплата / СПБ</h3>
                <button class="close-btn" type="button" aria-label="Закрыть">×</button>
            </div>
            <ul class="plain-list">
                <li><a href="#">Контакты</a></li>
                <li><a href="#">На карту</a></li>
                <li><a href="#">История</a></li>
                <li><a href="#">Платежи</a></li>
            </ul>
        </div>
    </div>

    <script>
        (function() {
            const pairs = [
                { triggerSelector: '.kpi-trigger-income', modalId: 'income-modal' },
                { triggerSelector: '.kpi-trigger-expense', modalId: 'expense-modal' },
                { triggerSelector: '.calendar-trigger', modalId: 'calendar-modal' },
                { triggerSelector: '.card-trigger', modalId: 'card-modal' },
                { triggerSelector: '.pay-trigger', modalId: 'pay-modal' },
            ];

            const openModal = (modal) => {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
            };

            const closeModal = (modal) => {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
            };

            pairs.forEach(({ triggerSelector, modalId }) => {
                const trigger = document.querySelector(triggerSelector);
                const modal = document.getElementById(modalId);
                const closeBtn = modal?.querySelector('.close-btn');

                if (!trigger || !modal) return;

        const handleOpen = () => {
          try {
            const rect = trigger.getBoundingClientRect();
            const current = window.scrollY || document.documentElement.scrollTop;
            const target = Math.max(0, current + rect.top - 80);
            window.scrollTo({ top: target, behavior: 'smooth' });
          } catch {
            // fallback
            window.scrollTo(0, 0);
          }
          openModal(modal);
          requestAnimationFrame(() => {
            modal.scrollIntoView({ block: 'center', behavior: 'smooth' });
          });
        };
                const handleKey = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpen();
                    }
                };

                trigger.addEventListener('click', handleOpen);
                trigger.addEventListener('keydown', handleKey);
                closeBtn?.addEventListener('click', () => closeModal(modal));
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal(modal);
                });
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeModal(modal);
                });
            });

            // Copy buttons
            document.querySelectorAll('.copy-btn').forEach((btn) => {
                btn.addEventListener('click', async () => {
                    const text = btn.getAttribute('data-copy') || '';
                    try {
                        await navigator.clipboard.writeText(text);
                        btn.textContent = '✓';
                        setTimeout(() => { btn.textContent = '⧉'; }, 1200);
                    } catch {
                        btn.textContent = '!';
                        setTimeout(() => { btn.textContent = '⧉'; }, 1200);
                    }
                });
            });
        })();
    </script>
</body>
</html>
`
