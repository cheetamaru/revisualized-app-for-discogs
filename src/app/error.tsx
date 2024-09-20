'use client'

import ErrorWithSearcher from "@/shared/ui/components/global/ErrorWithSearcher"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void,
}

export default function Error({
  error
}: ErrorProps) {
  return <ErrorWithSearcher message={error.message} />
}
