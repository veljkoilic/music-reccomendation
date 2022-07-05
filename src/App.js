import { Home } from "./pages/Home";
import { Song } from "./pages/Song";
import { Results } from "./pages/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/search/:query" element={<Results />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
