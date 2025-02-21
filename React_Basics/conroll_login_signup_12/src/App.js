import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contactus from "./components/Contactus";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="App w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <main className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/login"
            element={<Login isLoggedIn={isLoggedIn} setLogin={setLogin} />}
          />
          <Route
            path="/signup"
            element={<Signup isLoggedIn={isLoggedIn} setLogin={setLogin} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
