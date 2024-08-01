//react imports
import { useState, useEffect } from "react";
//rrd imports
import { Link, useParams } from "react-router-dom";

const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light";
};

function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(toggleMode());
  //theme toggle function
  const handleToggleTheme = () => {
    const newTheme = theme == "light" ? "dark-mode" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <div className="header">
      <div className="header-container container">
        <div>
          {title && (
            <Link className="header-logo" to="/">
              <figure>
                <img
                  src={`../assets/icon-${title.toLocaleLowerCase()}.svg`}
                  alt={`${title} icon`}
                />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div>
          <div className="dark-btn" onClick={handleToggleTheme}>
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
