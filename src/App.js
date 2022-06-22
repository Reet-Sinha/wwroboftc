import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAoXi53mr-t23VfAtqt1m92K7qmzNpAo4",
  authDomain: "westwood-robotics-ftc.web.app",
  databaseURL: "https://westwood-robotics-ftc-default-rtdb.firebaseio.com",
  projectId: "westwood-robotics-ftc",
  storageBucket: "westwood-robotics-ftc.appspot.com",
  messagingSenderId: "130945678658",
  appId: "1:130945678658:web:06a52bcfb6d92103c69cdb",
  measurementId: "G-WKBDP0V72D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React lol
          what da heck is going on
        </a>
        <h1>
 
      </h1>
      </header>
      
    </div>
  );
}

export default App;
