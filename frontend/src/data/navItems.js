import {
  House,
  ChartColumn,
  Layers,
  SquareCheck,
  Flag,
  Users,
  LifeBuoy,
  Settings,
} from 'lucide-react'

export const navItems = [
  { id: 'home', label: 'Home', icon: House, href: '#' },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: ChartColumn,
    href: '#',
    badge: '10',
  },
  { id: 'projects', label: 'Projects', icon: Layers, href: '#' },
  { id: 'tasks', label: 'Tasks', icon: SquareCheck, href: '#' },
  { id: 'reporting', label: 'Reporting', icon: Flag, href: '#' },
  { id: 'users', label: 'Users', icon: Users, href: '#' },
  { id: 'support', label: 'Support', icon: LifeBuoy, href: '#' },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '#',
    active: true,
  },
]
