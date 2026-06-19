import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] border-r border-gray-200 bg-background lg:block">
        <Sidebar />
      </aside>

      <Topbar />

      <div className="lg:pl-[280px]">
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppShell
