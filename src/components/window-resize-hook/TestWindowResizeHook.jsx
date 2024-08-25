import useWindowResize from "./useWindowResize";

export default function TestWindowResizeHook() {
  const windowSize = useWindowResize();
  const { height, width } = windowSize;
  return (
    <div>
      <h1>Window Resize Hook</h1>
      <h3>Height:{height}</h3>
      <h3>Width:{width}</h3>
    </div>
  );
}
