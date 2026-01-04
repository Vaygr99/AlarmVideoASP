// all css-files (.css)
import "./assets/styles/index.css";
// get components for App
import { Header, Footer } from "./models/unifications/forApp.js";

function App() {
  return (
    <div>
      <Header />
      <main>MAIN</main>
      <Footer />
    </div>
  );
}

export default App;
