import { CircleCheck, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RoleCard({ role }) {
  const { name, lastActive, selected } = role

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-xl border p-4 transition-colors',
        selected
          ? 'border-brand-300 bg-brand-50'
          : 'border-gray-200 bg-background'
      )}
    >
      <span
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full',
          selected ? 'text-brand-700' : 'text-gray-500'
        )}
        aria-hidden="true"
      >
        <Users className="size-5" />
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            'text-sm font-semibold',
            selected ? 'text-brand-700' : 'text-gray-900'
          )}
        >
          {name}
        </p>
        <p
          className={cn(
            'text-sm',
            selected ? 'text-brand-600' : 'text-gray-600'
          )}
        >
          Last active {lastActive}
        </p>
        <div className="mt-2 flex items-center gap-4 text-sm font-semibold">
          <button
            type="button"
            className={cn(selected ? 'text-brand-600' : 'text-gray-600')}
          >
            Set as default
          </button>
          <button type="button" className="text-brand-700">
            Edit
          </button>
        </div>
      </div>

      {selected ? (
        <CircleCheck
          className="size-5 shrink-0 fill-brand-600 text-white"
          aria-label="Selected"
        />
      ) : (
        <span
          className="size-5 shrink-0 rounded-full border border-gray-300"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export default RoleCard
