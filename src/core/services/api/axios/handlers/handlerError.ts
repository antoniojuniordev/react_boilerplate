import { NotifyProps } from 'core/services/notification/notify';

interface Data {
  errors: { message: string[] };
}

export interface ResponseErrorProps {
  response: {
    status: number;
    data: Data;
  };
}

interface ResponseProps {
  status: number;
  data: Data;
}

interface HandlerErrorProps extends NotifyProps {
  response: ResponseProps;
  msgError?: string;
}

export function handlerError({
  response,
  notify,
  msgError,
}: HandlerErrorProps) {
  try {
    if (response.status === 401) {
      notify.error('Session expired');
      return;
    }
    if (response.status === 403) {
      notify.error('Permission denied');
      return;
    }
    if (response.status === 400) {
      if (msgError) {
        notify.error(msgError);
        return;
      }
      const errors = response.data.errors;
      if (Array.isArray(errors)) {
        errors.forEach(({ message }) => {
          notify.error(message);
        });
        return;
      }
    }
    notify.error('We are experiencing instability, please try again');
  } catch (error) {
    notify.error('We are experiencing instability, please try again');
  }
}
