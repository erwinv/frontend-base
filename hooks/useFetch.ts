import { useEffect, useState } from 'react'

export default function useFetch<T, E extends Error = Error>(path: string) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [isAborted, setAborted] = useState(false)
  const [error, setError] = useState<E | null>(null)

  useEffect(() => {
    const abortCtrl = new AbortController()

    setLoading(true)
    fetch(path, {
      signal: abortCtrl.signal
    })
      .then<T>(res => res.json())
      .then((json) => {
        setData(json)
      })
      .catch((e) => {
        const isAbortError = e instanceof DOMException && e.name === 'AbortError'
        if (isAbortError) {
          setAborted(true)
        } else {
          setError(e)
          throw e
        }
      })
      .finally(() => setLoading(false))

    return () => {
      abortCtrl.abort()
    }
  }, [path])

  return { data, isLoading, isAborted, error }
}
