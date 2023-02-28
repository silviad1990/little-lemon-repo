/* eslint-disable default-case */
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./containers/Footer/Footer.js";
import Main from "./Main.js";
import Menu from "./containers/Menu/Menu.js";
import Reservation from "./containers/Reservation/Reservation.jsx";
import OrderOnline from "./containers/OrderOnline/OrderOnline.js";
import Contacts from "./containers/Contacts/Contacts.js";
import Confirmation from "./components/Confirmation";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
