import './App.css'
import { useState } from 'react'
import { AiProjectCard } from './components/AiProjectCard'
import { InitiativeCard } from './components/InitiativeCard'
import { MetricCard } from './components/MetricCard'
import { Section } from './components/Section'
import { DiagnosisCard } from './components/DiagnosisCard'
import { MobileStatic } from './components/MobileStatic'
import { aiPortfolio } from './data/aiPortfolio'
import { headerMetrics, segmentProblems } from './data/diagnosis'
import { roadmap } from './data/roadmap'
import {
  b2bAiPortfolio,
  b2bHeaderMetrics,
  b2bRoadmap,
  b2bSegmentProblems,
} from './data/b2b'

function App() {
  const [activeDomain, setActiveDomain] = useState<'b2b' | 'b2c'>('b2c')
  const [activeSection, setActiveSection] = useState<
    'diagnosis' | 'initiatives' | 'mobile'
  >('diagnosis')

  const domainTabs: { id: typeof activeDomain; label: string }[] = [
    { id: 'b2c', label: 'B2C' },
    { id: 'b2b', label: 'B2B' },
  ]

  const sectionTabs: { id: typeof activeSection; label: string }[] =
    activeDomain === 'b2c'
      ? [
          { id: 'diagnosis', label: 'Диагностика' },
          { id: 'initiatives', label: 'Инициативы' },
          { id: 'mobile', label: 'Мобильный банк' },
        ]
      : [
          { id: 'diagnosis', label: 'Диагностика' },
          { id: 'initiatives', label: 'Инициативы' },
        ]

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__brand">
          <span className="dot" />
          <span>AI & Transformation · Интервью</span>
        </div>
        <nav className="topbar__nav">
          {domainTabs.map((item) => (
            <button
              key={item.id}
              className={`tab ${activeDomain === item.id ? 'tab--active' : ''}`}
              onClick={() => {
                if (item.id === 'b2b' && activeSection === 'mobile') {
                  setActiveSection('diagnosis')
                }
                setActiveDomain(item.id)
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="subtabs">
          {sectionTabs.map((item) => (
            <button
              key={item.id}
              className={`tab ${activeSection === item.id ? 'tab--active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {activeSection === 'diagnosis' && (
          <Section
            id="diagnosis"
            title={`${activeDomain.toUpperCase()} · Оценка ситуации`}
            subtitle="Причины оттока и потери рынка в 2025 году"
          >
            <div className="grid grid--metrics-full">
              <MetricCard
                metric={
                  activeDomain === 'b2b' ? b2bHeaderMetrics[0] : headerMetrics[0]
                }
              />
            </div>
            <div className="grid grid--metrics">
              {(activeDomain === 'b2b'
                ? b2bHeaderMetrics.slice(1)
                : headerMetrics.slice(1)
              ).map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
            <p className="eyebrow eyebrow--section">Сегменты клиентов</p>
            <div className="grid grid--initiatives">
              {(activeDomain === 'b2b' ? b2bSegmentProblems : segmentProblems).map(
                (item) => (
                  <DiagnosisCard key={item.segment} item={item} />
                ),
              )}
            </div>
          </Section>
        )}

        {activeSection === 'initiatives' && (
          <Section
            id="initiatives"
            title={
              activeDomain === 'b2b'
                ? 'B2B · Продаем компетенции, а не кредит'
                : 'B2C · Продаем осознанность, а не кредит'
            }
          >
            <div className="grid grid--initiatives">
              {(activeDomain === 'b2b' ? b2bRoadmap : roadmap).map((item) => (
                <InitiativeCard key={item.id} initiative={item} />
              ))}
            </div>

            <p className="eyebrow eyebrow--section">AI инициативы</p>
            <div className="grid grid--ai">
              {(activeDomain === 'b2b' ? b2bAiPortfolio : aiPortfolio).map(
                (project) => (
                  <AiProjectCard key={project.title} project={project} />
                ),
              )}
            </div>
          </Section>
        )}

        {activeSection === 'mobile' && activeDomain === 'b2c' && (
          <Section
            id="mobile"
            title="B2C · Мобильный банк"
            subtitle="Полный макет мобильного банка"
          >
            <div className="mobile-static-wrap">
              <MobileStatic />
            </div>
          </Section>
        )}

      </main>

      <footer className="footer">
        <a className="button button--ghost" href="#top">
          Наверх
        </a>
      </footer>
    </div>
  )
}

export default App
