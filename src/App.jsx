import { useState } from "react";
import "./App.css";
// import Accordian from "./components/accordian/Accordian";
import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      <SearchAutocomplete />
    </div>
  );
}

export default App;
