import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
