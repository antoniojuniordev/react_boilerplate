import { trackPromise } from 'react-promise-tracker'

export function interceptPromise (promise, reference) {
  if (reference) return trackPromise(promise, reference)
  return trackPromise(promise)
}
