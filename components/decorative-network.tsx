const nodes: [number, number][] = [
  [60, 80],
  [180, 40],
  [300, 90],
  [420, 50],
  [90, 200],
  [230, 180],
  [350, 220],
  [450, 190],
  [140, 320],
  [280, 340],
  [400, 310],
]

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 6],
  [3, 7],
  [4, 5],
  [5, 6],
  [6, 7],
  [4, 8],
  [5, 9],
  [6, 9],
  [6, 10],
  [7, 10],
  [8, 9],
  [9, 10],
]

// Abstract network/connections graphic — purely decorative, low-opacity background accent.
export function DecorativeNetwork({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 400" className={className} fill="none" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 2.5} fill="currentColor" />
      ))}
    </svg>
  )
}
