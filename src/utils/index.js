const successResponse = (res, resCode, message, data) => {
  const objectReturn = {
    resCode,
    message: message || "success with no conditions.",
    data,
  };
  return res.send(objectReturn).status(200);
};

module.exports = {
  successResponse,
};
