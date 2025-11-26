import { useState, useEffect } from "react";
import { getTeas, saveTeas } from "./storage.js";
import TeaForm from "./components/TeaForm";
import TeaList from "./components/TeaList";

export default function App() {
  const [teas, setTeas] = useState([]);

useEffect(() => {
  const data = getTeas();
  setTimeout(() => setTeas(data), 0);
}, []);


  const addTea = (tea) => {
    const newTeas = [...teas, { ...tea, id: Date.now() }];
    setTeas(newTeas);
    saveTeas(newTeas);
  };

  const deleteTea = (id) => {
    const newTeas = teas.filter(t => t.id !== id);
    setTeas(newTeas);
    saveTeas(newTeas);
  };

  return (
    <div className="container">
      <TeaForm onAdd={addTea} />
      <TeaList teas={teas} onDelete={deleteTea} />
    </div>
  );
}
