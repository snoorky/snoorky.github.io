import { useEffect, useState } from "react";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Projects from "./pages/Projects";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao carregar os projetos:", error));
  }, []);

  return (
    <main className="w-screen min-h-screen text-gray-300">
      <Header />
      <Banner />
      <About />
      <Projects data={projects} />
      <Footer />
    </main>
  );
}
