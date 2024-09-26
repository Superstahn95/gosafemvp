import { useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import CarDetails from "../../Components/CarDetails/CarDetails";

const URL = "https://api.api-ninjas.com/v1/cars";
const API_KEY = "3bHSiPRlnpmcMgptU8PUEg==V2F9qoJUAay5jUiR";

export default function Search() {
  const [query, setQuery] = useState("");
  const [carData, setCarData] = useState([]);

  const fetchCarModel = async () => {
    console.log("run function");
    if (!query) {
      return;
    }
    try {
      const res = await fetch(`${URL}?model=${query}&X-Api-Key=${API_KEY}`);
      const data = await res.json();
      setCarData(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => {
  //     async function fetchCarModel() {

  //     }
  //     fetchCarModel();
  //   }, [query]);
  return (
    <div>
      {/* <div></div> */}
      <div className="search-container">
        <input
          id="CarModel"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter car model"
        />
        <button onClick={fetchCarModel}>Get details</button>
      </div>
      <div className="link-text-holder">
        <Link to="/" className="link-text">
          Return to home
        </Link>
      </div>
      <div>
        {carData.length > 0 ? (
          <div className="details-holder">
            {carData.map((data, index) => (
              <CarDetails key={index} details={data} />
            ))}
          </div>
        ) : (
          <div className="empty-container">
            <p>Make sure to enter a proper car model</p>
          </div>
        )}
      </div>
    </div>
  );
}
