import { useRef, useState } from "react";
import useHideOutsideClick from "./useHideOutsideClick";

export default function TestHideOutsideHook() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useHideOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent && (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content.
          </p>
        </div>
      )}
      <button onClick={() => setShowContent(true)}>Show</button>
    </div>
  );
}
