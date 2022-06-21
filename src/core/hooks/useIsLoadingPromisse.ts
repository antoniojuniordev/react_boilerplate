import { usePromiseTracker } from 'react-promise-tracker';

interface PropsIsLoadingPromisse {
  id?: string | number;
}
export default function useIsLoadingPromisse({
  id,
}: PropsIsLoadingPromisse): boolean {
  if (id) {
    const { promiseInProgress } = usePromiseTracker({ area: String(id) });
    return promiseInProgress;
  }

  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress;
}
