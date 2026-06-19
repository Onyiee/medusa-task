import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { navItems } from '@/data/navItems'
import { cn } from '@/lib/utils'
import { PromoCard } from './PromoCard'
import { UserMenu } from './UserMenu'

function Logo() {
  return (
    <div className="flex items-center gap-2 px-2">
      <span
        className="size-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-700"
        aria-hidden="true"
      />
      <span className="text-lg font-semibold text-gray-900">Untitled UI</span>
    </div>
  )
}

function NavList({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Main">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.id}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors',
              item.active
                ? 'bg-gray-50 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <Icon
              className="size-5 shrink-0 text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                {item.badge}
              </span>
            )}
          </a>
        )
      })}
    </nav>
  )
}

export function Sidebar({ onNavigate }) {
  return (
    <div className="flex h-full flex-col gap-5 px-4 py-6">
      <Logo />
      <div className="relative px-1">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          defaultValue="Olivia Rhye"
          aria-label="Search"
          className="pl-9"
        />
      </div>
      <NavList onNavigate={onNavigate} />
      <div className="mt-auto flex flex-col gap-6">
        <PromoCard />
        <div className="border-t border-gray-200 pt-4">
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
