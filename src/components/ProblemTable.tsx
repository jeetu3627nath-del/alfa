import type { SegmentProblem } from '../data/diagnosis'

type Props = {
  problems: SegmentProblem[]
}

export function ProblemTable({ problems }: Props) {
  return (
    <div className="table">
      {problems.map((item) => (
        <div className="table__row table__row--stacked" key={item.segment}>
          <div className="table__cell table__cell--strong">{item.segment}</div>
          <div className="table__cell">{item.problem}</div>
          <div className="table__cell table__cell--list">
            <ul>
              {item.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

