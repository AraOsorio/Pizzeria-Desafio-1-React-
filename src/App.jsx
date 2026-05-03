import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./context/UserContext";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔒 Si está logueado NO puede ver login */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

        {/* 🔒 Si está logueado NO puede ver register */}
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/cart" element={<Cart />} />

        {/* 🍕 IMPORTANTE: dinámica */}
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* 🔒 Ruta protegida */}
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;