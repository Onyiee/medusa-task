import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RoleTypeCell } from '../RoleTypeCell'

describe('RoleTypeCell', () => {
  it.each(['DEFAULT', 'CUSTOM', 'SYSTEM-CUSTOM'])(
    'renders the raw type text "%s" in muted gray',
    (type) => {
      render(<RoleTypeCell type={type} />)
      const node = screen.getByText(type)
      expect(node).toBeInTheDocument()
      expect(node).toHaveClass('text-gray-600')
    }
  )
})
