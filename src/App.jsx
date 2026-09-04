import { Route, Router, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./ProtectedRoute";
import DashBoardPage from "./pages/admin/DashBoardPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="san-pham" element={<ProductPage />} />
          <Route path="san-pham/:id" element={<ProductDetailPage />} />
          <Route path="lien-he" element={<ContactPage />} />
          <Route path="ve-chung-toi" element={<AboutPage />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={<DashBoardPage />} />
        </Route>

        {/* Empty layout */}
        <Route path="dang-ky" element={<RegisterPage />} />
        <Route path="dang-nhap" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
