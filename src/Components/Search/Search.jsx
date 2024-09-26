import { useEffect, useState } from "react";

const URL = "https://api.api-ninjas.com/v1/cars";
const API_KEY = "3bHSiPRlnpmcMgptU8PUEg==V2F9qoJUAay5jUiR";

export default function Search() {
  const [query, setQuery] = useState("camry");
  useEffect(() => {
    async function fetchCarModel() {
      const res = await fetch(`${URL}?model=${query}&X-Api-Key=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchCarModel();
  }, [query]);
  return (
    <div>
      <input
        id="CarModel"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Enter car model"
      />
    </div>
  );
}
