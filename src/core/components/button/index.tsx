import { Button as Btn, ButtonProps } from 'antd';
import { usePromiseTracker } from 'react-promise-tracker';

function Button(props: ButtonProps) {
  const { promiseInProgress } = usePromiseTracker({ area: props.id });
  const generalProgress = usePromiseTracker();

  return (
    <Btn
      {...props}
      loading={
        promiseInProgress || (generalProgress.promiseInProgress && !props.id)
      }
    />
  );
}

export default Button;
