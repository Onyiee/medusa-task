import { useAsync } from '@/hooks/useAsync'
import { getActiveRoles, getUserRoles } from '@/services/roles'
import { SettingsHeader } from './components/SettingsHeader'
import { SettingsTabs } from './components/SettingsTabs'
import { ConnectedEmail } from './components/ConnectedEmail'
import { ActiveRoleList } from './components/ActiveRoleList'
import { UserRolesTable } from './components/UserRolesTable'

export function SettingsRolesPage() {
  const {
    data: userRoles,
    loading: userRolesLoading,
    error: userRolesError,
    reload: reloadUserRoles,
  } = useAsync(getUserRoles)

  const {
    data: activeRoles,
    loading: activeRolesLoading,
    error: activeRolesError,
    reload: reloadActiveRoles,
  } = useAsync(getActiveRoles)

  return (
    <div className="flex flex-col gap-6">
      <SettingsHeader />
      <SettingsTabs />

      <div>
        <h2 className="text-lg font-semibold text-gray-900">User Roles</h2>
        <p className="text-sm text-gray-600">
          Update your roles details and information.
        </p>
        <div className="mt-5 border-t border-gray-200" />

        <ConnectedEmail />

        <ActiveRoleList
          roles={activeRoles ?? []}
          loading={activeRolesLoading}
          error={activeRolesError}
          onRetry={reloadActiveRoles}
        />

        <UserRolesTable
          roles={userRoles ?? []}
          loading={userRolesLoading}
          error={userRolesError}
          onRetry={reloadUserRoles}
        />
      </div>
    </div>
  )
}

export default SettingsRolesPage
