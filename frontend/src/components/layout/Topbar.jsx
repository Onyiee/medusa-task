import { MobileNav } from './MobileNav'

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-200 bg-background px-4 py-3 lg:hidden">
      <div className="flex items-center gap-2">
        <span
          className="size-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-700"
          aria-hidden="true"
        />
        <span className="text-lg font-semibold text-gray-900">Untitled UI</span>
      </div>
      <MobileNav />
    </header>
  )
}

export default Topbar
