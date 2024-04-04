export const errorCapture = (error, customMessage) => {
  if (error.response && error.response.data && error.response.data.msg) {
    return {
      msg: error.response.data.msg,
      status: error.response.status,
      data: error.response.data,
    };
  } else {
    return {
      msg: customMessage ? customMessage : "An error occurred",
      status: 500,
    };
  }
};
