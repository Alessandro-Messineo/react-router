// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NavbarLayout from "./components/navbar/NavbarLayout";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/prodotti" element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
