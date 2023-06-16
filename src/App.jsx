import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wiesbaden from "./pages/Wiesbaden";
import Mainz from "./pages/Mainz";
import Frankfurt from "./pages/Frankfurt";
import Schierstein from "./pages/Schierstein";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context/Context";
import { LoadingAniContext } from "./context/Context";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className={theme ? "dark" : ""}>
      {loading ? (
        <div className="loading-animation">
          <RingLoader
            color={"#000000"}
            loading={loading}
            cssOverride={{}}
            size={150}
          />
        </div>
      ) : (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <LoadingAniContext.Provider value={{ loading, setLoading }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Schierstein />} />
                <Route path="/wiesbaden" element={<Wiesbaden />} />
                <Route path="/mainz" element={<Mainz />} />
                <Route path="/frankfurt" element={<Frankfurt />} />
              </Routes>
            </BrowserRouter>
          </LoadingAniContext.Provider>
        </ThemeContext.Provider>
      )}
    </main>
  );
}

export default App;
