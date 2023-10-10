import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Status from "./components/Status";

function App() {
  return (
    <>
      <Header />
      <main>
        <Status />
        <About />
      </main>
    </>
  );
}

export default App;
