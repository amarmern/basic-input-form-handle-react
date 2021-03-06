import "./styles.css";
import React from "react";
import { userInfo } from "./utility.js";
export default function App() {
  const [state, setState] = React.useState(userInfo);

  const handleChange = (e) => {
    const updateState = Object.assign({}, state);
    const { name, value } = e.target;
    updateState[name].value = value;
    setState(updateState);
  };
  const submitHandle = () => {
    console.log("state", state);
    const updateState = JSON.parse(JSON.stringify(state));
    updateState.fname.disable = true;
    updateState.phone.disable = true;
    updateState.city.disable = true;
    setState(updateState);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={state.fname.value}
        name={state.fname.name}
        onChange={handleChange}
        disabled={state.fname.disable}
      />
      <input
        type="text"
        value={state.city.value}
        name={state.city.name}
        onChange={handleChange}
        disabled={state.city.disable}
      />
      <input
        type="text"
        value={state.phone.value}
        name={state.phone.name}
        onChange={handleChange}
        disabled={state.phone.disable}
      />
      <button type="button" onClick={submitHandle}>
        Submit{" "}
      </button>
    </div>
  );
}
