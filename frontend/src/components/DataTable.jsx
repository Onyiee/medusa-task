import { ArrowDown } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Static class maps so Tailwind can statically detect the utilities.
const HIDE_BELOW = {
  sm: 'hidden sm:table-cell',
  md: 'hidden md:table-cell',
  lg: 'hidden lg:table-cell',
  xl: 'hidden xl:table-cell',
}

const ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

function resolveHeader(column) {
  return typeof column.header === 'function' ? column.header() : column.header
}

function resolveCell(column, row) {
  if (typeof column.cell === 'function') return column.cell({ row })
  if (column.accessor) return row[column.accessor]
  return null
}

export function DataTable({
  data = [],
  columns = [],
  getRowId,
  selectable = false,
  loading = false,
  error = null,
  onRetry,
  emptyState = 'No data to display.',
  caption,
  className,
}) {
  const totalColumns = columns.length + (selectable ? 1 : 0)
  const rowId = (row, index) =>
    getRowId ? getRowId(row, index) : (row.id ?? index)

  const headClass = (column) =>
    cn(
      'px-6 py-3 text-xs font-medium text-gray-500',
      ALIGN[column.align ?? 'left'],
      column.hideBelow && HIDE_BELOW[column.hideBelow],
      column.headerClassName
    )

  const cellClass = (column) =>
    cn(
      'px-6 py-4',
      ALIGN[column.align ?? 'left'],
      column.hideBelow && HIDE_BELOW[column.hideBelow],
      column.cellClassName
    )

  return (
    <Table className={cn('text-sm', className)}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow className="bg-gray-50 hover:bg-gray-50">
          {selectable && (
            <TableHead className="w-12 px-6 py-3">
              <Checkbox aria-label="Select all rows" />
            </TableHead>
          )}
          {columns.map((column) => (
            <TableHead key={column.id} className={headClass(column)}>
              <span className="inline-flex items-center gap-1">
                {resolveHeader(column)}
                {column.sortable && (
                  <ArrowDown
                    className="size-3.5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {loading &&
          Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={`skeleton-${index}`}>
              {selectable && (
                <TableCell className="px-6 py-4">
                  <Skeleton className="size-4 rounded" />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.id} className={cellClass(column)}>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
              ))}
            </TableRow>
          ))}

        {!loading && error && (
          <TableRow>
            <TableCell colSpan={totalColumns} className="px-6 py-10 text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-sm text-destructive">
                  {error.message || 'Something went wrong while loading data.'}
                </span>
                {onRetry && (
                  <Button variant="outline" size="sm" onClick={onRetry}>
                    Try again
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        )}

        {!loading && !error && data.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={totalColumns}
              className="px-6 py-10 text-center text-sm text-gray-500"
            >
              {emptyState}
            </TableCell>
          </TableRow>
        )}

        {!loading &&
          !error &&
          data.map((row, index) => (
            <TableRow key={rowId(row, index)} className="bg-background">
              {selectable && (
                <TableCell className="w-12 px-6 py-4">
                  <Checkbox aria-label={`Select row ${index + 1}`} />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.id} className={cellClass(column)}>
                  {resolveCell(column, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default DataTable
