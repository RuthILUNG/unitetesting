function countRegNumber(registration){
    var registrationNumber = registration.split(",");
    return registrationNumber.length;
  }
  var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
  var regCount2 = countRegNumber('CA 182736');
  