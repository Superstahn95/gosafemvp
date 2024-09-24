import { Link } from "react-router-dom";
import "./errorPage.css";
function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Page doesn&apos;t exist</p>
      <Link to="/">Return to home</Link>
    </div>
  );
}

export default ErrorPage;
