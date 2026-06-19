import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTable } from '@/components/DataTable'

const columns = [
  { id: 'name', header: 'Name', accessor: 'name' },
  { id: 'role', header: 'Role', accessor: 'role', hideBelow: 'lg' },
]

const data = [
  { id: '1', name: 'Ada Lovelace', role: 'Engineer' },
  { id: '2', name: 'Alan Turing', role: 'Scientist' },
]

describe('DataTable', () => {
  it('renders arbitrary data and columns', () => {
    render(<DataTable data={data} columns={columns} />)
    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Alan Turing')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Name' })
    ).toBeInTheDocument()
  })

  it('supports custom cell renderers', () => {
    const customColumns = [
      {
        id: 'name',
        header: 'Name',
        cell: ({ row }) => <strong>{row.name.toUpperCase()}</strong>,
      },
    ]
    render(<DataTable data={data} columns={customColumns} />)
    expect(screen.getByText('ADA LOVELACE')).toBeInTheDocument()
  })

  it('applies hideBelow responsive classes to header and cells', () => {
    render(<DataTable data={data} columns={columns} />)
    const roleHeader = screen.getByRole('columnheader', { name: 'Role' })
    expect(roleHeader).toHaveClass('hidden')
    expect(roleHeader).toHaveClass('lg:table-cell')
  })

  it('renders a leading checkbox column when selectable', () => {
    render(<DataTable data={data} columns={columns} selectable />)
    // One "select all" header + one per row.
    expect(screen.getByLabelText('Select all rows')).toBeInTheDocument()
    expect(screen.getByLabelText('Select row 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Select row 2')).toBeInTheDocument()
  })

  it('renders the empty state when there are no rows', () => {
    render(<DataTable data={[]} columns={columns} emptyState="Nothing here" />)
    expect(screen.getByText('Nothing here')).toBeInTheDocument()
  })

  it('renders an error row when error is provided', () => {
    render(
      <DataTable data={[]} columns={columns} error={new Error('Boom failed')} />
    )
    expect(screen.getByText('Boom failed')).toBeInTheDocument()
  })

  it('renders skeleton rows while loading and hides data', () => {
    const { container } = render(
      <DataTable data={data} columns={columns} loading />
    )
    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument()
    expect(
      container.querySelectorAll('[data-slot="skeleton"]').length
    ).toBeGreaterThan(0)
  })
})
