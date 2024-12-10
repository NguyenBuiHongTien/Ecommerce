import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";


passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_GOOGLE_CLIENT_ID", // Thay thế bằng client ID của bạn
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET", // Thay thế bằng client secret của bạn
      callbackURL: "http://localhost:5000/api/users/google/callback", // URL callback sau khi đăng nhập thành công
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const existingUser = await User.findOne({ email: profile.emails[0].value });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: "", 
        });

        return done(null, newUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

// Serialize and Deserialize user for session handling
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));
