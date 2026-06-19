import { LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function UserMenu() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10">
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-gray-900">
          Olivia Rhye
        </p>
        <p className="truncate text-sm text-gray-600">olivia@untitledui.com</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-900"
        aria-label="Log out"
      >
        <LogOut className="size-5" />
      </Button>
    </div>
  )
}

export default UserMenu
