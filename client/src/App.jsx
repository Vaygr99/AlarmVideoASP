import { BrowserRouter } from "react-router-dom";

// all css-files in project (.css)
import "./assets/styles/index.css";
// Components list for App
import { Header, Footer } from "./models/unifications/forApp.js";

// Base client component
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main id="main">MAIN</main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
