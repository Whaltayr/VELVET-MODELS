import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Casting from "./pages/Casting";
import Scouting from "./pages/Scouting";

export default function App() {
  return (
    <BrowserRouter>
      {/*A navbar fica fora do  <Route> para aparecer em todas as paginas Usamos stiky ou fixed para ela não desaparecer */}
      <Navbar />

      <main className="pt-20 md:pt-12 ">
      {/* Adicionei padding top para o conteudo não ficar escondido atrás da nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Casting />} />
        <Route path="/join" element={<Scouting />} />

        {/* Boa pratica : rota 404 para URLs que não existem */}
        <Route
          path="*"
          element={<h1 className="text-center mt-40">404 Not Found</h1>}
        />
      </Routes>

      </main>
    </BrowserRouter>
  );
}
