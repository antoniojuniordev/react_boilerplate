import Btn, { ButtonProps } from '@mui/material/Button';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { useIsLoadingPromise } from 'core/hooks';
import { translate } from 'core/i18n';

export type PropsButton = ButtonProps &
  LoadingButtonProps & {
    name: string;
  };

function Button({ name, ...props }: PropsButton) {
  const isLoading = useIsLoadingPromise(props);

  return (
    <>
      {isLoading ? (
        <LoadingButton
          loading={isLoading}
          loadingIndicator='Carregando...'
          variant='contained'
          fullWidth
          {...props}
          disabled
        >
          {translate(name)}
        </LoadingButton>
      ) : (
        <Btn
          variant='contained'
          fullWidth
          {...props}
          style={{ textTransform: 'capitalize' }}
        >
          {translate(name)}
        </Btn>
      )}
    </>
  );
}

export default Button;
