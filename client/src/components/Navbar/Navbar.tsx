import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Connection from "../../assets/images/connec_ash.png";
import Leadboard from "../../assets/images/lead_ash.png";

interface user {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  inscription_date: string;
}

export default function Navbar() {
  const [user, setUser] = useState(null as user | null);

  return (
    <>
      {user == null ? (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <img src={Leadboard} alt="leadboard" />
          <hr />
          <Link to="/StreetArtMap/authentication">
            <img src={Connection} alt="connection" />
          </Link>
          <hr className="vertical-divider" />
        </div>
      ) : (
        <div className="navbar-icon box-divider">
          user && <p>Hello {user?.email}</p>
          <hr className="vertical-divider" />
          <img src={Leadboard} alt="leadboard" />
          <hr />
          <Link to="/StreetArtMap/authentication">
            <img src={Connection} alt="connection" />
          </Link>
          <hr className="vertical-divider" />
          <button
            type="button"
            className="logout-btn"
            onClick={() => {
              setUser(null);
              console.info(user);
            }}
          >
            Logout
          </button>
          <hr className="vertical-divider" />
        </div>
      )}
    </>
  );
}
