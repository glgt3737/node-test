module.exports = (response, status) => {
  if(status === 0) {
    return {
      status,
      response
    }
  }else {
    return {
      error: response
    }
  }

};