import { CloudDownload } from 'lucide-react'
import { AvatarGroup } from '@/components/AvatarGroup'
import { DataTable } from '@/components/DataTable'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/format'
import { RoleStatusBadge } from './RoleStatusBadge'
import { RoleTypeCell } from './RoleTypeCell'

const columns = [
  {
    id: 'name',
    header: 'Name',
    sortable: true,
    cell: ({ row }) => (
      <span className="text-sm font-medium text-gray-900">{row.name}</span>
    ),
  },
  {
    id: 'type',
    header: 'Type',
    hideBelow: 'lg',
    cell: ({ row }) => <RoleTypeCell type={row.type} />,
  },
  {
    id: 'dateCreated',
    header: 'Date created',
    cell: ({ row }) => (
      <span className="text-sm text-gray-600">
        {formatDate(row.dateCreated)}
      </span>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    hideBelow: 'md',
    cell: ({ row }) => <RoleStatusBadge status={row.status} />,
  },
  {
    id: 'users',
    header: 'Role users',
    hideBelow: 'lg',
    cell: ({ row }) => <AvatarGroup users={row.users} max={4} />,
  },
  {
    id: 'actions',
    header: '',
    align: 'right',
    hideBelow: 'md',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
        aria-label={`Download ${row.name}`}
      >
        <CloudDownload className="size-5" />
      </Button>
    ),
  },
]

export function UserRolesTable({
  roles = [],
  loading = false,
  error = null,
  onRetry,
}) {
  return (
    <section className="py-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900">User Roles</h2>
        <Button variant="outline" className="gap-2 text-gray-700">
          <CloudDownload className="size-4" />
          Download all
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-background shadow-[var(--uui-shadow-card)]">
        <DataTable
          data={roles}
          columns={columns}
          selectable
          loading={loading}
          error={error}
          onRetry={onRetry}
          getRowId={(row) => row.id}
          emptyState="No user roles found."
        />
      </div>
    </section>
  )
}

export default UserRolesTable
