// import i18n from 'core/i18n';

// import responses from 'core/services/notification';

interface Data {
  errors: { message: string[] };
}

export interface PropsResponseError {
  response: {
    status: number;
    data: Data;
  };
}

interface Props {
  status: number;
  data: Data;
}

export function dispatchError(response: Props) {
  try {
    if (response.status === 401) {
      // responses.error(i18n.t('error401'));
      return;
    }
    if (response.status === 403) {
      // responses.error(i18n.t('error403'));
      return;
    }
    if (response.status === 400) {
      const errors = response.data.errors;
      if (Array.isArray(errors)) {
        errors.forEach(({ message }) => {
          // responses.error(message);
        });
        return;
      }
    }
    // responses.error(i18n.t('error500'));
  } catch (error) {
    // responses.error(i18n.t('error500'));
  }
}
