function create(prototype, properties){
  var result = {};
  Object.setPrototypeOf(result, prototype);
  for (var key in properties) {
    if (Object.prototype.hasOwnProperty.call(properties, key)) {
      result[key] = properties[key];
    }
  }
  return result;
}
