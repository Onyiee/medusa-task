import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { SettingsRolesPage } from '../SettingsRolesPage'
import { getActiveRoles, getUserRoles } from '@/services/roles'
import { activeRolesFixture, userRolesFixture } from '@/test/fixtures/roles'

vi.mock('@/services/roles', () => ({
  getUserRoles: vi.fn(),
  getActiveRoles: vi.fn(),
}))

afterEach(() => {
  vi.clearAllMocks()
})

describe('SettingsRolesPage', () => {
  it('shows a loading state, then renders fetched rows on success', async () => {
    let resolveUserRoles
    getUserRoles.mockReturnValue(
      new Promise((resolve) => {
        resolveUserRoles = resolve
      })
    )
    getActiveRoles.mockResolvedValue(activeRolesFixture)

    const { container } = render(<SettingsRolesPage />)

    // Skeletons visible while the user-roles promise is pending.
    expect(
      container.querySelectorAll('[data-slot="skeleton"]').length
    ).toBeGreaterThan(0)

    resolveUserRoles(userRolesFixture)

    expect(await screen.findByText('Developer-basic')).toBeInTheDocument()
    // dateCreated "2023-06-01" formatted as "Jun 1, 2023".
    expect(screen.getByText('Jun 1, 2023')).toBeInTheDocument()
    // Active role from the other dataset.
    expect(screen.getByText('Developeradmin')).toBeInTheDocument()

    expect(getUserRoles).toHaveBeenCalledTimes(1)
    expect(getActiveRoles).toHaveBeenCalledTimes(1)
  })

  it('renders an error state when the roles request fails', async () => {
    getUserRoles.mockRejectedValue(new Error('Failed to load user roles'))
    getActiveRoles.mockResolvedValue(activeRolesFixture)

    render(<SettingsRolesPage />)

    await waitFor(() =>
      expect(screen.getByText('Failed to load user roles')).toBeInTheDocument()
    )
  })
})
