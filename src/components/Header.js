import { useState } from "react";
import logo from "../assets/img/food-villa.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
        <img 
        className="logo" 
        alt="Food Villa Logo" 
        src={logo} 
        />
    </a>
)

const loggedInUser = () => {
    // API call to check authenticated User
    return true;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>
                <Link to="/">
                    Home
                </Link>
                </li>
                <li>
                    <Link to="/instamart">
                        Instamart
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        {
            isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
             ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
             )
        }
      </div>
    );
}

export default Header