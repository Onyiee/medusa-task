import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AvatarGroup } from '@/components/AvatarGroup'

const makeUsers = (n) =>
  Array.from({ length: n }).map((_, i) => ({
    id: `u${i}`,
    name: `User ${i}`,
    avatarUrl: `https://i.pravatar.cc/80?u=u${i}`,
  }))

describe('AvatarGroup', () => {
  it('caps visible avatars and shows a +N overflow chip', () => {
    render(<AvatarGroup users={makeUsers(6)} max={4} />)
    expect(screen.getByText('+2')).toBeInTheDocument()
    expect(screen.getByLabelText('2 more')).toBeInTheDocument()
  })

  it('does not show overflow when within the max', () => {
    render(<AvatarGroup users={makeUsers(3)} max={4} />)
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
  })

  it('renders nothing problematic for an empty list', () => {
    const { container } = render(<AvatarGroup users={[]} />)
    expect(container.querySelector('[aria-label$="more"]')).toBeNull()
  })
})
