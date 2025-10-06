// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/Products";
import NavbarLayout from "./components/NavbarLayout";

function App() {
  

  return (
    <>
    <BrowserRouter>
            <Routes>
                  <Route element={<NavbarLayout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/chi-siamo" element={<AboutPage />} />
                      <Route path="/prodotti" element={<Products />} />
                  </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
