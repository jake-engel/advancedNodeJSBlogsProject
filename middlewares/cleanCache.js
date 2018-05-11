const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next(); // Waits for route handler to be done before moving on

  clearHash(req.user.id);
}