import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/login"}>Login</Link>
      <br />
      <Link to={"/join"}>Join</Link>
      <br />
      <Link to={"/dbinfo"}>DB Info</Link>
      <br />
      <Link to={"/list"}>List</Link>
      <br />
    </div>
  );
};

export default RouteTest;