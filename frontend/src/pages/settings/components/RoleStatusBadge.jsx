import { cn } from '@/lib/utils'

const STATUS_CONFIG = {
  ACTIVE: {
    label: 'Active',
    className: 'bg-success-50 text-success-700',
    dotClassName: 'bg-success-500',
  },
  INACTIVE: {
    label: 'In Active',
    className: 'bg-warning-50 text-warning-700',
    dotClassName: 'bg-warning-500',
  },
}

export function RoleStatusBadge({ status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.INACTIVE

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium',
        config.className
      )}
    >
      <span
        className={cn('size-1.5 rounded-full', config.dotClassName)}
        aria-hidden="true"
      />
      {config.label}
    </span>
  )
}

export default RoleStatusBadge
