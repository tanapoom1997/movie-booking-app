const successResponse = (res, message, data) => {
  const objectReturn = {
    resCode: 200,
    message: message || "success with no conditions.",
    data,
  };
  return res.send(objectReturn).status(200);
};

module.exports = {
  successResponse,
};
