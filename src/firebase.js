import { initializeApp } from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZ-5guS5lO022dIM5IMMhBkpghDPGNvIg",
  authDomain: "yt-clone-jhkuah.firebaseapp.com",
  projectId: "yt-clone-jhkuah",
  storageBucket: "yt-clone-jhkuah.appspot.com",
  messagingSenderId: "804478920241",
  appId: "1:804478920241:web:07c88acd87d7744f075710",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;