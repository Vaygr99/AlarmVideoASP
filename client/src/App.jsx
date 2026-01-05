import { BrowserRouter } from "react-router-dom";

// all css-files (.css)
import "./assets/styles/index.css";
// get components for App
import { Header, Footer } from "./models/unifications/forApp.js";

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
