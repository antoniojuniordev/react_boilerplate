import { notify, NotifyProps } from 'core/services/notification';
import { requestHandler, RequestProps } from './handlers';

const request = ({ notify }: NotifyProps) => {
  return {
    async get({ url, id, params, data, msgSuccess, msgError }: RequestProps) {
      return await requestHandler(
        'get',
        { url, id, params, data, msgSuccess, msgError },
        { notify }
      );
    },
    async post({ url, id, params, data, msgSuccess, msgError }: RequestProps) {
      return await requestHandler(
        'post',
        { url, id, params, data, msgSuccess, msgError },
        { notify }
      );
    },
    async put({ url, id, params, data, msgSuccess, msgError }: RequestProps) {
      return await requestHandler(
        'put',
        { url, id, params, data, msgSuccess, msgError },
        { notify }
      );
    },
    async delete({
      url,
      id,
      params,
      data,
      msgSuccess,
      msgError,
    }: RequestProps) {
      return await requestHandler(
        'delete',
        { url, id, params, data, msgSuccess, msgError },
        { notify }
      );
    },
  };
};

export default request({ notify });
