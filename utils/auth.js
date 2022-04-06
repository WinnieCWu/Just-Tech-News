//check for existence of session property; if n/a, will call next()
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
        //if no session, call another middleware fxn or final fxn to render template
      next();
    }
  };
  
  module.exports = withAuth;