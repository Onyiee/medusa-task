import { Button } from '@/components/ui/button'

export function PromoCard() {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <p className="text-sm font-semibold text-gray-900">
        New features available!
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Check out the new dashboard view. Pages now load faster.
      </p>
      <img
        src="https://i.pravatar.cc/320?img=47"
        alt="Preview of the new dashboard"
        className="mt-4 h-28 w-full rounded-lg object-cover"
        loading="lazy"
      />
      <div className="mt-3 flex items-center gap-4 text-sm font-semibold">
        <button type="button" className="text-gray-600 hover:text-gray-900">
          Dismiss
        </button>
        <Button
          variant="link"
          className="h-auto p-0 text-brand-700 hover:text-brand-600"
        >
          What&apos;s new?
        </Button>
      </div>
    </div>
  )
}

export default PromoCard
