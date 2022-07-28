import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './Components/ResponsiveDrawer'
import PageManager from './Components/PageManager';
import {BrowserRouter, HashRouter} from 'react-router-dom'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer>
          <PageManager/>
        </ResponsiveDrawer>
      </BrowserRouter>
        
      
      
    </div>
  );
}

export default App;
