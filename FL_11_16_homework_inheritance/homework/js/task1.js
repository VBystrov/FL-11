function assign(target) {
  var result = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        result[key] = source[key];
      }
    }
  }
  return result;
}
