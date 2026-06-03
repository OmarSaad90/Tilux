export default function TileDivider({ tone = 'neutral' }) {
  const color = tone === 'accent' ? 'rgba(200,146,90,0.3)' : 'rgba(40,32,15,0.08)'
  return (
    <div
      aria-hidden="true"
      style={{ height: 1, backgroundColor: color }}
    />
  )
}
