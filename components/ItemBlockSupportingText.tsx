'use client'

import { Reference } from '#/lib/data/beans'
import { parseProductUrl } from '#/lib/helpers'
import { useCollapse } from '@collapsed/react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type ItemBlockSupportingTextProps = {
  text: string | Array<string> | undefined
  url: Reference | string | undefined
}

const ExandedParagraph = ({ text }: { text: string | Array<string> }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  if (typeof text === 'string' || text.length === 1) {
    return <p className="mb-1 text-sm text-primary-900/50">{text}</p>
  }
  const collpasedText = text.slice(1)
  return (
    <>
      <p className="text-sm text-primary-900/50">{text[0]}</p>
      <div {...getCollapseProps()}>
        {collpasedText.map((paragraph, index) => (
          <p key={index} className="mt-1 text-sm text-primary-900/50">
            {paragraph}
          </p>
        ))}
      </div>
      <button
        {...getToggleProps()}
        className="mt-1 mb-2 font-mono text-sm text-primary-900/75 hover:text-primary-900"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </>
  )
}

export const ItemBlockSupportingText = ({
  text,
  url,
}: ItemBlockSupportingTextProps) => {
  const href = typeof url === 'string' ? url : url?.url
  const label = typeof url === 'string' ? parseProductUrl(url) : url?.label
  return (
    <>
      {text ? <ExandedParagraph text={text} /> : null}

      {url ? (
        <a
          rel="noreferrer"
          target="_blank"
          href={href}
          className="flex items-center gap-1 text-sm text-primary-900/50 hover:text-primary-900"
        >
          <ArrowRightIcon className="h-2 w-2" />
          <span>{label}</span>
        </a>
      ) : null}
    </>
  )
}
