import { useState } from "react";
import "./LoginScreen.css";
import SingUpScreen from "./SingUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="some errorrrr..........."
        />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sing In
        </button>
        <div className=" loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SingUpScreen />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more..</h1>
            <h2>Whatch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getstarted"
                >
                  GET STARTED
                </button>
              </form>
              <a
                className="tag"
                href="https://github.com/jay75chauhan"
                target="_blank"
              >
                <span>created by</span> 🔥jayChauhan🔥
              </a>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
