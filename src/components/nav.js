import Hamburger from '../img/square.svg'
function App() {
    return (
      <nav className="navbar navbar-expand-lg px-lg-5 pt-3">
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <img src={Hamburger} alt="hamburger" className="hamburger" />
          </button>
          <h2 className="navbar-brand d-none">Navbar</h2>
        </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item px-4">
            <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item px-4">
            <a className="nav-link" href="#contact">Reach Out</a>
          </li>
          <li className="nav-item px-4">
            <a className="nav-link" href="#project">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default App;
