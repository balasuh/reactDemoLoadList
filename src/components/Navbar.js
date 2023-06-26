import loadListLogo from '../assets/aircnc_logo_v4.png';

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="nav-item logo">
          <img src={loadListLogo} className="App-logo" alt="logo" />
        </div>
      </nav>
    )
  }
  
  export default Navbar;