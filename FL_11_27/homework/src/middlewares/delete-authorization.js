function deleteAuthorization(req, res, next) {
  const pass = 'X-Password qwerty';
  if (req.method === 'DELETE') {
    if (req.get('Authorization') === pass) {
      next();
    } else {
      res.status(401).send('Unauthorized.');
    }
  } else {
    next();
  }
}

module.exports = deleteAuthorization;
