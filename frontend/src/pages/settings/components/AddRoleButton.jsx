import { Plus } from 'lucide-react'

export function AddRoleButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
    >
      <Plus className="size-4" />
      Add role to user
    </button>
  )
}

export default AddRoleButton
