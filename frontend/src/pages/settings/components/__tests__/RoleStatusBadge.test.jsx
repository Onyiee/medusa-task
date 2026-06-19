import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RoleStatusBadge } from '../RoleStatusBadge'

describe('RoleStatusBadge', () => {
  it('renders a green "Active" badge for ACTIVE', () => {
    render(<RoleStatusBadge status="ACTIVE" />)
    const badge = screen.getByText('Active')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('text-success-700')
  })

  it('renders an amber "In Active" badge for INACTIVE', () => {
    render(<RoleStatusBadge status="INACTIVE" />)
    const badge = screen.getByText('In Active')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('text-warning-700')
  })
})
