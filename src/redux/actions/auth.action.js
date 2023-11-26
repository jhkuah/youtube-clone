import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../../firebase";
import { LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../reducers/actionType";

const auth = getAuth(firebaseApp);

export const login = async (dispatch) => {
  try {
    dispatch({
        type: LOGIN_REQUEST,
    })
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

    const res = await signInWithPopup(auth, provider);
    const accessToken = res.user.accessToken
    const profile = {
        name: res.user.displayName,
        photoURL: res.user.photoURL
    }

    sessionStorage.setItem("ytc-access-token", accessToken)
    sessionStorage.setItem("ytc-user", JSON.stringify(profile))

    dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,

    })

    dispatch({
        type: LOAD_PROFILE,
        payload: profile
    })
    
  } catch (error) {
    dispatch({
        type: LOGIN_FAIL,
        payload: error.message
    })
    }
}

export const logout = async (dispatch) => {
    await auth.signOut()
    dispatch({
        type: LOG_OUT,
    })

    sessionStorage.removeItem("ytc-access-token")
    sessionStorage.removeItem("ytc-user")
}
