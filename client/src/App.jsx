import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// all css-files in project (.css)
import "./assets/styles/index.css";
// Components list for App
import {
  Header,
  Footer,
  Burglar,
  Mount,
  Home,
  Video,
  About,
  Fire,
  Admin,
  Offer,
  Info,
  Customers,
  Edit,
} from "./models/unifications/forApp.js";

// Base client component
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="burglar" element={<Burglar />} />
            <Route path="video" element={<Video />} />
            <Route path="mount" element={<Mount />} />
            <Route path="fire" element={<Fire />} />
            <Route path="about" element={<About />} />
            {/* admin pages */}
            <Route path="admin" element={<Admin />}>
              <Route path="info" element={<Info />} />
              <Route index element={<Navigate to="info" replace />} />
              <Route path="customers" element={<Customers />} />
              <Route path="edit" element={<Edit />} />
              <Route path="offer" element={<Offer />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
