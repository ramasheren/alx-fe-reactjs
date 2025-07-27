import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      backgroundColor: '#f0f0f0'
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

