import { e } from 'easy-tailwind'

export type MetadataItemProps = {
  label: string
  hint?: string
  value?: string | number | Array<string> | [number, number]
  transformValue?: (value: string | number | [number, number]) => string
}

export function MetadataItem({
  label,
  hint,
  value,
  transformValue = (value) => String(value),
}: MetadataItemProps) {
  return value ? (
    <div className="py-1 font-mono sm:grid sm:grid-cols-3 sm:gap-1 sm:py-1">
      <dt className="p-0.5 pl-0 text-sm text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <TagList>
          {Array.isArray(value) && typeof value[0] === 'string' ? (
            value.map((item) => <Tag key={item}>{transformValue(item)}</Tag>)
          ) : (
            <Tag>{transformValue(value)}</Tag>
          )}
        </TagList>
      </dd>
    </div>
  ) : null
}

function TagList({ children }: { children: React.ReactNode }) {
  return <div className={e('flex flex-row flex-wrap gap-1')}>{children}</div>
}

// TODO: Animate background sliding in horizontally on hover
function Tag({ children }: { children: React.ReactNode }) {
  return <div className={e('bg-medium p-0.5 rounded-md')}>{children}</div>
}

export function transformPercent(value: string | number| [number, number]) {
  return `${value}%`
}

export function transformPrice(value: string | number | [number, number]) {
  return `$${value} USD`
}

export function transformWeight(value: string | number | [number, number]) {
  return `${value}g`
}

export function transformElevation(value: string | number | [number, number]) {
  return Array.isArray(value) ? `${value[0]} - ${value[1]}m` : `${value}m`
}
