let requestCount = 0;
let startTime = Date.now();

const rateLimiter = (req, res, next) => {
  const currentTime = Date.now();

  // Reset every 1 minute
  if (currentTime - startTime > 60000) {
    startTime = currentTime;
    requestCount = 0;
  }

  requestCount++;

  if (requestCount > 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  next();
};

module.exports = rateLimiter;
