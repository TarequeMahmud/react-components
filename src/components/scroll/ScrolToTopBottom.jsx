import { useRef } from "react";
import useFetch from "./../use-fetch/useFetch";
export default function ScrollToTopBottom() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>Scroll to Top and Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <div ref={bottomRef}></div>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
