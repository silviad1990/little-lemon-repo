/* eslint-disable default-case */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
