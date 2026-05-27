export default function TileDivider({ tone = 'neutral' }) {
  const lineColor =
    tone === 'accent'
      ? 'rgba(200,146,90,0.22)'
      : 'rgba(255,255,255,0.055)'

  return (
    <div
      aria-hidden="true"
      style={{
        height: 18,
        backgroundImage: `
          linear-gradient(${lineColor} 1px, transparent 1px),
          linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: '18px 18px',
      }}
    />
  )
}
