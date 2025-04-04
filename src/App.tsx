// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./pages/NavBar";
import AboutUs from "./pages/AboutUs";
import Misarege from "./pages/Misarege";
import Chiste from "./pages/Chiste";
import Bottom from "./pages/Bottom";
import Blog from "./pages/Blog";
import NewBlog from "./pages/NewBlog"
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path="/about-us"
          element={
            <>
              <AboutUs />
            </>
          }
        />

        <Route
          path="/misarege"
          element={
            <>
              <Misarege />
            </>
          }
        />

        <Route
          path="/chistes"
          element={
            <>
              <Chiste />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <div className="pl-4 pb-2">
                <NewBlog />
              </div>
            </>
          }
        />


      </Routes>
      <Bottom />
    </Router>
  );
}

export default App;
