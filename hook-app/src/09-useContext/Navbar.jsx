import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <Link className="navbar-brand" to="/">useContext</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <NavLink to="/" className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
        }}>
            Home
        </NavLink>

        <NavLink to="/about" className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
        }}>
            About
        </NavLink>
  
        <NavLink to="/login" className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
        }}>
            Login
        </NavLink>
    </ul>
  </div>
</nav>
  );
};
