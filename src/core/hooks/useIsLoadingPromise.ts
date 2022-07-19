import { usePromiseTracker } from 'react-promise-tracker';

interface PropsIsLoadingPromise {
  id?: string | number;
}

export default function useIsLoadingPromise({
  id,
}: PropsIsLoadingPromise): boolean {
  if (id) {
    const { promiseInProgress } = usePromiseTracker({ area: String(id) });
    return promiseInProgress;
  }

  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress;
}
