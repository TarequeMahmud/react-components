import { useState } from "react";
import "./App.css";
// import Accordian from "./components/accordian/Accordian";
// import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";
import ImageSlider from "./components/image-slider/ImageSlider";
import TreeView from "./components/tree-view/TreeView";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import ColorMode from "./components/color-theme/color-theme.jsx";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <SearchAutocomplete /> */}
      {/* <ImageSlider /> */}
      {/* <TreeView /> */}
      {/* <ScrollIndicator /> */}
      <ColorMode />
    </div>
  );
}

export default App;
