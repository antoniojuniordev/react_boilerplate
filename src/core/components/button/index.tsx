import { usePromiseTracker } from 'react-promise-tracker';
import LoadingButton from '@mui/lab/LoadingButton';

function AppButton(props: any) {
  const { promiseInProgress } = usePromiseTracker({ area: props.id });
  const generalProgress = usePromiseTracker();

  return (
    <LoadingButton
      fullWidth
      variant='contained'
      loading={
        promiseInProgress || (generalProgress.promiseInProgress && !props.id)
      }
    >
      {props.name}
    </LoadingButton>
  );
}

export default AppButton;
