import { useEffect,useState } from "react";
import { CharacterList } from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-light">
      <h1 className="text-center text-primary fw-bold display-2">Rick and Morty</h1>
      <CharacterList/>
    </div>
  )
}
export default App;