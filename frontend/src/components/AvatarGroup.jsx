import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

function initials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function AvatarGroup({
  users = [],
  max = 4,
  className,
  size = 'size-7',
}) {
  const visible = users.slice(0, max)
  const overflow = users.length - visible.length

  return (
    <div className={cn('flex items-center -space-x-2', className)}>
      {visible.map((user) => (
        <Avatar
          key={user.id}
          className={cn(size, 'ring-2 ring-background')}
          title={user.name}
        >
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback className="text-[10px]">
            {initials(user.name)}
          </AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-gray-50 text-xs font-medium text-gray-600 ring-2 ring-background',
            size
          )}
          aria-label={`${overflow} more`}
        >
          +{overflow}
        </span>
      )}
    </div>
  )
}

export default AvatarGroup
