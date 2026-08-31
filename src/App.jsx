import "./App.css";
import { useProducts } from "./hooks/product";

const App = () => {
  const { data, loading, error } = useProducts();
  if (loading) return <p>Dang tai...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.thumbnail} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default App;
