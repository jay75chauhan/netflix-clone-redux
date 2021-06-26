import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }

  return (
    <div className="profileScreen">
      <div className="ProfileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />
          <div className="profileScreen_detail">
            <h2>{truncate(user.email, 15)}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
