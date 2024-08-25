import useFetch from "./useFetch";

export default function TestUseFetch() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>UseFetch custom hook testing</h1>
      {pending ? <h2>{pending}</h2> : null}
      {error ? <h1>{error}</h1> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
}
