import { usePromiseTracker } from 'react-promise-tracker';

function Button(props: any) {
  const { promiseInProgress } = usePromiseTracker({ area: props.id });
  const generalProgress = usePromiseTracker();

  return (
    <button
      size='large'
      {...props}
      loading={
        promiseInProgress || (generalProgress.promiseInProgress && !props.id)
      }
    />
  );
}

export default Button;
