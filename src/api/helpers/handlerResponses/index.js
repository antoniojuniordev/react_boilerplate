import responses from 'api/helpers/handlerResponses/responses'

const errorsType = {
  400: 'errorBadRequest',
  401: 'errorUnauthorized',
  500: 'errorServerInternal'
}

function dispatchUpdate (message) {
  responses.success(message)
}

function dispatchError (response) {
  try {
    const errors = response.data.errors
    if (Array.isArray(errors)) {
      responses[errorsType[response.status]](errors)
      return
    }
    responses.errorServerInternal()
  } catch (error) {
    responses.errorServerInternal()
  }
}
export {
  dispatchError,
  dispatchUpdate
}
