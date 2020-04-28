import { useState, useEffect } from 'react'

export function UseFetchDetail ({ id }) {
  const [state, setState] = useState([])

  useEffect(() => {
    const abortController = new window.AbortController()
    const signal = abortController.signal
    window.fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`, { signal: signal })
      .then(response => response.json())
      .then(data => setState(data))

    return function cleanup () {
      abortController.abort()
    }
  }, [id])
  return { state }
}
