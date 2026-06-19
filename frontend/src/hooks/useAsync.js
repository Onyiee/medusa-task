import { useCallback, useEffect, useState } from 'react'

export function useAsync(asyncFn) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  const [nonce, setNonce] = useState(0)

  const reload = useCallback(() => setNonce((n) => n + 1), [])

  useEffect(() => {
    let cancelled = false
    // Resetting to the loading state when a (re)fetch starts is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState((prev) => ({ ...prev, loading: true, error: null }))

    asyncFn()
      .then((result) => {
        if (!cancelled) setState({ data: result, loading: false, error: null })
      })
      .catch((error) => {
        if (!cancelled) setState({ data: null, loading: false, error })
      })

    return () => {
      cancelled = true
    }
  }, [asyncFn, nonce])

  return { ...state, reload }
}
