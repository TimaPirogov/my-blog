import { useState } from "react";
import "./App.css";
import MainBlock from "./components/MainBlock";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {
        isLoggedIn ? 
          <MainBlock setIsLoggedIn={setIsLoggedIn}/> 
          : 
          <LoginPage setIsLoggedIn={setIsLoggedIn}/>
      }
        </div>
  );
}

export default App;
