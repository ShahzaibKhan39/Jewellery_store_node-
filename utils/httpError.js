// Creates an Error that carries an HTTP status code.
// The global error handler in server.js reads err.status.
const httpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export default httpError;