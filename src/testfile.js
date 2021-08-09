import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({ name: "", city: "", phone: "" });

  const handleChange = (e) => {
    const updatedState = { ...state };
    const { name, value } = e.target;
    updatedState[name] = value;
    setState(updatedState);
  };
  const handleSubmit = () => {
    console.log("output", state);
  };
  return (
    <div className="App">
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={state.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={state.phone}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
}
