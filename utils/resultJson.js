module.exports = (response, status) => {
  if(status === 0) {
    return {
      status,
      response
    }
  }else if(status){
    return {
      status,
      error: response
    }
  }else {
    return {
      error: response
    }
  }

};