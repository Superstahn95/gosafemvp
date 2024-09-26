import "./carDetails.css";
function CarDetails(props) {
  console.log("this is coming into this component");
  console.log(props);
  return (
    <div className="container">
      <p>Model: {props.details.model}</p>
      <p>Class: {props.details.class}</p>
      <p>Fuel type: {props.details.fuel_type}</p>
      <p>Make: {props.details.make}</p>
      <p>Year: {props.details.year}</p>
    </div>
  );
}

export default CarDetails;
