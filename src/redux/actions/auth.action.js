import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseApp from "../../firebase";
import {
  LOAD_PROFILE,
  LOG_OUT,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

const auth = getAuth(firebaseApp);

export const login = async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    console.log(credential);

    const accessToken = credential.accessToken;
    // const accessToken = res.user.accessToken;
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = async (dispatch) => {
  try {
    // Sign out from Firebase Authentication
    await signOut(auth);

    // Clear the session storage
    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");

    // Dispatch the LOG_OUT action
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    console.error("Error logging out:", error);
    // Handle logout error if needed
  }
};
