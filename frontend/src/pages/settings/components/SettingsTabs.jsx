import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const TABS = [
  { value: 'my-details', label: 'My details' },
  { value: 'profile', label: 'Profile' },
  { value: 'password', label: 'Password' },
  { value: 'team', label: 'Team' },
  { value: 'plan', label: 'Plan' },
  { value: 'roles', label: 'Roles' },
  { value: 'notifications', label: 'Notifications' },
  { value: 'integrations', label: 'Integrations' },
  { value: 'api', label: 'API' },
]

export function SettingsTabs() {
  return (
    <Tabs defaultValue="roles" className="w-full">
      <div className="overflow-x-auto">
        <TabsList className="h-auto w-max rounded-lg border border-gray-200 bg-background p-1">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium text-gray-500',
                'data-[state=active]:bg-gray-50 data-[state=active]:text-gray-700 data-[state=active]:shadow-none'
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  )
}

export default SettingsTabs
