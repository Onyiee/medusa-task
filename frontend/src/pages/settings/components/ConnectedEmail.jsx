import { Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function ConnectedEmail() {
  return (
    <section className="grid gap-4 border-b border-gray-200 py-6 md:grid-cols-[280px_1fr]">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Connected email</h3>
        <p className="text-sm text-gray-600">Select role account</p>
      </div>

      <RadioGroup
        defaultValue="alternative"
        className="max-w-xl gap-4"
        aria-label="Connected email"
      >
        <div className="flex items-start gap-3">
          <RadioGroupItem
            value="account"
            id="email-account"
            className="mt-0.5"
          />
          <Label
            htmlFor="email-account"
            className="flex flex-col items-start gap-0.5"
          >
            <span className="text-sm font-medium text-gray-700">
              My account email
            </span>
            <span className="text-sm font-normal text-gray-600">
              olivia@untitledui.com
            </span>
          </Label>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <RadioGroupItem
              value="alternative"
              id="email-alternative"
              className="mt-0.5"
            />
            <Label
              htmlFor="email-alternative"
              className="text-sm font-medium text-gray-700"
            >
              An alternative email
            </Label>
          </div>
          <div className="relative md:pl-7">
            <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-500 md:left-10" />
            <Input
              type="email"
              defaultValue="billing@untitledui.com"
              aria-label="Alternative email"
              className="pl-9 md:pl-12"
            />
          </div>
        </div>
      </RadioGroup>
    </section>
  )
}

export default ConnectedEmail
