import i18n from 'core/i18n';

import responses from 'core/services/notification';
import { destroySession } from 'core/services/storage';

interface Message {
  message: string[];
}

interface Data {
  errors: Message;
}

export interface PropsError {
  status: number;
  data: Data;
}

export interface PropsResponseError {
  response: PropsError;
}

interface Props {
  status: number;
  data: Data;
}

export function dispatchError(response: Props) {
  try {
    if (response.status === 401) {
      responses.error(i18n.t('error401'));
      destroySession();
      return;
    }
    if (response.status === 403) {
      responses.error(i18n.t('error403'));
      destroySession();
      return;
    }
    if (response.status === 400) {
      const errors = response.data.errors;
      if (Array.isArray(errors)) {
        errors.forEach(({ message }) => {
          responses.error(message);
        });
        return;
      }
    }
    responses.error(i18n.t('error500'));
  } catch (error) {
    responses.error(i18n.t('error500'));
  }
}
