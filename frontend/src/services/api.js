const BASE_URL = import.meta.env.VITE_API_URL || '/api'

export async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`

  let response
  try {
    response = await fetch(url, {
      headers: { Accept: 'application/json', ...options.headers },
      ...options,
    })
  } catch (cause) {
    throw new Error(`Network request to ${url} failed`, { cause })
  }

  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`)
  }

  return response.json()
}
