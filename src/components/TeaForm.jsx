import { useState } from "react";

export default function TeaForm({ onAdd }) {
  const [tea, setTea] = useState({
    name: "",
    type: "Sheng",
    aroma: "",
    taste: "",
    effect: "",
    date: "",
  });

  const handleChange = (e) => {
    setTea({ ...tea, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (!tea.name || !tea.date) {
      alert("Введи назву і дату");
      return;
    }
    onAdd(tea);
  };

  return (
    <div className="form">
      <input
        name="name"
        onChange={handleChange}
        placeholder="Enter tea name"
      />

      <select name="type" onChange={handleChange}>
        <option value="Sheng">Sheng</option>
        <option value="Shu">Shu</option>
        <option value="Oolong">Oolong</option>
        <option value="White">White</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
      </select>

      <input name="aroma" onChange={handleChange} placeholder="Aroma" />
      <input name="taste" onChange={handleChange} placeholder="Taste" />
      <input name="effect" onChange={handleChange} placeholder="Effect" />
      <input type="date" name="date" onChange={handleChange} />

      <button onClick={submit}>Add</button>
    </div>
  );
}
