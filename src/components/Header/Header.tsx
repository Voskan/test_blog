import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary active">Home</Link></li>
            <li><Link to="/articles" className="nav-link px-2 text-white">Articles</Link></li>
            <li><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
