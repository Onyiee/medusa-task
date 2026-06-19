import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { AddRoleButton } from './AddRoleButton'
import { RoleCard } from './RoleCard'

export function ActiveRoleList({
  roles = [],
  loading = false,
  error = null,
  onRetry,
}) {
  return (
    <section className="grid gap-4 border-b border-gray-200 py-6 md:grid-cols-[280px_1fr]">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Active Role</h3>
        <p className="text-sm text-gray-600">
          Select active role available to the user.
        </p>
      </div>

      <div className="max-w-xl">
        <div className="flex flex-col gap-4">
          {loading &&
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-24 w-full rounded-xl" />
            ))}

          {!loading && error && (
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm text-destructive">
                {error.message || 'Failed to load active roles.'}
              </p>
              {onRetry && (
                <Button variant="outline" size="sm" onClick={onRetry}>
                  Try again
                </Button>
              )}
            </div>
          )}

          {!loading && !error && roles.length === 0 && (
            <p className="text-sm text-gray-500">No active roles available.</p>
          )}

          {!loading &&
            !error &&
            roles.map((role) => <RoleCard key={role.id} role={role} />)}
        </div>

        <div className="mt-2">
          <AddRoleButton />
        </div>
      </div>
    </section>
  )
}

export default ActiveRoleList
