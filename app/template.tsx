export default function Template({ children }: { children: React.ReactNode }) {
  // Subtle page-transition on every route change (disabled by the reduced-motion rule in corporate.css)
  return <div className="pt">{children}</div>
}
