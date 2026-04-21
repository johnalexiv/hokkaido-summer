export function Footer() {
  return (
    <footer className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <div className="font-display text-2xl text-ink">北海道 2026</div>
          <div className="mt-1 text-sm text-smoke">Jul 17 — Jul 31 · John & Leia</div>
        </div>
        <div className="text-xs text-smoke max-w-md">
          Working itinerary. Everything marked booked is confirmed; pending items are the final loose ends
          before the window closes.
        </div>
      </div>
    </footer>
  )
}
