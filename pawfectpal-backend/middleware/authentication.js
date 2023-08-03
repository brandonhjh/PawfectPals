const admin = require("firebase-admin");

// Middleware to enable authentication for protected routes
const authenticateUser = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    console.log('No ID token provided');
    return res.status(401).json({ error: 'Unauthorized1' });
  }

  const idToken = authorization.split('Bearer ')[1];
  admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      // The ID token is valid, and the decodedToken contains information about the authenticated user
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Error verifying ID token:', error);
      res.status(401).json({ error: 'Unauthorized2' });
    });
};

module.exports = { authenticateUser };
