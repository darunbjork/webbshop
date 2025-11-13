import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://10.100.3.140:3000/products");
      const result = await response.json();
      setData(result);
      console.log(result);
      setLastUpdate(new Date().toLocaleTimeString());
      setLoading(false);
    } catch (error) {
      console.log("Fetching data failed", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAddItems = (idToAdd) => {
    const newItems = data.map((item) => item.id === idToAdd.id);
    setData(newItems);
  };

  return (
    <div className="card-items">
      <h1>web shop</h1>
      <button onClick={fetchData}>Fetch data</button>

      {lastUpdate && <p>Last Update: {lastUpdate}</p>}

      {laoding && <p>Loading...</p>}
      {data.map((item) => (
        <ul key={item.id} className="cards">
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Image: {item.image}</p>
          <button onClick={() => handleAddItems(item.id)}>Add</button>
        </ul>
      ))}
      {data.length === 0 && <p>No data available. Click on fetch data!</p>}
    </div>
  );
}

export default Products;
