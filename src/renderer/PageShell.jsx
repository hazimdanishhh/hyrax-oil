// src/renderer/PageShell.jsx
import ".././styles/main.scss";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export function PageShell({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
