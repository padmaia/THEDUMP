import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import expressSession from 'express-session';

export function serializeUser(user, cb) {
  cb(null, user);
}

export function deserializeUser(obj, cb) {
  cb(null, obj);
}

export default function setUpAuth(app) {
  const {
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    APP_URL,
    SESSION_SECRET,
  } = process.env;

  passport.use(new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: `${APP_URL}/auth/facebook/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    },
  ));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.use(expressSession({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/login', passport.authenticate('facebook'));
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
  );
}
